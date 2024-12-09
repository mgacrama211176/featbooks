"use client";
import React, { useState } from "react";
import axios from "axios";
import SocialMedia from "./SocialMedia";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios
      .post("/api/newsletter", { email })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
    setEmail("");
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Stay Updated</h3>
      <p className="text-sm mb-4">
        Submit your email address to receive Feat Books&apos; offers & updates.
        Unsubscribe from our emails at any time.
      </p>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-black/80 transition-colors"
        >
          Submit
        </button>
      </form>
      <SocialMedia />
    </div>
  );
};

export default NewsLetter;
