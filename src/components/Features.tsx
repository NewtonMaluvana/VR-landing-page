import React from "react";
import { BiCross, BiStar } from "react-icons/bi";
import { motion } from "framer-motion";
React;
export const Features = () => {
  const images = [
    { id: 1, img: "/image/images (3).png", title: "Comfort" },
    { id: 2, img: "/image/images (9).png", title: "Sensory" },
    { id: 3, img: "/image/images (8).png", title: "Virtualization" },
    { id: 4, img: "/image/images (7).png", title: "Interactivity" },
  ];
  return (
    <div
      id="Features"
      className="flex md:flex-row flex-col-reverse w-full  mt-20 md:px-8 px-2"
    >
      <div className="md:w-1/2 w-full my-8  place-items-center   grid grid-cols-4 gap-4">
        {images.map((e) => (
          <motion.div
            initial={{ translateX: -100 }}
            whileInView={{
              translateX: 0,
            }}
            transition={{ duration: 1 }}
            key={e.id}
            className="flex hover:scale-110 duration-1000 bg-gradient-to-br p-2 rounded-md mx-auto from-violet-950 to-violet-500 col-span-2 flex-col gap-4 justify-center w-4/5 h-52 items-center"
          >
            <img width={70} src={e.img} alt="" />
            <p className="text-xl text-white">{e.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="md:w-1/2 w-full my-4  px-4">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{ duration: 2 }}
          className="lg:text-5xl text-3xl  flex mt-16  text-wrap text-blue-700 font-semibold"
        >
          Outstanding Features waiting for You
          <span className="text-md flex">
            4.5 <BiStar className="text-yellow-500" />
          </span>
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{ duration: 2 }}
          className="text-lg mt-4 font-light py-6  text-black text-wrap"
        >
          Enter a world where reality meets imagination in our VR
          playground.Unleash your creativity and embark on a thrilling
          adventures today
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <button className="btn min-w-[200px] w-1/3 mt-8 rounded-xl hover:bg-black hover:text-white text-blue-600 flex gap-4  text-lg hover:scale-90 duration-1000">
            Get Started <BiCross />
          </button>
        </motion.div>
        {/* <div className="flex justify-between items-center   mt-10">
          <div className="text-white text-wrap flex-shrink  flex flex-col justify-center items-center bg-red-400 rounded-md px-4 py-2">
            <span>1.5M+</span> Active Users
          </div>
          <div className="text-white  text-wrap flex flex-col justify-center items-center bg-red-400 rounded-md px-4 py-2 ">
            <span>900k+</span> Positive Feedback
          </div>
        </div> */}
      </div>
    </div>
  );
};
