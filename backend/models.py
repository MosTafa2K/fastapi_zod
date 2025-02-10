from pydantic import BaseModel
from pydantic.fields import Field


class Author(BaseModel):
    id: int
    name: str
    bio: str | None = None


class Book(BaseModel):
    id: int
    title: str
    year: int
    edition: int = Field(default=1, ge=1)
    author: Author
