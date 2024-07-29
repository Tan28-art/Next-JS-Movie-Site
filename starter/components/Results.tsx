import * as React from 'react';

export interface IAppProps {
    results: any // will be the json object results passed as a prop to this component
}

export default function Results ({results}: IAppProps) {
  return (
    <div>
      {results.map((result: any) => (
        <div key={result.id}>
          <h1>{result.title}</h1>
          
        </div>
      ))}
    </div>
  );
}
