from pydantic import BaseModel


class Chunk(BaseModel):
    id: int
    text: str
    characters: int