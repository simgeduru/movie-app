"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Card from "../components/Card";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Background from "../components/Background";
import MyPagination from '../components/MyPagination';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreItem, setGenreItem] = useState("");
  const [loading, setLoading] = useState(false);
  let queryString = genreItem.toString();
  const [pageSize, setPageSize] = useState(1);

  //fetching the movies
  useEffect(() => {
    const fetchWiaQuery = async () => {
      if (queryString == "All") {
        queryString = "";
      }

      await axios
        .get("http://localhost:3000/movies", {
          params: { genres: queryString },
        })
        .then((response) => {
          if (response.status == 200) {
            setMovies(response.data);
            setLoading(true);
            paginationPageCal();
          }
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

  const paginationPageCal = async () =>{
    console.log(movies.length);
    //sayfa sayısını belirleme
    let size = Math.round((movies.length/10))+1 ;
    console.log(size);
    setPageSize(size);
    var foo = [];

    for (var i = 1; i <=pageSize; i++) {
       foo.push(i);
    }
console.log(foo);
  }

  return (
    <div>
      <div className="flex justify-between items-center md:px-5  text-[#dc2f02] mb-5 md:mb-10">
        <Link
          href="/"
          className="font-black text-sm lg:text-[45px] tracking-widest"
        >
          <span className="text-xl">Movie</span>
          <span className="text-white font-semibold">App</span>
        </Link>
        <SearchBox MovieList={movies}></SearchBox>
      </div>
      <Background></Background>

      <div className="md:px-5">
        {loading == true ? (
          <div
            id="genresScroll"
            className=" overflow-x-scroll hover:overflow-x-scroll flex flex-row space-x-5 mt-5 md:mt-10"
          >
            {genres.map((genre, index) => (
              <button
                key={index}
                onClick={() => {
                  setGenreItem(genre);
                  console.log("tıklandı");
                  paginationPageCal();
                }}
              >
                {genre}
              </button>
            ))}
          </div>
        ) : (
          <p className="italic">Category is Loading...</p>
        )}

        {loading == true ? (
          <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center place-items-center">
            {movies.length > 0 ? (
              <>
                
                {movies.map((movie) => (
                  <Card key={movie.id} movie={movie}></Card>
                ))}
                {<MyPagination pageSize ={pageSize}></MyPagination>}
                
              </>
            ) : (
              <p className="text-center">Bu kategoride film bulunmamaktadır.</p>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[100vh]">
            {<CircularProgress />}
          </div>
        )}
      </div>
    </div>
  );
}
