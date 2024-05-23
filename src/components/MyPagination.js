"use client";
import React, { useEffect, useState } from "react";

export default function MyPagination({
  size,
  handleClick,
  currentPage,
  genre,
}) {
  console.log(currentPage);
  console.log(size);
  const [btn1, setBtn1] = useState(1);
  const [btn2, setBtn2] = useState(2);
  const [btn3, setBtn3] = useState(3);

  useEffect(() => {
    setBtn1(1);
    setBtn2(2);
    setBtn3(3);
  }, [genre]);

  const handleNext = (e) => {
    if (btn3 < size) {
      setBtn3(btn3 + 1);
      setBtn2(btn2 + 1);
      setBtn1(btn1 + 1);
    }
  };

  const handlePrev = (e) => {
    if (btn1 > 1) {
      setBtn3(btn3 - 1);
      setBtn2(btn2 - 1);
      setBtn1(btn1 - 1);
    }
  };
  return (
    <>
      {size > 3 ? (
        <div className="flex flex-row space-x-1">
          <>
            {btn1 == 1 ? (
              <></>
            ) : (
              <button
                onClick={(e) => {
                 /*  currentPage == size ? handleClick(size-1) : handleClick(btn1); */
                  handlePrev(e);
                }}
                className="text-sm bg-red-900 rounded-full text-center w-[50px] h-[25px]"
              >
                Prev
              </button>
            )}
          </>

          {/* buttons */}
          <>
            <button
              onClick={(e) => {
                currentPage == size ? handleClick(size-1) : handleClick(btn1);
                handlePrev(e);
              }}
              className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
              style={{
                backgroundColor: currentPage == btn1 ? "green" : "red",
              }}
            >
              {btn1}
            </button>
            <button
              onClick={() => {
                handleClick(btn2);
              }}
              className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
              style={{
                backgroundColor: currentPage == btn2 ? "green" : "red",
              }}
            >
              {btn2}
            </button>
            <button
              onClick={(e) => {
                currentPage == 1 ? handleClick(2) : handleClick(btn3);
                handleNext(e);
              }}
              className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
              style={{
                backgroundColor: currentPage == btn3 ? "green" : "red",
              }}
            >
              {btn3}
            </button>
          </>

          {btn3 >= size - 1 ? <></> : <p>..</p>}

          <>
            {btn3 >= size ? (
              <></>
            ) : (
              <button
                onClick={(e) => {
                 /*  currentPage == 1 ? handleClick(2) : handleClick(btn3); */
                  handleNext(e);
                }}
                className="text-sm bg-red-900 rounded-full text-center w-[50px] h-[25px]"
              >
                Next
              </button>
            )}
          </>
        </div>
      ) : (
        <div className="flex flex-row space-x-1">
          {
            <>
              {size == 1 && (
                <>
                  <button
                    onClick={() => {
                      handleClick(1);
                    }}
                    className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
                    style={{
                      backgroundColor: currentPage == 1 ? "green" : "red",
                    }}
                  >
                    1
                  </button>
                </>
              )}

              {size == 2 && (
                <>
                  <button
                    onClick={(e) => {
                      handleClick(1);
                      handlePrev(e);
                    }}
                    className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
                    style={{
                      backgroundColor: currentPage == 1 ? "green" : "red",
                    }}
                  >
                    {1}
                  </button>
                  <button
                    onClick={() => {
                      handleClick(2);
                    }}
                    className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
                    style={{
                      backgroundColor: currentPage == 2 ? "green" : "red",
                    }}
                  >
                    {2}
                  </button>
                </>
              )}

              {size == 3 && (
                <>
                  <button
                    onClick={(e) => {
                      handleClick(1);
                      handlePrev(e);
                    }}
                    className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
                    style={{
                      backgroundColor: currentPage == 1 ? "green" : "red",
                    }}
                  >
                    {1}
                  </button>
                  <button
                    onClick={() => {
                      handleClick(2);
                    }}
                    className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
                    style={{
                      backgroundColor: currentPage == 2 ? "green" : "red",
                    }}
                  >
                    {2}
                  </button>
                  <button
                    onClick={(e) => {
                      handleClick(3);
                      handleNext(e);
                      console.log("tıklando");
                    }}
                    className="text-sm bg-red-900 rounded-full text-center w-[25px] h-[25px]"
                    style={{
                      backgroundColor: currentPage == 3 ? "green" : "red",
                    }}
                  >
                    {3}
                  </button>
                </>
              )}
            </>
          }
        </div>
      )}
    </>
  );
}
