import * as React from "react";
import Card from "./Card";

export interface IAppProps {
  results: any; // will be the json object results passed as a prop to this component
}

export default function Results({ results }: IAppProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-8xl mx-auto gap-3 py-5 sm:px-5">
      {results.map((result: any) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
