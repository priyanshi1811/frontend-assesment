import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialTwitterCircular,
  TiSocialInstagram,
} from "react-icons/ti";

const Header = () => {
  const navigation = ["Home", "about", "contact"];
  return (
    <div className="bg-[#1A1A1A] font-poppins  font-[400] flex justify-between text-[14px] h-11 text-white w-full">
      <div className="md:ml-20 flex md:m-3 m-1 md:mt-3 mt-3 justify-between text-[#626262]">
        <div className="flex justify-center">
          <div className="mt-1">
            <TbTruckDelivery />
          </div>
          <div>
            <text className="md:ml-2 ml-1">Free Delivery</text>
          </div>
        </div>
        <div className="md:ml-3 ml-1">
          <text>|</text>
        </div>
        <div className="flex md:ml-3 ml-1">
          <text className="">Return Policy</text>
        </div>
      </div>
      <div className="sm:mr-10 md:mr-20 flex flex-row justify-between text-[#626262] items-center text-[14px] m-3">
        <div className="flex flex-row w-full">
          <div>
            <text>Login</text>
          </div>
          <div className="md:flex flex-row">
            <div className="ml-2 hidden md:flex flex-row">
              <text>Follow US</text>
            </div>
            <div className="justify-betweenm mt-1 ml-2 flex flex-row">
              <TiSocialFacebook />
              <TiSocialLinkedin />
              <TiSocialTwitter />
              <TiSocialInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
