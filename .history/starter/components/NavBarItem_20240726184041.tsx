import Link from "next/link";
import * as React from "react";
import { useSearchParams } from "next/navigation";

export interface IAppProps {
  title: string;
  param: string;
}

export default function NavBarItem(props: IAppProps) {
    const search
    return (
    <div className="hover:text-emerald-500">
      <Link href={`/${props.param}`}>{props.title}</Link>
    </div>
  );
}
