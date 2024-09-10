import React from "react";
import { CgCross } from "react-icons/cg";

React;
export const Booking = () => {
  const vr = [
    { id: 1, img: "/image/Vir.png", title: "ProX Version" },

    { id: 2, img: "/image/vrr.png", title: "Virtualization" },
    { id: 3, img: "/image/Y.png", title: "Standard Verion" },
  ];
  return (
    <div id="Book" className="w-full bg-violet-600 flex flex-col py-24">
      <div className=" text-center capitalize   text-4xl font-medium text-white grid place-items-center">
        All in one place
      </div>
      <div className="flex md:flex-row flex-col flex-wrap mt-48 mb-10 gap-8 justify-center items-center">
        {vr.map((e) => (
          <div
            key={e.id}
            className="md:w-[30%] w-[90%] bg-white h-[350px] p-8 hover:scale-110 duration-1000  rounded-md"
          >
            <img
              width={280}
              src={e.img}
              className="object-contain w-full h-full"
              alt=""
            />

            <div className="text-orange-600 text-3xl font-semibold relative -top-10">
              {e.title}
            </div>
          </div>
        ))}
      </div>
      <div className="grid place-items-center mb-28">
        <button className="btn  bg-white text-red-600 min-w-[200px] hover:scale-125 duration-1000">
          Book Now <CgCross />{" "}
        </button>
        <div className="text-white text-lg mt-4">While stock last!</div>
      </div>
    </div>
  );
};
