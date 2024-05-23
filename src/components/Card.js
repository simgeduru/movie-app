import React, { useState } from "react";
import Link from "next/link";

export const  Card = ({ movie})=> {
  const [imageSrcExist, setImageSrcExist] = useState(true);

  const handleImageError = () => {
    setImageSrcExist(false);
  };


  return (
    <div className="">
      <div id="shadow" className="relative group transition ease hover:-translate-y-5 duration-700 rounded-xl">
        <img
          src={
            imageSrcExist
              ? movie.posterUrl
              : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
          }
          onError={handleImageError}
          width={"100%"}
          height={"100%"}
          className="rounded-xl"
        />
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(3, 7, 30, 1))",
          }}
          className="absolute w-full h-full z-10 top-0 rounded-xl"
        ></div>
        <div
          id="detailInfo"
          className="invisible transition ease group-hover:-translate-y-5 duration-700 group-hover:visible absolute bottom-[8%] left-[5%] z-20 flex flex-col"
        >
          <h2 className="text-xl text-start text-[#dc2f02] pb-5">{movie.title}</h2>
          <Link className="w-[70px] py-1 rounded-md bg-gray-500" href={`https://effulgent-concha-769d37.netlify.app/movie/${movie.id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}
/*        <button className="  hover:text-red-500" onClick={(event)=> Delete(movie.id, event)}>D</button>
        <Link href={`/movie/update/${movie.id}`} className="hover:text-red-500" >U</Link> */
