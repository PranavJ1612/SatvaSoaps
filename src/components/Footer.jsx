import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#DCBFFF] w-full lg:h-[117px] h-[90px] flex flex-row justify-between items-center px-4 ">
      <Link to="home" spy={true} smooth={true} duration={200}>
        <img
          src={logo}
          alt="company logo"
          className="z-10 md:h-[100px] md:w-[100px] h-[80px] w-[80px] cursor-pointer"
        />
      </Link>
      <p className="text-sm md:text-lg"> &copy; 2024. All rights reserved.</p>
    </div>
  );
};

export default Footer;
