import chromadb


class ChromaService:
    def __init__(self):
        self.client = chromadb.PersistentClient(path="chroma")

        self.collection = self.client.get_or_create_collection(
            name="documents"
        )

    def add(
        self,
        ids,
        documents,
        embeddings,
        metadatas,
    ):
        self.collection.add(
            ids=ids,
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas,
        )

    def search(
        self,
        query_embedding,
        top_k=5,
    ):
        return self.collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k,
        )