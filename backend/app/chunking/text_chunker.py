from typing import List


class TextChunker:
    CHUNK_SIZE = 1000
    CHUNK_OVERLAP = 150

    @classmethod
    def chunk(cls, text: str) -> List[str]:
        chunks = []

        start = 0

        while start < len(text):
            end = min(start + cls.CHUNK_SIZE, len(text))

            if end < len(text):
                paragraph_break = text.rfind("\n\n", start, end)

                if paragraph_break != -1:
                    end = paragraph_break

            chunk = text[start:end].strip()

            if chunk:
                chunks.append(chunk)

            start = end - cls.CHUNK_OVERLAP

            if start < 0:
                start = 0

            if end >= len(text):
                break

        return chunks