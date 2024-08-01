const API_KEY = process.env.API_KEY;

import Results from "@/components/Results";
import { log } from "console";
import Image from "next/image";
import * as React from "react";
import { IoIosStarHalf } from "react-icons/io";

export interface IAppProps {
  movieParams: { id: number };
}

export default async function page({ params }: any) {
  const movieID = params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`;
  const recommendationsUrl = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;


  
  const res = await fetch(url);
  const recommendationsRes = await fetch(recommendationsUrl);

  const data = await res.json();
  const recommendationsData = await recommendationsRes.json();

  return (
    <div className="w-full">
      <div className="p-4 flex flex-col md:flex-row items-center gap-5 max-w-7xl mx-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          alt="/"
          width={500}
          height={300}
          className="rounded-2xl"
        />
        <div className="flex flex-col gap-3">
          <h1 className="sm:text-2xl text-xl font-semibold">{data.title || data.name}</h1>
          <p>{data.overview}</p>
          <p><span className="font-semibold">Release Date:</span> {data.release_date || data.first_air_date}</p>
          <p><span className="font-semibold">Rating:</span> {data.vote_average}</p>
        </div>
      </div>

        {/* Recommendations */}
      <div className="">
        <div className="p-5">
            <h2 className="mb-2 sm:text-2xl text-xl font-semibold ">Recommendations</h2>
            <p className="sm:text-lg">If you liked "{data.title || data.name}", you might also like:</p>
        </div>
        <Results results={recommendationsData.results} />
      </div>
    </div>
  );
}
