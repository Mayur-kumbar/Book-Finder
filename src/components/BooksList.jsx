import BookCard from "./BookCard";

export default function BooksList({ books, loading }) {
  if (!loading && books.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Search for book titles, authors, or keywords.
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
    