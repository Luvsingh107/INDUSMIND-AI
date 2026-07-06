from pydantic import BaseModel


class DocumentUploadResponse(BaseModel):

    filename: str

    pages: int

    characters: int

    extracted_text: str