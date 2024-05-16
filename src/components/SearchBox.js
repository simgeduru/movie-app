"use client";
import React, { useState, useEffect } from "react";
import SearchResult from "../components/SearchResult";
import "../app/globals.css";

export default function SearchBox({ MovieList }) {
  const [genreItem, setGenreItem] = useState("  ");
  let queryString = genreItem.toString();
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [show, setShow] = useState(false);
  let newList = new Array();

  //fetching the movies
  useEffect(() => {
    if (genreItem.length > 0) {
      newList = MovieList.filter((movie) => movie.title.includes(queryString));
      setFiltredMovies(newList);
      newList.length > 0 ? handleShow() : handleShowNot();
    } else {
      setFiltredMovies([]);
      handleShowNot();
    }
    return;
  }, [genreItem]);

  const handleShow = () => {
    setShow(true);
  };
  const handleShowNot = () => {
    setShow(false);
  };
  return (
    <div className="  text-white text-sm lg:text-[24px] flex flex-col items-center">
      <form className="w-full animate-background rounded-md inline-block border-[#dc2f02] border-2 hover:border-0 from-[#DC2F02] via-[#FAA307] to-[#FFBA08] bg-[length:_400%_400%] p-0.5 [animation-duration:_6s] hover:bg-gradient-to-r">
        <input
          type="text"
          className=" block bg-[#03071E]   "
          placeholder="Type Here..."
          onChange={(e) => {
            setGenreItem(e.target.value.trimStart());
            console.log(e.target.value);
          }}
        />
      </form>

      {show ? (
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, #dc2f02 100%)",
          }}
          id="searchScroll"
          className=" absolute top-20 right-0 rounded-xl w-[50%] h-1/5 overflow-y-auto "
        >
          <div className="text-white">
            {filtredMovies.map((movie) => (
              <SearchResult Result={movie}></SearchResult>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
