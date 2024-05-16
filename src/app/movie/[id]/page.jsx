"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../../app/globals.css";
import Link from 'next/link'

export default function page({ params }) {
  const [movieID, setMovieID] = useState([]);
  const [imageSrcExist, setImageSrcExist] = useState(true);

  const handleImageError = () => {
    setImageSrcExist(false);
  };

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
    <div className="p-5">
      <div className="md:px-5  text-[#dc2f02] mb-5 md:mb-10">
        <Link
          href="/"
          className="font-black text-sm lg:text-[45px] tracking-widest"
        >
          <span className="text-xl">Movie</span>
          <span className="text-white font-semibold">App</span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center  md:space-x-10">
        <div id="shadow" className="relative group">
          <img
            src={
              imageSrcExist
                ? movieID.posterUrl
                : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
            }
            onError={handleImageError}
            width={"100%"}
            height={"100%"}
            className="border-4"
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(3, 7, 30, 1))",
            }}
            className="absolute w-full h-full z-10 top-0"
          ></div>
          <div
            id="detailInfo"
            className="  absolute bottom-[10%] left-[5%] z-20 text-center"
          >
            <h2 className="text-2xl text-[#dc2f02] mb-5">{movieID.title}</h2>
            <div className="flex flex-row space-x-2">
              <p className=" border-b-[1px] border-gray-500">
                {movieID.runtime} m
              </p>
              <p className=" border-b-[1px] border-gray-500">{movieID.year}</p>
            </div>
          </div>
        </div>

        <div className="text-xl w-full h-1/2 md:w-1/3 md:h-2/3 pt-5">
          <p>{movieID.plot}</p>
        </div>
      </div>
    </div>
  );
}
