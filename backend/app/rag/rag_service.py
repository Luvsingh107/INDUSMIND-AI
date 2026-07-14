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

        chunks = self.retriever.retrieve(
            question=question,
            top_k=5,
        )

        if not chunks:

            return {
                "answer": "I couldn't find any relevant information in the uploaded documents.",
                "sources": 0,
            }

        prompt = PromptBuilder.build(
            question,
            chunks,
        )

        answer = self.llm.generate(
            prompt,
        )

        return {
            "answer": answer,
            "sources": len(chunks),
        }