import React from 'react'
import Link from 'next/link'
//import Anchor from '../components/Anchor'

export default function Header() {
  return (
    <div className="text-2xl">
    <div className="flex justify-between items-center">
    <Link href= "/category">Genres</Link>
    <Link href="/">Home</Link>
      <input type="text" className="rounded-md bg-[#FDE5D4]" />
      
      {/* sidebar */}
      
    </div>
  </div>
  )
}
