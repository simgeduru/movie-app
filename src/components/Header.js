import React from 'react'
import Link from 'next/link'
import SearchBox from '../components/SearchBox'
//import Anchor from '../components/Anchor'

export default function Header() {
  return (
    
    <div className="flex justify-between items-center md:px-5  text-bordo">
{/*     <Link href= "/category">Genres</Link> */}
    <Link href="/" className='  bold font-semibold  text-sm lg:text-[45px] tracking-widest'>Home</Link>
      <SearchBox></SearchBox>
      
    </div>
  
  )
}
