from fastapi import FastAPI
from data import backend_data as books
from models import Author, Book


app = FastAPI()


@app.get("/api/books", response_model=list[Book])
async def get_books_list():
    return books


@app.get("/api/books/{book_id}", response_model=Book)
async def get_book_by_id(book_id: int):
    book = books[book_id - 1]
    return book
