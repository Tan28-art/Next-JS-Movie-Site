import React from 'react'
import MenuItem from './MenuItem'
import { TiHome } from "react-icons/ti";
import { TiInfoLarge } from "react-icons/ti";

export default function Header() {
  return (
    <div>
      <div className="flex gap-4">
        <MenuItem title="Home" Icon={TiHome} address="/" />
        <MenuItem title="About" Icon={TiInfoLarge} address = "/about" />
      </div>


      <div className="">
        <span>iMDB</span>
        <span></span>
      </div>
    </div>
  )
}
