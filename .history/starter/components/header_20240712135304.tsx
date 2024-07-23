import React from 'react'
import MenuItem from './MenuItem'
import { TiHome } from "react-icons/ti";

export default function Header() {
  return (
    <div>
      <div className="">
        <MenuItem title="Home" icon="home" address = "/" />
      </div>
      <div className="">
        Dark Mode and Logo
      </div>
    </div>
  )
}
