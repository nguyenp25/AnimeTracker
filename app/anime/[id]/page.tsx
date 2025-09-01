"use client"

import { useParams } from "next/navigation";

export default function Id() {
  const params = useParams(); // returns an object
  const Id = params.id as string;

  return (
    <div>
      <h1>id: {Id}</h1>
    </div>
  );
}