import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={` z-10 w-full text-white items-center relative px-2 flex justify-between md:px-12 ${
        isScroll ? "bg-transparent" : "bg-violet-700"
      } duration-1000 px-2 py-6 sticky top-0 left-0`}
    >
      <a
        href="#"
        className="text-3xl flex text-red-500  font-bold hover:scale-90 duration-1000"
      >
        <img src="/image/icon2.png" className="w-11 h-11 rotate-[130]" alt="" />
        VR
      </a>
      <div className=" gap-4 text-lg font-sans   md:block hidden ">
        <a href="#footer" className="m-2 hover:text-black duration-1000 ">
          Product
        </a>
        <a href="#Features" className="m-2 hover:text-black duration-1000">
          Features
        </a>
        <a href="#Book" className="m-2 hover:text-black duration-1000">
          Book Now
        </a>
        <a href="#" className="m-2 hover:text-black duration-1000">
          How it Works
        </a>
      </div>
      <div className="flex gap-2 justify-center relative items-center">
        <a
          href="#"
          className="btn hover:rounded-3xl hover:scale-90 duration-1000 bg-white capitalize text-xl"
        >
          Contact now
        </a>
        <div
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="md:hidden block z-[70] cursor-pointer"
        >
          {isOpen ? (
            <RxCross2 className="text-orange-600" size={30} />
          ) : (
            <IoMdMenu size={30} />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          onMouseLeave={() => {
            setOpen(!isOpen);
          }}
          className=" absolute top-0 flex z-50 justify-center gap-2 items-center flex-col left-0 w-full bg-violet-600"
        >
          <a
            onClick={() => setOpen(!isOpen)}
            className="text-2xl text-white p-2 hover:text-gray-700"
            href="#footer"
          >
            Product
          </a>
          <a
            onClick={() => setOpen(!isOpen)}
            className="text-2xl text-white p-2 hover:text-gray-700"
            href="#Features"
          >
            Features
          </a>
          <a
            onClick={() => setOpen(!isOpen)}
            className="text-2xl text-white p-2 hover:text-gray-700"
            href="#Book"
          >
            Book Now
          </a>
          <a
            onClick={() => setOpen(!isOpen)}
            className="text-2xl text-white p-2 hover:text-gray-700"
            href="#Features"
          >
            How it Works
          </a>
        </div>
      )}
      {isOpen && (
        <div
          onClick={() => setOpen(!isOpen)}
          className="w-screen z-40 h-screen bg-slate-900 opacity-80 fixed top-0 left-0"
        ></div>
      )}
    </div>
  );
};
