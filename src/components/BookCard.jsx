export default function BookCard({ book }) {
  const info = book.volumeInfo;
  const thumbnail =
    info.imageLinks?.thumbnail ||
    "https://via.placeholder.com/150x200?text=No+Image";

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex flex-col">
      <img
        src={thumbnail}
        alt={info.title}
        className="w-full h-56 object-cover rounded"
      />

      <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
        {info.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {info.authors?.join(", ") || "Unknown Author"}
      </p>

      {info.publishedDate && (
        <p className="text-xs text-gray-500 mt-1">
          Published: {info.publishedDate}
        </p>
      )}

      <a
        href={info.previewLink}
        target="_blank"
        rel="noreferrer"
        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-center rounded-lg block"
      >
        Preview
      </a>
    </div>
  );
}
