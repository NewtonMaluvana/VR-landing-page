import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  return (
    <div
      onScrollCapture={() => setIsScroll(true)}
      className={` z-10 w-full text-white items-center px-2 flex justify-between md:px-12 ${
        isScroll ? "bg-transparent" : "bg-violet-700"
      } duration-1000 px-2 py-6 sticky -top-6 left-0`}
    >
      <a
        href="#"
        className="text-3xl flex text-red-500  font-bold hover:scale-90 duration-1000"
      >
        <img src="/image/icon2.png" className="w-11 h-11 rotate-[130]" alt="" />
        VR
      </a>
      <div className=" gap-4 text-lg font-sans   md:block hidden ">
        <a href="#" className="m-2 hover:text-black duration-1000 ">
          Product
        </a>
        <a href="#" className="m-2 hover:text-black duration-1000">
          Features
        </a>
        <a href="#" className="m-2 hover:text-black duration-1000">
          Service
        </a>
        <a href="#" className="m-2 hover:text-black duration-1000">
          How it Works
        </a>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <a
          href="#"
          className="btn hover:rounded-3xl hover:scale-90 duration-1000 bg-white capitalize text-xl"
        >
          Contact now
        </a>
        <div className="md:hidden block">
          <IoMdMenu size={30} />
        </div>
      </div>
    </div>
  );
};
