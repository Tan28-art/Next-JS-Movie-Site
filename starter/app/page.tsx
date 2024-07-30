const API_KEY = process.env.API_KEY;

import Results from "@/components/Results";
import * as React from "react";

export interface IAppProps {
  searchParams: any;
}

export default async function App({ searchParams }: IAppProps) {
  const genre = searchParams.genre || "fetchTrending";
  const url =
    "https://api.themoviedb.org/3" +
    (genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week") +
    "?api_key=" +
    API_KEY + "&language=en-US&page=1";

  const res = await fetch(url, {next: {revalidate: 10000}});

  const data = await res.json();

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const results = data.results;
  

  return <div>
    <Results results={results} />
  </div>;
}
