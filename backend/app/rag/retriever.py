from app.search.search_service import SearchService


class Retriever:

    def __init__(self):
        self.search = SearchService()

    def retrieve(
        self,
        question: str,
        top_k: int = 5,
    ):

        results = self.search.search(
            question,
            top_k=top_k,
        )

        chunks = []

        for item in results["results"]:

            if item["score"] <= 0:
                continue

            metadata = item.get("metadata", {}) or {}

            chunks.append(
                {
                    "text": item["text"],
                    "score": item["score"],
                    "metadata": metadata,
                }
            )

        return chunks