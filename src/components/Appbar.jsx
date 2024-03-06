import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Appbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  // const scrollToWhatsApp = () => {
  //   window.open("https://wa.me/919922503966", "_blank");
  // };

  return (
    <div className=" text-white flex justify-between items-center absolute w-full z-10 mt-2">
      <img
        src={logo}
        alt="logo"
        className="max-w-[80px] md:max-w-[120px] md:ml-[30px] ml-4"
      />

      <ul className="hidden md:flex gap-3 items-center md:mx-[30px] text-lg">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={200}
          className="p-4 cursor-pointer  hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={200}
          className="p-4 cursor-pointer hover:underline underline-offset-4 "
        >
          About
        </Link>
        <Link
          to="products"
          spy={true}
          smooth={true}
          duration={200}
          className="p-4 cursor-pointer hover:underline underline-offset-4 "
        >
          Products
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={200}
          className="p-4 cursor-pointer hover:underline underline-offset-4 "
        >
          Contact
        </Link>
      </ul>

      <div onClick={handleNav} className="md:hidden block md:mx-[24px] mr-4">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "flex flex-col fixed top-0 w-[40%] h-full  border-r border-r-gray-50 bg-[#000300]/90 ease-in-out duration-500 "
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <Link
          to="home"
          spy={true}
          smooth="true"
          duration={200}
          className=" p-4 cursor-pointer  border-b border-b-gray-50"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth="true"
          duration={200}
          className=" p-4 cursor-pointer  border-b border-b-gray-50"
        >
          About
        </Link>
        <Link
          to="products"
          spy={true}
          smooth="true"
          duration={200}
          className=" p-4 cursor-pointer  border-b border-b-gray-50"
        >
          Products
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth="true"
          duration={200}
          className=" p-4 cursor-pointer  "
          // onClick={scrollToWhatsApp}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Appbar;
