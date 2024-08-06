const API_KEY = process.env.API_KEY;

import Results from "@/components/Results";
import { log } from "console";
import * as React from "react";

interface props {
  params: { searchVal: string };
}

export default async function App({ params }: props) {
  const search = params.searchVal;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  );

  const data = await res.json();

  return (
    <div>
      {/* If no search results are found */}
      {data.results.length === 0 && (
        <div className="flex items-center justify-center mt-64 ">
          <h1 className="sm:text-2xl text-xl text-center">
            No results found for "{search}"
          </h1>
        </div>
      )}

      {/* If search results are found, displays data in card format */}
      {data.results.length !== 0 && <Results results={data.results} />}
    </div>
  );
}
