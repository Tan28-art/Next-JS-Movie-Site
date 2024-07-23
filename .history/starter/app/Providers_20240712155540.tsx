"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children: any }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="">{children}</div>
    </ThemeProvider>
  );
}
