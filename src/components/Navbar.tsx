import React from "react";
import { IoMdMenu } from "react-icons/io";
export const Navbar = () => {
  return (
    <div className="bg-blue-600 w-full text-white items-center  flex justify-between md:px-12 px-2 py-6 sticky top-0 left-0">
      <a
        href="#"
        className="md:text-3xl text-xl font-semibold hover:scale-90 duration-1000"
      >
        VIRTUALITY
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
          className="btn hover:rounded-3xl hover:scale-90 duration-1000 btn-error capitalize text-xl"
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
