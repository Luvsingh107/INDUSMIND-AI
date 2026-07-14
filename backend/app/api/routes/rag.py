from fastapi import APIRouter

from app.rag.rag_service import RAGService
from app.schemas.rag import RAGRequest
from app.schemas.rag import RAGResponse

router = APIRouter(
    prefix="/rag",
    tags=["RAG"],
)

service = RAGService()


@router.post(
    "/ask",
    response_model=RAGResponse,
)
async def ask(request: RAGRequest):
    return service.answer(request.question)