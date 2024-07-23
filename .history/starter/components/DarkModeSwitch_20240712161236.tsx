"use client";

import { MdBrightness3, MdBrightness5 } from "react-icons/md"; // dark mode icon
import { useTheme } from "next-themes";
import React from "react";

// Wrapper component to add className and onClick support
const IconWithProps = ({ IconComponent, className, onClick }: { IconComponent: any; className: string; onClick?: () => void }) => {
  return <IconComponent className={className} onClick={onClick} />;
};

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+  /**
+   * Toggles the theme between light and dark based on the current theme.
+   *
+   * @return {void} This function does not return anything.
+   */
<<<<<  bot-ac23eea8-99ac-4beb-bb12-2c4d40162e4f  >>>>>
  const handleToggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {currentTheme === "dark" ? (
        <IconWithProps IconComponent={MdBrightness5} className="cursor-pointer hover:text-emerald-500" onClick={handleToggleTheme} />
      ) : (
        <IconWithProps IconComponent={MdBrightness3} className="cursor-pointer hover:text-emerald-500" onClick={handleToggleTheme} />
      )}
    </div>
  );
}
