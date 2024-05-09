"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Card from "../components/Card";
import axios from "axios";
import { redirect } from "next/navigation";

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
      event.stopPropagation();
      await axios.delete(`http://localhost:3000/movies/${movieId}`);
      const newArray = movies.filter((movie) => movie.id != movieId);
      setMovies(newArray);
      redirect("/");
    } catch (error) {
      console.log("silinemedi");
    }
  };
  return (
    <main className="mt-20">
      <div>
        <div>
          <h1 className="text-3xl mb-5">Movies</h1>
          <div className="grid grid-cols-4 gap-4 text-center border border-[#445D48] place-items-center ">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} Delete={Delete}></Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
