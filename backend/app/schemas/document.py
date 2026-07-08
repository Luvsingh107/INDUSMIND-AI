from typing import List

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
    cleaned: bool
    indexed: bool