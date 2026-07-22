from collections import Counter

import chromadb
from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/stats")
async def dashboard_stats():

    client = chromadb.PersistentClient(path="chroma")

    collection = client.get_or_create_collection("documents")

    data = collection.get(
        include=["metadatas"]
    )

    metadatas = data.get("metadatas", [])

    total_chunks = len(metadatas)

    filenames = set()

    doc_types = Counter()

    for meta in metadatas:

        if not meta:
            continue

        filename = (
            meta.get("filename")
            or meta.get("source")
            or "Unknown"
        )

        filenames.add(filename)

        doc_type = (
            meta.get("document_type")
            or meta.get("type")
            or "Unknown"
        )

        doc_types[doc_type] += 1

    return {
        "documents": len(filenames),
        "chunks": total_chunks,
        "collections": 1,
        "document_types": dict(doc_types),
    }