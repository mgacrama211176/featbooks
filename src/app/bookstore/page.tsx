"use client";
import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { books } from "./staticData";

// Updated mock data with genres

// Get unique genres from books
const allGenres = Array.from(
  new Set(books.flatMap((book) => book.genre))
).sort();

const BookStore = () => {
  const [wishlist, setWishlist] = React.useState<number[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedGenre, setSelectedGenre] = React.useState<string>("All");
  const [visibleBooks, setVisibleBooks] = React.useState(10);

  // Filter books based on search and genre
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || book.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  // Get only the visible portion of filtered books
  const displayedBooks = filteredBooks.slice(0, visibleBooks);

  // Handle loading more books
  const handleLoadMore = () => {
    setVisibleBooks((prev) => prev + 10);
  };

  const toggleWishlist = (bookId: number) => {
    setWishlist((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-[#edc34a] to-[#edc34a] text-white mb-8 py-12 px-4 rounded-lg shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to Our Book Store
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Discover thousands of books across various genres. From timeless
            classics to contemporary bestsellers, find your next favorite read
            with us.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Genres</option>
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="mb-4 text-gray-600">
        Showing {displayedBooks.length} of {filteredBooks.length} books
      </p>

      {/* Book Grid - now using filteredBooks instead of books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedBooks.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(book.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                  fill={
                    index < Math.floor(book.rating) ? "currentColor" : "none"
                  }
                />
              ))}
              <span className="ml-2 text-gray-600">{book.rating}</span>
            </div>
            <p className="text-lg font-bold text-green-600 mb-4">
              ${book.price.toFixed(2)}
            </p>
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(book.id)}
                className="text-gray-600 hover:text-red-500"
              >
                <Heart
                  className={`h-6 w-6 ${
                    wishlist.includes(book.id)
                      ? "text-red-500 fill-current"
                      : ""
                  }`}
                  fill={wishlist.includes(book.id) ? "currentColor" : "none"}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleBooks < filteredBooks.length && (
        <button
          onClick={handleLoadMore}
          className="mt-8 block mx-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default BookStore;