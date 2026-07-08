import uuid

import fitz

from app.chunking.text_chunker import TextChunker
from app.embeddings.embedding_service import EmbeddingService
from app.metadata.document_metadata import DocumentMetadata
from app.parser.pdf_parser import PDFParser
from app.processing.text_cleaner import TextCleaner
from app.storage.file_storage import FileStorage
from app.vectorstore.chroma_service import ChromaService


class DocumentService:
    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = ChromaService()

    async def process(self, file):
        # Save uploaded file
        saved_file = await FileStorage.save(file)

        # Get page count
        pdf = fitz.open(saved_file)
        pages = pdf.page_count
        pdf.close()

        # Extract text
        raw_text = PDFParser.extract_text(str(saved_file))

        # Clean text
        cleaned_text = TextCleaner.clean(raw_text)

        # Chunk text
        chunks = TextChunker.chunk(cleaned_text)

        # Metadata
        metadata = DocumentMetadata.extract(cleaned_text)

        # Embeddings
        embeddings = self.embedding_service.embed(chunks)

        ids = []
        metadatas = []

        for index in range(len(chunks)):
            ids.append(str(uuid.uuid4()))
            metadatas.append(
                {
                    "filename": saved_file.name,
                    "chunk": index,
                }
            )

        # Store in ChromaDB
        self.vector_store.add(
            ids=ids,
            documents=chunks,
            embeddings=embeddings,
            metadatas=metadatas,
        )

        return {
            "filename": saved_file.name,
            "pages": pages,
            "characters": len(cleaned_text),
            "chunks": len(chunks),
            "metadata": metadata,
            "cleaned": True,
            "indexed": True,
        }