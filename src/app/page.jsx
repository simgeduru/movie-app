"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import {Card} from "../components/Card";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Background from "../components/Background";
import MyPagination from "../components/MyPagination";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreItem, setGenreItem] = useState("");
  const [loading, setLoading] = useState(false);
  const [pages, setpages] = useState([1]);
  let queryString = genreItem.toString();
  const [currentPage, setCurrentPage] = useState();
  const [pageElements, setPageElements] = useState([]);
  const [test, setTest] = useState(false);

  const handleClick = (page) => {
    setCurrentPage(parseInt(page));
    console.log(currentPage, "current page");
    console.log(page);
  };

  useEffect(() => {
    let arr = new Array();
    let begin = ((currentPage - 1) * 10);
    let end = currentPage * 10;
    console.log("movies pag", movies);
    movies.map((movie, index) => {
      if (index >= begin && index < end) {
        arr.push(movie);
      }
    });
    setPageElements(arr);
    console.log("çalıştı currentPage use effect");
  }, [currentPage, test]);

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
            let pageArr = new Array();
            setMovies(response.data);
            setTest(!test);
            setCurrentPage(1);
            const movieArr = response.data;
            console.log(movieArr, "axios");
            setLoading(true);
            let size = (Math.ceil((response.data.length / 10)));

            //array oluşturma işlemi
            for (let i = 1; i <= size; i++) {
              pageArr.push(i);
            }
            setpages([...pageArr]);
            setCurrentPage(1);

            console.log(size, "test");
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
      });
    };
    fetchGenres();
  }, []);

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
            className="justify-between text-xl lg:text-2xl 2xl: overflow-x-hidden hover:overflow-x-scroll flex flex-row space-x-5 lg:space-x-8 mt-5 md:mt-10"
          >
            {genres.map((genre, index) => (
              <button
                key={index}
                onClick={() => {
                  setGenreItem(genre);
                  console.log("tıklandı");
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
          <div className="flex flex-col justify-center items-center">
            {movies.length > 0 ? (
              <>
                <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-24 gap-10 text-center place-items-center">
                  {pageElements.map((movie) => (
                    <Card key={movie.id} movie={movie}></Card>
                  ))}
                </div>
                <div className="mt-10 mb-10">
                  {
                    <>
                    {console.log("tekrar çalışyı")}
                    <MyPagination

                    genre={genreItem}
                    size={pages.length}
                      pages={pages}
                      handleClick={handleClick}
                      currentPage={currentPage}
                    ></MyPagination>
                    </>
                  }
                </div>
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
