import React from "react";

export default function page() {
  return (
    // <div className="space-y-4 p-2 px-5 mx-auto sm:text-sm">
      <h1 className="text-2xl font-medium text-emerald-500">About Page</h1>
      <div className = "text-xl space-y-4">
          <p>
            Welcome to IMDb Clone, your go-to source for all things movies! Our goal
            is to provide a simple, easy-to-use platform where film enthusiasts can
            discover and explore a wide range of films.
          </p>
          <h2 className="text-2xl font-medium text-emerald-500">Who We Are</h2>
          <p>
            IMDb Clone was created by one person who wanted to share their passion
            for cinema. I aim to make finding and learning about movies enjoyable
            and accessible for everyone.
          </p>
          <h2 className="text-2xl font-medium text-emerald-500">What We Offer</h2>
          <p>
            At IMDb Clone, we provide a growing database of movies across various
            genres and eras that you can browse and search through freely.
          </p>
      </div>
    </div>
  );
}
