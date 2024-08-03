import * as React from "react";
import NavBarItem from "./NavBarItem";
import SearchBox from "./SearchBox";

export interface IAppProps {}

export default function NavBar(props: IAppProps) {
  return (
    <div className="flex justify-between items-center mx-auto border-t-4 border-black  dark:border-white p-3 sm:px-5">
      <div className="flex items-center gap-3  lg:text-xl">
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
}
