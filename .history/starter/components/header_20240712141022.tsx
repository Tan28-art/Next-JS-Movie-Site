import React from 'react'
import MenuItem from './MenuItem'
import { TiHome } from "react-icons/ti";

export default function Header() {
  return (
    <div>
      <div className="">
        <MenuItem title="Home" Icon={TiHome} address="/" />
        <MenuItem title="About" Icon="home" address = "/about" />
      </div>
      <div className="">
      </div>
    </div>
  )
}
