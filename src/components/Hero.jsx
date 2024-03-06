import React from "react";
import Appbar from "./Appbar";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <ImageSlider />
      <div className="h-screen w-full bg-black/80 top-0 left-0 absolute" />

      {/* text */}
      <div className="absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center">
        <div className="max-w-[1240px] m-auto absolute p-4  flex flex-col items-center h-auto">
          <h1 className="font-bold text-white  lg:text-[48px] sm:text-[32px] text-xl text-center font-serif">
            Experience Pure Bliss with SatvaSoaps
          </h1>
          <p className="text-white  lg:text-[20px] sm:text-[18px] text-[11px] text-center sm:pt-2 lg:pt-3">
            {" "}
            Pure, Chemical-Free Soaps and Chocolates Await!
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-12 z-10 right-0 left-0">
        <div className=" flex items-center justify-center gap-2 mb-10">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
