import React from "react";
import why1 from "../assets/images/why1.jpg";
import why2 from "../assets/images/why2.jpg";
import why3 from "../assets/images/why3.jpg";

const WhySatva = () => {
  return (
    <>
      <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold  font-serif text-center text-black my-4">
        Why Satva
      </h1>
      <div className="h-screen w-full p-4">
        <div className="h-full grid grid-rows-3 md:grid-cols-2 md:grid-rows-2  gap-4">
          <div className="row-span-1 md:row-span-2 relative rounded-2xl">
            <img
              src={why1}
              className="object-cover h-full w-full rounded-2xl"
              alt="Why 1"
            />
            <div className="bg-black/80 absolute inset-0 flex justify-center items-center lg:px-20 rounded-2xl">
              <p className="text-white text-xl md:text-2xl lg:text-4xl text-center px-4">
                Pure ingredients for healthier skin.
              </p>
            </div>
          </div>

          <div className="row-span-1 relative rounded-2xl">
            <img
              src={why2}
              className="object-cover h-full w-full rounded-2xl"
              alt="Why 2"
            />
            <div className="bg-black/80 absolute inset-0 flex justify-center items-center lg:px-20 rounded-2xl">
              <p className="text-white text-xl md:text-2xl lg:text-4xl text-center  px-4">
                Delicious treats without harmful chemicals.
              </p>
            </div>
          </div>

          <div className="row-span-1 relative rounded-2xl">
            <img
              src={why3}
              className="object-cover h-full w-full rounded-2xl"
              alt="Why 3"
            />
            <div className="bg-black/80 absolute inset-0 flex justify-center items-center lg:px-20 rounded-2xl">
              <p className="text-white text-xl md:text-2xl lg:text-4xl text-center  px-4">
                Indulge guilt-free with exquisite flavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySatva;
