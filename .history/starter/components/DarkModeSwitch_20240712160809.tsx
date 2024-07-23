"use client";

import { MdBrightness3, MdBrightness5 } from "react-icons/md"; // dark mode icon
import { useTheme } from "next-themes";
import React from "react";

// Wrapper component to add className support to the icons so we can style it and satisfy typescript
const IconWithClassName = ({ IconComponent, className }: { IconComponent: any; className: string }) => {
  return <IconComponent className={className} />;
};

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        // if current theme is 
        <IconWithClassName IconComponent={MdBrightness5} className="cursor-pointer hover:text-emerald-500" />
      ) : (
        <IconWithClassName IconComponent={MdBrightness3} className="cursor-pointer hover:text-emerald-500" />
      )}
    </div>
  );
}
