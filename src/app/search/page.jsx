'use client'
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Genre from "../../components/Genre"



export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  const [data, setData] = useState([]);
  console.log(search);
  useEffect(() => {
    const fetchMovieWiaQuery = async () => {
      await fetch("http://localhost:3000/movies?" + new URLSearchParams({
        /* year:`${search}`, */
        title:`${search}`,
    /*     plot:`${search}`,
        runtime:`${search}`,
        genres:`${search}` */
      })).then((response) => {return response.json()}
      ).then((data)=>{
          console.log(data);
          setData(data);
      })
    };
    fetchMovieWiaQuery();
  }, []);

  return (<div>{data.map((movie)=>(<Genre movie={movie}></Genre>))}</div>);
}
