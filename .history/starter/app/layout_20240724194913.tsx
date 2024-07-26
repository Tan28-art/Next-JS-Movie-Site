import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import Providers from "./Providers";


//👇 Import our second font
import { Open_Sans, Roboto_Mono } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    // 👇 Attach CSS variables to HTML
    <html
      lang="en"
      className={`${openSans.variable} ${robotoMono.variable} font-sans`}
    >
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
