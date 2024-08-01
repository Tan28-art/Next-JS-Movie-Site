import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { IoIosStarHalf } from "react-icons/io";

export interface IAppProps {
  key: string;
  result: any;
}

export default function App({ result }: IAppProps) {
  return (
    <div className="group rounded-3xl border-2 dark:border-slate-800 p-3 sm:hover:shadow-emerald-200 sm:shadow-lg transition-shadow duration-200 dark:shadow-slate-700 dark:hover:shadow-emerald-500">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={450}
          height={300}
          alt="/"
          className='rounded-2xl group-hover:opacity-85 transition-opacity duration-300 '
        ></Image>
        <div className="">
          <h2 className='font-bold truncate'>
            {result.title || result.name}
          </h2>
          <p className='my-1 line-clamp-3 text-xs'>{result.overview}</p>
          <p className='flex items-center gap-2'>
            {result.release_date || result.first_air_date} 
            <span className='text-lg'><IoIosStarHalf /></span>
            {result.vote_average}
          </p>
          
        </div>
      </Link>
    </div>
  );
}
