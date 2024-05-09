import React, { useState } from "react";
import Link from 'next/link'


export default function Card({ movie, Delete }) {
  const [imageSrcExist, setImageSrcExist] = useState(true);
  

 const  handleImageError = () => {
    setImageSrcExist(false)
    }

  return (
    <Link className=" mt-10 text-lg text-center border border-[#FDE5D4] w-11/12 h-4/5 flex flex-col items-center overflow-y-hidden"
    href={`/movie/${movie.id}`}>
      <img
        src={
          imageSrcExist ? movie.posterUrl : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"} onError={handleImageError}
        width={"200px"}
        height={"100px"}
        className=""
      />
      <h2>{movie.title}</h2>
      <div className="mb-20 ">
        <p className="">runtimw: {movie.runtime}</p>
        <p className=""> year:  {movie.year}</p>
        <div className=" flex justify-end space-x-3 ">
        <button className="  hover:text-red-500" onClick={(event)=> Delete(movie.id, event)}>D</button>
        <button className="hover:text-red-500">U</button>
        </div>
       
      </div>
    </Link>
  );
}
