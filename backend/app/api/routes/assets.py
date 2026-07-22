from pathlib import Path

import fitz
from fastapi import APIRouter

from app.config.settings import settings
from app.metadata.document_metadata import DocumentMetadata

router = APIRouter(
    prefix="/assets",
    tags=["Assets"],
)

DATASET_DIR = settings.BASE_DIR.parent / "datasets"


@router.get("")
def get_assets():

    if DATASET_DIR.exists():
        pdfs = list(DATASET_DIR.rglob("*.pdf"))

    assets = []

    if not DATASET_DIR.exists():
        return []

    for pdf in DATASET_DIR.rglob("*.pdf"):

        try:
            document = fitz.open(pdf)

            text = ""

            for page in document:
                text += page.get_text()

            metadata = DocumentMetadata.extract(text)

            assets.append(
                {
                    "filename": pdf.name,
                    "pages": document.page_count,
                    "equipment": metadata.get("equipment", []),
                    "maintenance_intervals": metadata.get(
                        "maintenance_intervals",
                        [],
                    ),
                }
            )

            document.close()

        except Exception as e:
            print("FAILED:", pdf.name)
            print(e)

    print("RETURNING", len(assets), "ASSETS")

    return assets