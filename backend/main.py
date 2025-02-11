from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data import backend_data as books
from models import Book


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/books", response_model=list[Book])
async def get_books_list():
    return books


@app.get("/api/books/{book_id}", response_model=Book)
async def get_book_by_id(book_id: int):
    book = books[book_id - 1]
    return book
