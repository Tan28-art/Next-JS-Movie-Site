import React from "react";
import MenuItem from "./MenuItem";
import { TiHome } from "react-icons/ti";
import { TiInfoLarge } from "react-icons/ti";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 sm:px-5 mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" Icon={TiHome} address="/" />
        <MenuItem title="About" Icon={TiInfoLarge} address="/about" />
      </div>

      {/* right side of header */}
      <div className="flex items-center gap-4">
        <div className="sm:text-3xl text-2xl">
          <DarkModeSwitch />
        </div>
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl sm:text-3xl font-semibold bg-emerald-500 py-1 px-2 rounded-3xl">
            ViBe
          </span>
          <span className="text-2xl  hidden sm:inline">Finder</span>
        </Link>
      </div>
    </div>
  );
}
