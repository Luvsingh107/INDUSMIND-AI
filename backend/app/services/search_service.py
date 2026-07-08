from app.embeddings.embedding_service import EmbeddingService
from app.vectorstore.chroma_service import ChromaService


class SearchService:
    def __init__(self):
        self.embedding = EmbeddingService()
        self.chroma = ChromaService()

    def search(self, query: str, top_k: int = 5):
        embedding = self.embedding.embed([query])[0]

        response = self.chroma.search(
            embedding,
            top_k,
        )

        results = []

        documents = response.get("documents", [[]])[0]
        distances = response.get("distances", [[]])[0]

        for document, distance in zip(documents, distances):
            results.append(
                {
                    "text": document,
                    "score": round(1 - distance, 4),
                }
            )

        return {
            "results": results
        }