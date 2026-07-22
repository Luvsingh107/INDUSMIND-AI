import gc
import uuid
from pathlib import Path

import fitz

from app.chunking.text_chunker import TextChunker
from app.embeddings.embedding_service import EmbeddingService
from app.entities.entity_extractor import EntityExtractor
from app.metadata.document_metadata import DocumentMetadata
from app.parser.pdf_parser import PDFParser
from app.storage.file_storage import FileStorage
from app.utils.text_cleaner import TextCleaner
from app.vectorstore.chroma_service import ChromaService


class DocumentService:

    BATCH_SIZE = 32

    def __init__(self):
        self.embedding = EmbeddingService()
        self.vectorstore = ChromaService()

    async def process(self, file):
        saved = await FileStorage.save(file)
        return self.process_path(saved)

    def process_path(
        self,
        path: Path,
        extract_entities: bool = True,
    ):

        pdf = fitz.open(path)
        pages = pdf.page_count
        pdf.close()

        raw_text = PDFParser.extract_text(str(path))

        cleaned_text = TextCleaner.clean(raw_text)

        chunks = TextChunker.chunk(cleaned_text)

        if not chunks:
            print(f"Skipping {path.name} (no extractable text)")
            return {
                "filename": path.name,
                "pages": pages,
                "characters": len(cleaned_text),
                "chunks": 0,
                "metadata": {},
                "cleaned": True,
                "indexed": False,
                "entities": [],
            }

        metadata = DocumentMetadata.extract(cleaned_text)

        entities = []

        if extract_entities:
            entities = EntityExtractor.extract(cleaned_text)

        for start in range(0, len(chunks), self.BATCH_SIZE):

            batch_chunks = chunks[start:start + self.BATCH_SIZE]

            batch_embeddings = self.embedding.embed(batch_chunks)

            batch_ids = [
                str(uuid.uuid4())
                for _ in batch_chunks
            ]       

            batch_metadata = []

            for index in range(len(batch_chunks)):
                batch_metadata.append(
                    {
                        "filename": path.name,
                        "chunk": start + index,
                    }
                )

            self.vectorstore.add(
                ids=batch_ids,
                documents=batch_chunks,
                embeddings=batch_embeddings,
                metadatas=batch_metadata,
            )

        result = {
            "filename": path.name,
            "pages": pages,
            "characters": len(cleaned_text),
            "chunks": len(chunks),
            "metadata": metadata,
            "cleaned": True,
            "indexed": True,
            "entities": entities[:100],
        }

        del raw_text
        del cleaned_text
        del chunks

        gc.collect()

        return result