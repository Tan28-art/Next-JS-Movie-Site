import * as React from 'react';
import NavBarItem from './NavBarItem';

export interface IAppProps {
}

export default function NavBar (props: IAppProps) {
  return (
    <div>
      <NavBarItem title="" param=""/>
      <NavBarItem />
    </div>
  );
}
