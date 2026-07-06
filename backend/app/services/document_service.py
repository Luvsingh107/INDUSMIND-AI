import fitz

from app.parser.pdf_parser import PDFParser
from app.storage.file_storage import FileStorage


class DocumentService:

    @staticmethod
    async def process(file):

        saved = await FileStorage.save(file)

        pdf = fitz.open(saved)

        pages = pdf.page_count

        pdf.close()

        text = PDFParser.extract_text(str(saved))

        return {

            "filename": saved.name,

            "pages": pages,

            "characters": len(text),

            "extracted_text": text[:2500]

        }