import React from "react";

export const Hero = () => {
  return (
    <div className="flex gap-2 justify-center relative items-center h-screen">
      <h1 className="absolute top-40 right-50 left-50 z-20 text-4xl">
        Bienvenido
      </h1>
      <h3 className="absolute ">Web Rick and Morty</h3>
      <img
        src="https://picsum.photos/500/700"
        alt=""
        className="w-full h-full cover"
      />
    </div>
  );
};
