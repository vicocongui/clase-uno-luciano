import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
const Cards = () => {
  return (
    <div className="bg-white w-[80%] mx-auto h-[400px] text-black flex flex-col justify-between rounded-xl relative">
      <img
        src="https://picsum.photos/200/300"
        alt=""
        className="w-full h-full object-cover rounded-t-xl"
      />
      <div className=" absolute p-2 flex flex-col justify-center items-center text-center w-full  h-full bg-gray-800/60">
        <div className="h-2/3 flex w-full justify-center items-end">
          <h3 className="text-4xl text-white pb-12 ">Titulo 2</h3>
        </div>
        <div className="h-1/3 ">
          <button className="bg-black text-white p-4 rounded-lg mt-12 ">
            <BiSolidUpArrow className="w-16 h-16" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
