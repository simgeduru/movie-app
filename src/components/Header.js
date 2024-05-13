import React from 'react'
import Link from 'next/link'
import SearchBox from '../components/SearchBox'
//import Anchor from '../components/Anchor'

export default function Header() {
  return (
    <div className="text-2xl">
    <div className="flex justify-between items-center">
    <Link href= "/category">Genres</Link>
    <Link href="/">Home</Link>
      <SearchBox></SearchBox>
    </div>
  </div>
  )
}
