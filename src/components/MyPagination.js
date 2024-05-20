'use client'
import React, { useState } from "react";

export default function MyPagination({ pages, handleClick }) {
  
  //console.log(pages);

 
  return <div className="space-x-2">{
    pages.map((page, index) =>(

      <button onClick={() =>{handleClick(page)}} className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]" key={index}>{page}</button>
    ))

    }</div>;
}
