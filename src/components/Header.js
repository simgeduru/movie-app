import React from 'react'
import Link from 'next/link'
import SearchBox from '../components/SearchBox'
//import Anchor from '../components/Anchor'

export default function Header() {
  return (
    
    <div className="flex justify-between items-center md:px-5  text-[#dc2f02]">
{/*     <Link href= "/category">Genres</Link> */}
    <Link href="/" className='font-black text-sm lg:text-[45px] tracking-widest'><span className='text-xl'>Movie</span><span className='text-white font-semibold'>App</span></Link>
      <SearchBox></SearchBox>
      
    </div>
  
  )
}
