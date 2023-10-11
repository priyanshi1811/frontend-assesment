import React, { useState } from "react";
import { data } from "../assets/data";
import background from "../assets/Rectangle.png";
import boy from "../assets/Group.png";
import "../css/styles.css";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Hero = () => {
  return (
    <div
      className="bg-[#000] bg-opacity-90"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex text-[#fff] md:ml-20 md:mr-20 ml-10 mr-10 justify-between">
        <div>
          <text className="mb-2 font-poppins font-[275] text-[40px]">
            ShopKart
          </text>
        </div>
        <div className="hidden md:flex md:flex-row text-[14px] font-poppins font-[500] items-end mb-2">
          <text className="mr-3">WISHLIST (0)</text>
          <text>Bag (0) </text>
        </div>
      </div>
      <hr className="md:ml-20 md:mr-20 ml-10 mr-10" />
      <div
        className="md:w-full h-[115vh]"
        style={{ backgroundImage: `url(${boy})` }}
      >
        <Navbar />
        <div className="flex flex-col md:ml-20 text-[#fff] md:text-[120px] text-[60px] font-syne font-[800] ">
          <text className="md:ml-20">Fresh</text>
          <div className="outlined-text">
            <text
              className="absolute"
              style={{
                top: "84%",
                left: "55%",
                transform: "translate(-70%, -50%)",
              }}
            >
              2022
            </text>
          </div>
          <text
            className="absolute"
            style={{
              top: "104%",
              left: "40%",
              transform: "translate(-70%, -50%)",
            }}
          >
            Look
          </text>
        </div>
      </div>
    </div>
  );
};

export default Hero;
