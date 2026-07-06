from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

from app.services.document_service import DocumentService

router = APIRouter(
    prefix="/documents",
    tags=["Documents"],
)


@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...)
):

    return await DocumentService.process(file)