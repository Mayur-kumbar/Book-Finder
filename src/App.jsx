import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import BooksList from "./components/BooksList";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setBooks([]);

    try {
      const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
      )}&key=${API_KEY}`;

      const res = await axios.get(url);
      console.log(res.data);
      setBooks(res.data.items || []);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="p-6 text-center shadow bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-blue-500">BookFinder 📚</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Search books with author details
        </p>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <SearchBar onSearch={searchBooks} />

        {loading && (
          <p className="text-center text-gray-500 mt-4">Searching...</p>
        )}

        <BooksList books={books} loading={loading} />
      </main>
    </div>
  );
}
