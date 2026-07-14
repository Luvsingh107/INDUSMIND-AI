from app.embeddings.embedding_service import EmbeddingService
from app.vectorstore.chroma_service import ChromaService


class SearchService:

    def __init__(self):

        self.embedding = EmbeddingService()

        self.chroma = ChromaService()

    def search(
        self,
        query: str,
        top_k: int = 5,
    ):

        embedding = self.embedding.embed([query])[0]

        results = self.chroma.search(
            embedding,
            top_k,
        )

        documents = results.get("documents", [[]])[0]

        metadatas = results.get("metadatas", [[]])[0]

        distances = results.get("distances", [[]])[0]

        response = []

        for doc, metadata, distance in zip(
            documents,
            metadatas,
            distances,
        ):

            response.append(
                {
                    "text": doc,
                    "metadata": metadata,
                    "score": round(
                        1 - distance,
                        3,
                    ),
                }
            )

        return {
            "results": response,
        }