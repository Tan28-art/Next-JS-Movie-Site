import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import Providers from "./Providers";
import { Open_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie Search App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body>
        <Providers>
          <Header />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
