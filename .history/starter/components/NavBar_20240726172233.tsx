import * as React from 'react';
import NavBarItem from './NavBarItem';

export interface IAppProps {
}

export default function NavBar (props: IAppProps) {
  return (
    <div>
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Popular" param="fetchPopular"/>
    </div>
  );
}
