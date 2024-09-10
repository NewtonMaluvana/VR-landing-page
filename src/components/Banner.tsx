import React from "react";
import { BiCross } from "react-icons/bi";

React;
const Banner = () => {
  return (
    <div className="w-full relative bg-violet-700 flex lg:flex-row justify-between flex-col">
      <div className="md:w-1/2 my-4 w-full px-4">
        <h1 className="lg:text-8xl text-5xl  mt-16  text-wrap text-white font-semibold">
          VR Experience is the Future
        </h1>
        <p className="text-lg mt-4 font-light  text-white text-wrap">
          Enter a world where reality meets imagination in our VR
          playground.Unleash your creativity and embark on a thrilling
          adventures today
        </p>
        <div className="flex justify-center items-center">
          <button className="btn min-w-[200px] w-1/3 mt-8 rounded-xl hover:bg-black hover:text-white text-blue-600 flex gap-4  text-lg hover:scale-90 duration-1000">
            Get Started <BiCross />
          </button>
        </div>
        {/* <div className="flex justify-between items-center  px-2 mt-10">
          <div className="text-white flex-shrink min-w-[190px] flex flex-col justify-center items-center bg-red-400 rounded-md px-4 py-2">
            <span>1.5M+</span> Active Users
          </div>
          <div className="text-white min-w-[190px] flex flex-col justify-center items-center bg-red-400 rounded-md px-4 py-2 ">
            <span>900k+</span> Positive Feedback
          </div>
        </div> */}
      </div>
      <div className="md:w-1/2 w-full relative">
        <img
          src="/image/images (2).png "
          className="w-full h-full  object-fill"
          alt=""
        />
      </div>
    </div>
  );
};
export default Banner;
