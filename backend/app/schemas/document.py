from typing import Dict, List

from pydantic import BaseModel


class DocumentMetadataSchema(BaseModel):
    equipment: List[str]
    maintenance_intervals: List[str]


class DocumentUploadResponse(BaseModel):
    filename: str
    pages: int
    characters: int
    chunks: int
    metadata: DocumentMetadataSchema
    extracted_text: str
    cleaned: bool