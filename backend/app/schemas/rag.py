from typing import List

from pydantic import BaseModel


class RAGRequest(BaseModel):
    question: str


class Source(BaseModel):
    filename: str
    score: int
    page: int | None = None


class RAGMetrics(BaseModel):
    documents_found: int
    chunks_retrieved: int
    chunks_used: int
    embedding_model: str
    llm: str
    retrieval_time_ms: int
    generation_time_ms: int
    total_time_ms: int


class RAGResponse(BaseModel):
    answer: str
    confidence: int
    sources: List[Source]
    metrics: RAGMetrics