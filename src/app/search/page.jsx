"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Genre from "../../components/Genre";
import { Suspense } from "react";

function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  console.log(search, "search");
  const [data, setData] = useState([]);
  console.log(search);
  useEffect(() => {
    const fetchMovieWiaQuery = async () => {
      await fetch(
        "https://movie-db-eight-bay.vercel.app/movies?" +
          new URLSearchParams({
            /* year:`${search}`, */
            title: `${search}`,
            /*     plot:`${search}`,
        runtime:`${search}`,
        genres:`${search}` */
          })
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        });
    };
    fetchMovieWiaQuery();
  }, []);

  return (
    <div>
      {data.map((movie) => (
        <Genre movie={movie}></Genre>
      ))}
    </div>
  );
}

export default function page() {
  <Suspense>
    <Search />
  </Suspense>;
}
