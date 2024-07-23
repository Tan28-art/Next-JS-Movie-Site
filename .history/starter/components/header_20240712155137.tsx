import React from 'react'
import MenuItem from './MenuItem'
import { TiHome } from "react-icons/ti";
import { TiInfoLarge } from "react-icons/ti";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-2 px-5 mx-auto'>
      <div className="flex gap-4">
        <MenuItem title="Home" Icon={TiHome} address="/" />
        <MenuItem title="About" Icon={TiInfoLarge} address = "/about" />
      </div>

      {/* right side of header */}
        <div className="">
          <DarkModeSwitch />
          <Link href='/' className="flex gap-1 items-center">
            <MenuItem title="Dark Mode" Icon={TiHome} address="/" />
            <span className='text-2xl font-semibold bg-emerald-400 py-1 px-2 rounded-3xl'>IMDb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
    </div>
  )
}
