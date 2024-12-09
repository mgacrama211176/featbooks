"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // If we're not already on the bookstore page, navigate there
    if (pathname !== "/bookstore") {
      router.push(`/bookstore?search=${encodeURIComponent(searchQuery)}`);
    } else {
      // If we're already on the bookstore page, just update the search params
      const params = new URLSearchParams(window.location.search);
      params.set("search", searchQuery);
      router.push(`/bookstore?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search books..."
        className="w-full px-4 py-2 pl-10 pr-4 
                 text-sm text-gray-900 
                 bg-gray-50 border border-gray-200 
                 rounded-lg focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 
                 focus:border-transparent
                 transition-all duration-300"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 
                  w-4 h-4 text-gray-400"
      />
    </form>
  );
};

export default SearchComponent;
