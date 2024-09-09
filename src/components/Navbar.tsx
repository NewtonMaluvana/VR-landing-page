import React from "react";
export const Navbar = () => {
  return (
    <div className="bg-blue-700 text-white">
      <div className="">VIRTUALITY</div>
      <div className="">
        <a href="">Product</a>
        <a href="">Features</a>
        <a href="">Service</a>
        <a href="">How it Works</a>
      </div>
      <div className="">
        <a href="" className="btn btn-accent capitalize">
          Contact now
        </a>
      </div>
    </div>
  );
};
