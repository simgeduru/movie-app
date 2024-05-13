"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Genre from '../../../components/Genre'




export default function page({ params}) {
  const [dataWiaQuery, setDataWiaQuery] = useState([]);
  
  


  const queryItem = params.category.toString();
  useEffect(() => {
    const fetchWiaQuery = async () => {
      await axios
        .get("http://localhost:3000/movies", { params: { genres: queryItem } })
        .then((response) => {
          console.log(response.data);
          setDataWiaQuery(response.data);
        });
    };
    fetchWiaQuery();
  }, []);
 
  return (
    <div>
      {
       (dataWiaQuery.length >0) ? dataWiaQuery.map((movie,index) => (
        
       <Genre key={index} movie={movie}></Genre>
     )
      ) : <p className="mt-10">Bu kategoride film bulunmamaktadır.</p>}
     
    </div>
  );
}
