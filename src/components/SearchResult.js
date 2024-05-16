import Link from 'next/link';
import React from 'react'

export default function  SearchResult({Result}) {
    console.log(Result);
  return (
    <li  className='py-3 lg:py-5 pl-3 md:pl-8 w-2/3'>
    {<Link className='text-wrap w-full'  href={`/movie/${Result.id}`}>{Result.title}</Link>}</li>
  )
}
