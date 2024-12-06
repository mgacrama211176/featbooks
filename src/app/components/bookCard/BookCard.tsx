import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { Book } from "@/app/bookstore/types";

interface BookCardProps {
  displayedBooks: Book[];
  toggleWishlist: (bookId: number) => void;
  wishlist: number[];
}

const BookCard = ({
  displayedBooks,
  toggleWishlist,
  wishlist,
}: BookCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedBooks.map((book) => (
        <div
          key={book.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow relative"
        >
          <button
            onClick={() => toggleWishlist(book.id)}
            className="absolute top-2 right-2 text-red-500"
          >
            <Heart
              className={`h-6 w-6 ${
                wishlist.includes(book.id) ? "text-red-500 fill-current" : ""
              }`}
              fill={wishlist.includes(book.id) ? "currentColor" : "none"}
            />
          </button>
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  index < Math.floor(book.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
                fill={index < Math.floor(book.rating) ? "currentColor" : "none"}
              />
            ))}
            <span className="ml-2 text-gray-600">{book.rating}</span>
          </div>
          <p className="text-lg font-bold text-green-600 mb-4">
            ${book.price.toFixed(2)}
          </p>
          <div className="flex justify-between">
            <Link
              href={`/bookstore/${book.title}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
            >
              More details
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
