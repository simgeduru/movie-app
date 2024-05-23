"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Update({ params }) {
  const router = useRouter();
  const [movie, setMovie] = useState({
    id: "new",
    title: "",
    year: "",
    runtime: "",
    genres: [],
    director: "",
    actors: "",
    plot: "",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
  });
  useEffect(() => {
    const fetchDataWiaID = async () => {
      await axios
        .get(`https://movie-db-eight-bay.vercel.app/movies/${params.id}`)
        .then((data) => {
          setMovie(data.data);
        });
    };
    fetchDataWiaID();
  }, []);

  console.log(params.id);

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
      await axios.put(
        `https://movie-db-eight-bay.vercel.app/movies/${params.id}`,
        movie
      );
    };
    putData();
    console.log("güncellendi");
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
          placeholder={movie.title}
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
          placeholder={movie.year}
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
          placeholder={movie.runtime}
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
          placeholder={movie.plot}
          value={movie.name}
        />
        <br />
        <br />
      </form>
      <button
        onClick={() => AddObj()}
        className="rounded-md bg-[#FDE5D4] py-2 px-5"
      >
        Update
      </button>
    </div>
  );
}
