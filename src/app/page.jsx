"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Card from "../components/Card";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [movies, setMovies] = useState([]);

  //fetching the data
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:3000/movies").then((data) => {
        setMovies(data.data);
      });
    };
    fetchData();
  }, []);

  const Delete = async (movieId, event) => {
    try {
      await axios.delete(`http://localhost:3000/movies/${movieId}`);
      const newArray = movies.filter((movie) => movie.id != movieId);
      setMovies(newArray);
    } catch (error) {
      console.log("silinemedi");
    }
  };

  return (
    <div>
      <div>
        <h1 className="">Tüm Filmler</h1>
        <h1>Genres</h1>
      </div>

      {/* <Link href={"/newAdd"} className="rounded-md bg-[#FDE5D4] py-2 px-5">
        Ekle
      </Link> */}
      <div className="grid grid-cols-4 gap-4 text-center place-items-center">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} Delete={Delete}></Card>
        ))}
      </div>
    </div>
  );
}
