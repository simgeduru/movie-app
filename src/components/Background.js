import React from 'react'
import brothers from "../../public/brothers.jpg";

export default function Background() {
  return (
    <div className="mt-5 left-0 right-0 opacity-85 bg-blend-overlay">
    <img src={`${brothers.src}`} className="w-full"></img>
  </div>
  )
}
