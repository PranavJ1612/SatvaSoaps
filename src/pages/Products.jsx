import React from "react";
import ReactWhatsapp from "react-whatsapp";
import { data } from "../data/config";

const Products = () => {
  // console.log(data);
  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold  font-serif text-center text-black ">
        Our Products!
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 h-screen w-full gap-3 md:gap-5  p-4 md:p-5 ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 drop-shadow-md h-[112px] md:h-[220px] lg:h-[235px] w-full grid grid-rows-5 hover:scale-105 duration-300"
          >
            {/* image */}
            <img
              src={item.img}
              className="row-span-3 w-full h-full object-contain aspect-square"
            />
            {/*  title and price*/}
            <div className="row-span-2 ">
              <h2 className="text-center text-sm md:text-2xl font-semibold font-mono line-clamp-1">
                {item.name}
              </h2>
              <div className=" flex justify-evenly  items-center ">
                <p className="text-[#F61313] text-[11px] md:text-xl font-medium">
                  {item.dprice}
                </p>
                <p className="text-[10px] line-through md:text-lg">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactWhatsapp
        id="contact"
        number={process.env.REACT_APP_WHATSAPP_NUMBER}
        message="Hello, I'd like to purchase your product."
        className="px-6 py-2 bg-[#9747FF] hover:brightness-50 hover:drop-shadow-xl text-white text-sm md:text-xl lg:text-2xl md:font-semibold rounded-lg mb-2 mt-3"
      >
        Buy Now
      </ReactWhatsapp>
    </div>
  );
};

export default Products;

{
  /* <button
        className="px-3 py-1 md:px-8 md:py-2 bg-[#9747FF] hover:brightness-50 hover:drop-shadow-xl text-white text-sm md:text-xl lg:text-2xl md:font-semibold rounded-lg"
        onClick={() => {
          window.open("https://wa.me/919922503966", "_blank");
        }}
      >
        Buy Now
      </button> */
}
