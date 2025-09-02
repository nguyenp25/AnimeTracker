"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //If query is empty dont route
    if (!query.trim()) {
        return;
    }

    router.push(`/anime/search/${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="search">Search</label>
      <div className="filterInput">
        <input
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Any"
        />
      </div>
    </form>
  );
}
