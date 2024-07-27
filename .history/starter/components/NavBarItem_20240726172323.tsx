import * as React from 'react';

export interface IAppProps {
    title: string;
    param: string;
}

export default function NavBarItem (props: IAppProps) {
  return (
    <div>
      <link>
{props.itle}
      </link>
    </div>
  );
}

