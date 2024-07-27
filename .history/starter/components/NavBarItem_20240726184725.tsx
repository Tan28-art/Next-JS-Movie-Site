"use client";

import Link from "next/link";
import * as React from "react";
import { useSearchParams } from "next/navigation";

export interface IAppProps {
  title: string;
  param: string;
}

export default function NavBarItem(props: IAppProps) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div
      className={`hover:text-emerald-500 font-semibold
    ${genre === props.param ? "underline-offset-8 decoration-4 decoration-emerald-500 rounded-lg" : ""}
    `}
    >
      <Link href={`/${props.param}`}>{props.title}</Link>
    </div>
  );
}
