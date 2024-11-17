import React from "react";

const Banner = () => {
  return (
    <div className="banner bg-gray-200 py-14 px-4 text-left">
      <h1 className="text-6xl font-thin">A warm welcome!</h1>
      <p className="my-3">
        Bootstrap utility classes are used to create this jumbotron since the
        old component has been removed from the framework. Why create custom CSS
        when you can use utilities?
      </p>
      <button className="btn">Call to action!</button>
    </div>
  );
};

export default Banner;
