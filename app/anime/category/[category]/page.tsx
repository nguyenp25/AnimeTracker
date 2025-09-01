"use client"

import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams(); // returns an object
  const category = params.category as string;

  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
}