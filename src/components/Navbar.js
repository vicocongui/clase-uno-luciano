import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full flex  px-10 bg-gray-200 h-10 items-center justify-between fixed z-10">
      <div>Logo</div>
      <div>
        <button className="block lg:hidden">Hamburg</button>
        <ul className="hidden lg:flex gap-2 ">
          <li className="bg-red-500">
            <a href="#hero">Home</a>{" "}
          </li>
          <li className="bg-red-500">
            <a href="#about">About</a>
          </li>
          <li className="bg-red-500">
            <a href="#personajes">Personajes</a>
          </li>
          <li className="bg-red-500">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
