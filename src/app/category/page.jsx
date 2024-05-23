"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function CategoryList() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenre = async () => {
      await axios
        .get("https://movie-db-eight-bay.vercel.app/genres")
        .then((response) => {
          setGenres(response.data);
        });
    };
    fetchGenre();
  }, []);
  return (
    <div>
      <div>
        {genres.map((genre, index) => (
          <div key={index}>
            {" "}
            <Link href={`/category/${genre}`}>{genre}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
