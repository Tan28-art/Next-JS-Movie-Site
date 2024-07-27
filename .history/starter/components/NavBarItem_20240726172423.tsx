import Link from "next/link";
import * as React from "react";

export interface IAppProps {
  title: string;
  param: string;
}

export default function NavBarItem(props: IAppProps) {
  return (
    <div>
      <Link href={`/${props.param}`}>{props.title}</Link>
    </div>
  );
}
