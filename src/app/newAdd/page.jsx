"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Add() {
  const router = useRouter();
  const [movie, setMovie] = useState({
    id: "new",
    title: "",
    year: "",
    runtime: "",
    plot: "",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
  });

  const Change = (evt) => {
    //burada ileride anlaşılabilecek bir hata var
    const value = evt.target.value;
    setMovie({
      ...movie,
      [evt.target.name]: value,
    });
    console.log(evt.target.value);
    console.log(movie);
  };

  const AddObj = () => {
    const putData = async () => {
      await axios.post("https://movie-db-eight-bay.vercel.app/movies", movie);
    };
    putData();
    console.log("eklendi");
    router.back();
  };

  return (
    <div className="mt-5">
      <form action="/action_page.php">
        <label>Film Title:</label>
        <br />
        <input
          onChange={(evt) => Change(evt)}
          type="text"
          id="fname"
          name="title"
          placeholder="Title..."
          value={movie.name}
        />
        <br />
        <label>Year:</label>
        <br />
        <input
          onChange={(evt) => Change(evt)}
          type="text"
          id="lname"
          name="year"
          placeholder="Year..."
          value={movie.name}
        />
        <br />
        <label>Runtime:</label>
        <br />
        <input
          onChange={(evt) => Change(evt)}
          type="text"
          id="lname"
          name="runtime"
          placeholder="Runtime..."
          value={movie.name}
        />
        <br />
        <label>Plot:</label>
        <br />
        <input
          onChange={(evt) => Change(evt)}
          type="text"
          id="lname"
          name="plot"
          placeholder="Plot..."
          value={movie.name}
        />
        <br />
        <br />
      </form>
      <button
        onClick={() => AddObj()}
        className="rounded-md bg-[#FDE5D4] py-2 px-5"
      >
        Add
      </button>
    </div>
  );
}
