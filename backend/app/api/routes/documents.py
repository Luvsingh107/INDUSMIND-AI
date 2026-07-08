from fastapi import APIRouter, File, UploadFile

from app.schemas.document import DocumentUploadResponse
from app.services.document_service import DocumentService

router = APIRouter(
    prefix="/documents",
    tags=["Documents"],
)

service = DocumentService()


@router.post(
    "/upload",
    response_model=DocumentUploadResponse,
)
async def upload_document(
    file: UploadFile = File(...),
):
    return await service.process(file)