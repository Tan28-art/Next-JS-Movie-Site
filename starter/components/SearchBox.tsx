"use client";

import * as React from "react";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";
<IoSearch />;

export interface IAppProps {}

export default function SearchBox(props: IAppProps) {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/search/' + search);
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="border-2 rounded-2xl outline-none dark:border-gray-500 border-gray-400 hover:border-emerald-500 dark:hover:border-emerald-500 px-2 w-24 sm:w-auto md:text-xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="sm:text-3xl text-xl text-emerald-500 disabled:text-gray-300 dark:disabled:text-gray-600"
        disabled={search === ""}
      >
        <IoSearch />
      </button>
    </form>
  );
}
