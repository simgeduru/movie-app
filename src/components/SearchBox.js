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
    <div>
      <form className="text-lg items-center " action="">
        <input
          type="text"
          className="rounded-md "
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
        />
        <Link className="ml-1" href={`/search?query=${value}`}>
          Search
        </Link>
      </form>
      
    </div>
  );
}
