import React from "react";
import Cards from "./Cards";

const CardsContainer = () => {
  return (
    <div
      className=" h-full  bg-black text-white flex justify-center flex-col
      pb-16
    "
    >
      <h2 className="text-4xl my-16">Personajes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-12 ">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default CardsContainer;
