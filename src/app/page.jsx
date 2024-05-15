"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Card from "../components/Card";
import axios from "axios";

import Background from "../components/Background";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreItem, setGenreItem] = useState("");
  let queryString = genreItem.toString();

  //fetching the movies
  useEffect(() => {
    const fetchWiaQuery = async () => {
      if(queryString =="All"){
        queryString= "";
      }
      await axios
        .get("http://localhost:3000/movies", { params: { genres: queryString } })
        .then((response) => {
          console.log(response.data);
          setMovies(response.data);
        });
    };
    fetchWiaQuery();
  }, [genreItem]);


  //fetching the genres
  useEffect(() => {
    const fetchGenres = async () => {
      await axios.get("http://localhost:3000/genres").then((data) => {
        setGenres(data.data);
        console.log(data.data);
      });
    };
    fetchGenres();
  }, []);
/* 
  const Delete = async (movieId, event) => {
    try {
      await axios.delete(`http://localhost:3000/movies/${movieId}`);
      const newArray = movies.filter((movie) => movie.id != movieId);
      setMovies(newArray);
    } catch (error) {
      console.log("silinemedi");
    }
  };
 */
  
  return (
    <div>
      <Background></Background>
      <div className="md:px-5">
        <div className=" overflow-x-scroll hover:overflow-x-scroll flex flex-row space-x-5  ">
          {genres.map((genre, index) => (
            <button key={index} onClick={()=>{setGenreItem(genre)
              console.log("tıklandı");
            }}>{genre}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center place-items-center">
          {
            (movies.length>0) ?
          movies.map((movie) => (
            <Card key={movie.id} movie={movie}></Card>
          )) : <p className="text-center">Bu kategoride film bulunmamaktadır.</p>
        }
        </div>
      </div>
    </div>
  );

}