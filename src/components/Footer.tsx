import React from "react";

React;
export const Footer = () => {
  return (
    <div id="footer" className="bg-slate-900 relative pt-52 pb-28">
      <div className="absolute -top-32  w-full h-[300px]">
        <img
          width={400}
          className="w-full h-full object-contain"
          src="/image/Virtue.png"
          alt=""
        />
      </div>
      <div className="grid place-items-center">
        <button className="btn btn-primary px-12">Try Now</button>
      </div>
      <div className=""></div>
      <div className="flex md:flex-row gap-8 mt-20 flex-col justify-between items-center px-6 ">
        <div className="flex flex-col justify-center items-center gap-4 text-white">
          <h1 className="text-3xl text-white font-semibold">About Us</h1>
          <a href="">Teams</a>
          <a href="">Company</a>
          <a href="">Customers</a>
          <a href="">Careers</a>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <h1 className="text-3xl font-semibold text-white">VR Solutions</h1>
          <a href="">Teams</a>
          <a href="">Company</a>
          <a href="">Customers</a>
          <a href="">Careers</a>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <h1 className="text-3xl font-semibold text-white">VR Solutions</h1>
          <a href="">Ai Solutions</a>
          <a href="">Game Experience</a>
          <a href="">Visuals</a>
          <a href="">Video Play</a>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <h1 className="text-3xl font-semibold text-white">VR Resources</h1>
          <a href="">Forum</a>
          <a href="">Support</a>
          <a href="">Vr Directories</a>
          <a href="">Events</a>
        </div>
      </div>
    </div>
  );
};
