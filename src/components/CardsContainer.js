import React from "react";
import Cards from "./Cards";

const CardsContainer = () => {
  return (
    <div
      className=" h-full  bg-black
    "
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-5 px-2 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default CardsContainer;
