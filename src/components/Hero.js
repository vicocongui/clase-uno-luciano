import React from "react";

export const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center relative items-center">
      <div
        className="
      bg-red-200 flex justify-center items-center "
      >
        <img
          src="https://picsum.photos/id/1/1080/1920"
          alt=""
          className="w-40 h-40 "
        />
      </div>
      <img
        src="https://picsum.photos/id/1/1080/1920"
        alt=""
        className="w-40 h-40 "
      />
      <img
        src="https://picsum.photos/id/1/1080/1920"
        alt=""
        className="w-40 h-40 "
      />
      <img
        src="https://picsum.photos/id/1/1080/1920"
        alt=""
        className="w-40 h-40 "
      />
      <img
        src="https://picsum.photos/id/1/1080/1920"
        alt=""
        className="w-40 h-40 "
      />
      <img
        src="https://picsum.photos/id/1/1080/1920"
        alt=""
        className="w-40 h-40 "
      />
      {/* <h1 className="absolute top-40 right-50 left-50 z-20 text-white text-4xl">
        Bienvenido
      </h1>
      <h3 className="absolute ">Web Rick and Morty</h3> */}
    </div>
  );
};
