import fitz

from app.parser.pdf_parser import PDFParser
from app.storage.file_storage import FileStorage
from app.chunking.text_chunker import TextChunker
from app.metadata.document_metadata import DocumentMetadata

class DocumentService:

    @staticmethod
    async def process(file):

        saved = await FileStorage.save(file)

        pdf = fitz.open(saved)

        pages = pdf.page_count

        pdf.close()

        text = PDFParser.extract_text(str(saved))

        chunks = TextChunker.chunk(text)

        metadata = DocumentMetadata.extract(text)

        return {
            "filename": saved.name,
            "pages": pages,
            "characters": len(text),
            "chunks": len(chunks),
            "metadata": metadata,
            "extracted_text": text[:2500],
            "cleaned": True,
        }