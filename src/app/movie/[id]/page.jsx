"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page({ params }) {
  const [movieID, setMovieID] = useState([]);
  const [imageSrcExist, setImageSrcExist] = useState(true);

  const  handleImageError = () => {
     setImageSrcExist(false)
     }

  useEffect(() => {
    const fetchData = async () => {
      
      await axios
        .get(`http://localhost:3000/movies/${params.id}`)
        .then((data) => {
          setMovieID(data.data);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="text-lg mt-10">
      <img
        src={
          imageSrcExist
            ? movieID.posterUrl
            : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
        }
        onError={handleImageError}
        width={"420px"}
        height={"760px"}
        className=""
      />
      <h2 className="text-2xl">{movieID.title}</h2>
      <div className="mb-10 ">
        <p>{movieID.plot}</p>
        <p className="">runtimw: {movieID.runtime}</p>
        <p className="mb-5"> year: {movieID.year}</p>
      </div>
    </div>
  );
}
