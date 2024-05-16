"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Card from "../components/Card";
import axios from "axios";
import SearchBox from '../components/SearchBox'
import Link from 'next/link'

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

  
  return (
    <div>
       <div className="flex justify-between items-center md:px-5  text-[#dc2f02] mb-5 md:mb-10">

    <Link href="/" className='font-black text-sm lg:text-[45px] tracking-widest'><span className='text-xl'>Movie</span><span className='text-white font-semibold'>App</span></Link>
      <SearchBox MovieList ={movies}></SearchBox>
      
    </div>
      <Background></Background>
      <div className="md:px-5">
        <div id="genresScroll" className=" overflow-x-scroll hover:overflow-x-scroll flex flex-row space-x-5 mt-5 md:mt-10">
          {genres.map((genre, index) => (
            <button key={index} onClick={()=>{setGenreItem(genre)
              console.log("tıklandı");
            }}>{genre}</button>
          ))}
        </div>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center place-items-center">
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