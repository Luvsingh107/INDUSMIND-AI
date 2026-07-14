from fastapi import APIRouter
from pathlib import Path
import fitz

from app.config.settings import settings
from app.metadata.document_metadata import DocumentMetadata

router = APIRouter(
    prefix="/knowledge",
    tags=["Knowledge"],
)


@router.get("/documents")
def documents():

    docs = []

    upload_dir = settings.UPLOAD_DIR

    for pdf in sorted(upload_dir.glob("*.pdf")):

        try:

            doc = fitz.open(pdf)

            pages = doc.page_count

            doc.close()

            text = ""

            document = fitz.open(pdf)

            for page in document:
                text += page.get_text()

            document.close()

            metadata = DocumentMetadata.extract(text)

            docs.append(
                {
                    "filename": pdf.name,
                    "pages": pages,
                    "equipment": metadata["equipment"],
                    "maintenance_intervals": metadata["maintenance_intervals"],
                }
            )

        except Exception:
            continue

    return docs