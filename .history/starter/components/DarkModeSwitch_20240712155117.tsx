"use client";

import { MdBrightness3 } from "react-icons/md"; // dark mode icon
import { MdBrightness5 } from "react-icons/md"; // light mode icon
import { useTheme} from 'next-themes'

import React from "react";

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
  return <div>{currentTheme === "dark" ? <MdBrightness5 /> : <MdBrightness3 />}</div>;
}
