import React from 'react'
import Anchor from '../components/Anchor'

export default function Header() {
  return (
    <div className="text-2xl">
    <div className="flex justify-between items-center">
      <div>{ <Anchor></Anchor>}</div>
      <input type="text" className="rounded-md bg-[#FDE5D4]" />
      
      {/* sidebar */}
      
    </div>
  </div>
  )
}
