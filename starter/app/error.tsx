"use client";
import * as React from "react";

interface IAppProps {
  error: Error;
  reset: () => void;
}

export default function App({ error, reset }: IAppProps) {
  React.useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className = 'text-center mt-20'>
      <h1>Something went wrong.</h1>
      <button className="border-2 border-dashed rounded-3xl p-1 px-2 mt-5 border-black dark:border-white dark:hover:border-emerald-500 hover:border-emerald-500 hover:text-emerald-500 " onClick={() => reset}>
        Try Again
      </button>
    </div>
  );
}
