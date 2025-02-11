import { type Book } from '../schemas';

export const BookCard = ({ book }: {book: Book}) => (
    <div className="book-card">
        <h2>{ book.title }</h2>
        <p>Year: { book.year }</p>
        <p>Edition: { book.edition }</p>
        <div className="author-info">
            <h3>Author: { book.author.name }</h3>
            { book.author.bio && <p>{ book.author.bio }</p> }
        </div>
    </div>
);
