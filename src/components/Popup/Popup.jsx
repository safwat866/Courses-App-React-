import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Popup = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center z-10 p-5"
      onClick={(e) => {
        props.toggleMenu(e);
      }}
    >
      <div
        className="w-full max-w-[550px] bg-white shadow-lg p-3 md:p-8 pt-16 rounded-lg relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AiFillCloseCircle
          className="text-black text-3xl absolute top-5 right-10"
          onClick={(e) => {
            props.toggleMenu(e);
          }}
        />
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
