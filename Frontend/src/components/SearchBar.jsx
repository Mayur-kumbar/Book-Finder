import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Search for a book or author..."
        className="flex-1 px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
                                                                                