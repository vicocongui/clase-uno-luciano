import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineSmallDash } from "react-icons/ai";
import Modal from "react-modal";
const Cards = () => {
  const [modalIsOpen, setIsOpen] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 40,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "80%",
      border: "none",
      background: "transparent",
      overflow: "visible",
    },
  };

  return (
    <div className="bg-white w-full mx-auto h-[400px] text-black flex flex-col justify-between relative">
      <img
        src="https://picsum.photos/200/300"
        alt=""
        className="w-full h-full object-cover "
      />
      <div
        onClick={() => openModal()}
        className=" absolute p-2 py-4 flex flex-col justify-end items-center text-center w-full  h-full bg-gray-800/60 cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl text-white">Titulo 2</h3>
          <AiOutlineArrowRight className=" h-8 w-full text-white" />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex mx-auto justify-center items-center h-[60vh]">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-[40%] h-[60vh] object-cover"
          />
          <div className="w-[60%] text-white  h-[60vh] flex flex-col justify-around items-center">
            <p>Hola hola </p>
            <p>Hola hola </p>
            <p>Hola hola </p>
            <p>Hola hola </p>
            <p>Hola hola </p>
            
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cards;
