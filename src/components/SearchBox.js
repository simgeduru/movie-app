"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleClick = () => {
    router.push("/search?query=45");
  };
  return (
    <div className="  text-sm lg:text-[24px] flex space-x-3"
    >
      <form className="  animate-background rounded-md inline-block border-bordo border-2 hover:border-0 from-[#DC2F02] via-[#FAA307] to-[#FFBA08] bg-[length:_400%_400%] p-0.5 [animation-duration:_6s] hover:bg-gradient-to-r">
        <input
          type="text"
          className=" block text-[#FFBA08] bg-[#03071E]  "
          placeholder="Type Here..."
          onChange={(e) => handleChange(e)}
        />
       
      </form>
      <Link className="bg-gradient-to-r  hover:from-[#DC2F02] hover:via-[#FAA307] hover:to-[#FFBA08] rounded-md lg:px-2 text-bordo" href={`/search?query=${value}`}>
          Search
        </Link>
      
    </div>
  );
}
