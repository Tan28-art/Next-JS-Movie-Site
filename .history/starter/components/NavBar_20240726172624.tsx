import * as React from 'react';
import NavBarItem from './NavBarItem';

export interface IAppProps {
}

export default function NavBar (props: IAppProps) {
  return (
    <div className="flex gap-3 hover:bg-emerald-500">
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  );
}
