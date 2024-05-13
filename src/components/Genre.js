import React from "react";
import { useState } from "react";
import Link from 'next/link';

export default function Genre({movie}) {
  const [imageSrcExist, setImageSrcExist] = useState(true);

  const handleError = () => {
    setImageSrcExist(false);
  };

  return (
    <div>
      {" "}
      <div className=" mt-10 text-lg text-center border border-[#FDE5D4] w-11/12 h-4/5 flex flex-col items-center overflow-y-hidden">
        <Link href={`/movie/${movie.id}`}>
          <img
            src={
              imageSrcExist
                ? movie.posterUrl
                : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
            }
            onError={handleError}
            width={"200px"}
            height={"100px"}
            className=""
          />
        </Link>

        <h2>{movie.title}</h2>
        <div className="mb-20 ">
          <p className="">runtime: {movie.runtime}</p>
          <p className=""> year: {movie.year}</p>
          <div className=" flex justify-end space-x-3 "></div>
        </div>
      </div>
    </div>
  );
}
