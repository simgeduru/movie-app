import React, { useState } from "react";
import Link from 'next/link'


export default function Card({ movie, Delete}) {
  const [imageSrcExist, setImageSrcExist] = useState(true);
  

 const  handleImageError = () => {
    setImageSrcExist(false)
    }

  return (
    <div className="text-center flex flex-col items-center"
    >
      <Link href={`/movie/${movie.id}`}>
      <img
        src={
          imageSrcExist ? movie.posterUrl : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"} onError={handleImageError}
        width={"200px"}
        height={"100px"}
        className=""
      /></Link>
      
      <h2>{movie.title}</h2>
      <div className="">
        <p className="">runtime: {movie.runtime}</p>
        <p className=""> year:  {movie.year}</p>
        <div className=" flex justify-end">
        <button className="  hover:text-red-500" onClick={(event)=> Delete(movie.id, event)}>D</button>
        <Link href={`/movie/update/${movie.id}`} className="hover:text-red-500" >U</Link>
        </div>
       
      </div>
    </div>
  );
}
