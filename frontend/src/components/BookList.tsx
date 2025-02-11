import { useState, useEffect } from "react";
import { z } from 'zod';
import { BookSchema, type Book } from "../schemas";
import { BookCard } from './BookCard';

// Main BookList component
export const BookList = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/books/");
                const data = await response.json();

                const validatedBooks = z.array(BookSchema).parse(data);
                setBooks(validatedBooks);
                setError(null);
            } catch (err) {
                if (err instanceof z.ZodError) {
                    setError(`Validation error: ${err.errors[0].message}`)
                } else {
                    setError('Failed to fetch books!');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);
    if (loading) return <div>Loding books...</div>;
    if (error) return <div>Error: {error}</div>
    return (
        <div className="books-container">
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};
