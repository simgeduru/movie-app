"use client";
import React, { useState } from "react";


export default function MyPagination({ size, pages, handleClick }) {
  const [listPag, setListPage] = useState([1, 2, 3]);
  const [show, setShow] = useState(true);
  const [hover, setHover] = useState(false);


  const boxStyle = {
    
    backgroundColor: 'lightblue',

    
 };

  const handleSwitch = (page, index,e) => {
    (hover==true ? e.target.style.backgroundColor = "#e13570": e.target.style.backgroundColor= "red")
    
    console.log(index);
    if (index == 2 && page != size) {
      let newArr = new Array();
      let k = 0;
      if (page == 11) {
        k = 2;
        setShow(false);
      } else k = 3;
      

      for (let i = 0; i < k; i++) {
        newArr[i] = parseInt(page) + i;
      }
      console.log(newArr);
      setListPage(newArr);
    }

    if (index == 0 && page != 1) {
      setShow(true);
      let newArr = new Array();
      for (let i = 0; i < 3; i++) {
        newArr[2 - i] = parseInt(page) - i;
      }
      console.log(newArr);
      setListPage(newArr);
    }
  };
  return (
    <div className="flex flex-row space-x-1">
      {listPag.map((page, index) => (
        <>
          <button
            key={index}
            onClick={(e) => {
              handleClick(page);
              handleSwitch(page, index,e);
              setHover(!hover);
            }}
            className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
           
          >
            {page}
          </button>
        </>
      ))}
      {show && <p>..</p>}

      <button
        onClick={() => {
          handleClick(13);
        }}
        className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
      >
        13
      </button>
    </div>
  );
}
