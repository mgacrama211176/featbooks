"use client";
import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { books } from "../staticData";
import { useParams } from "next/navigation";

const BookDetailPage = () => {
  const params = useParams();
  const bookTitle = params.book as string;

  // Find the book by title
  const book = books.find((b) => b.title === decodeURIComponent(bookTitle));

  const [isInWishlist, setIsInWishlist] = React.useState(false);

  if (!book) {
    return <div className="container mx-auto px-4 py-8">Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="space-y-4">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-xl text-gray-600">by {book.author}</p>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-6 w-6 ${
                  index < Math.floor(book.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
                fill={index < Math.floor(book.rating) ? "currentColor" : "none"}
              />
            ))}
            <span className="text-gray-600">({book.rating} / 5)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-green-600">
            ${book.price.toFixed(2)}
          </div>

          {/* Genre Tags */}
          <div className="flex flex-wrap gap-2">
            {book.genre.map((g) => (
              <span
                key={g}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{book.description}</p>
          </div>

          {/* Synopsis */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="text-gray-700">{book.synopsis}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => setIsInWishlist(!isInWishlist)}
              className="px-6 py-3 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${
                  isInWishlist ? "text-red-500 fill-current" : "text-gray-600"
                }`}
                fill={isInWishlist ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* Additional Details */}
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Publisher:</span>
                <span className="ml-2">{book.publisher}</span>
              </div>
              <div>
                <span className="text-gray-600">Published Date:</span>
                <span className="ml-2">{book.publishedDate}</span>
              </div>
              <div>
                <span className="text-gray-600">Pages:</span>
                <span className="ml-2">{book.pages}</span>
              </div>
              <div>
                <span className="text-gray-600">Language:</span>
                <span className="ml-2">{book.language}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
