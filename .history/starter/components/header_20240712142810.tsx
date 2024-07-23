import React from 'react'
import MenuItem from './MenuItem'
import { TiHome } from "react-icons/ti";
import { TiInfoLarge } from "react-icons/ti";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-2 max-w-6 mx-auto'>
      <div className="flex gap-4">
        <MenuItem title="Home" Icon={TiHome} address="/" />
        <MenuItem title="About" Icon={TiInfoLarge} address = "/about" />
      </div>


      <div className="flex gap-1 items-center">
        <span className='text-2xl font-semibold bg-blue-400 py-1 px-2 rounded-3xl'>IMDb</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
      </div>
    </div>
  )
}
