import time

from app.llm.factory import LLMFactory
from app.rag.prompt_builder import PromptBuilder
from app.rag.retriever import Retriever


class RAGService:

    def __init__(self):
        self.retriever = Retriever()
        self.llm = LLMFactory.create()

    def answer(
        self,
        question: str,
    ):

        overall_start = time.perf_counter()

        # -------------------------------
        # Retrieval
        # -------------------------------
        retrieval_start = time.perf_counter()

        chunks = self.retriever.retrieve(
            question=question,
            top_k=5,
        )

        retrieval_time = int(
            (time.perf_counter() - retrieval_start) * 1000
        )

        if not chunks:
            return {
                "answer": "I couldn't find any relevant information in the uploaded documents.",
                "confidence": 0,
                "sources": [],
                "metrics": {
                    "documents_found": 0,
                    "chunks_retrieved": 0,
                    "chunks_used": 0,
                    "embedding_model": "all-MiniLM-L6-v2",
                    "llm": self.llm.__class__.__name__,
                    "retrieval_time_ms": retrieval_time,
                    "generation_time_ms": 0,
                    "total_time_ms": retrieval_time,
                },
            }

        # -------------------------------
        # Prompt Construction
        # -------------------------------
        prompt = PromptBuilder.build(
            question,
            [chunk["text"] for chunk in chunks],
        )

        # -------------------------------
        # LLM Generation
        # -------------------------------
        generation_start = time.perf_counter()

        answer = self.llm.generate(prompt)

        generation_time = int(
            (time.perf_counter() - generation_start) * 1000
        )

        total_time = int(
            (time.perf_counter() - overall_start) * 1000
        )

        # -------------------------------
        # Confidence
        # -------------------------------
        best_score = max(
            chunk["score"] for chunk in chunks
        )

        confidence = max(
            35,
            round(best_score * 100),
        )

        # -------------------------------
        # Sources
        # -------------------------------
        sources = []
        seen_files = set()

        sorted_chunks = sorted(
            chunks,
            key=lambda x: x["score"],
            reverse=True,
        )

        for chunk in sorted_chunks:

            metadata = chunk.get("metadata", {})

            filename = (
                metadata.get("filename")
                or metadata.get("source")
                or "Unknown Document"
            )

            if filename in seen_files:
                continue

            seen_files.add(filename)

            source = {
                "filename": filename,
                "score": max(
                    1,
                    round(chunk["score"] * 100),
                ),
            }

            if "page" in metadata:
                source["page"] = metadata["page"]

            sources.append(source)

        # -------------------------------
        # Metrics
        # -------------------------------
        metrics = {
            "documents_found": len(seen_files),
            "chunks_retrieved": len(chunks),
            "chunks_used": min(3, len(chunks)),
            "embedding_model": "all-MiniLM-L6-v2",
            "llm": self.llm.__class__.__name__,
            "retrieval_time_ms": retrieval_time,
            "generation_time_ms": generation_time,
            "total_time_ms": total_time,
        }

        return {
            "answer": answer,
            "confidence": confidence,
            "sources": sources,
            "metrics": metrics,
        }