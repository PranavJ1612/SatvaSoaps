import React from "react";
import logo from "../assets/images/logo.png";

const About1 = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative">
      <img
        src={logo}
        alt="logo"
        className="md:h-[550px] h-[350px] object-cover md:w-[550px] w-[350px]"
      />
      <div className="bg-black/80 h-screen w-full absolute" />
      <h1 className="absolute z-10 lg:text-5xl md:text-3xl text-3xl font-bold  font-serif text-center text-white top-0 my-10  ">
        About Us
      </h1>
      <div className="absolute z-10 max-h-[500px] text-white flex flex-col justify-center items-center">
        <p className="  text-center h-full md:w-[700px] md:text-xl lg:text-2xl text-sm  mt-24  align-middle px-3 ">
          Welcome to Satva, your ultimate destination for indulging in the
          purest pleasures of naturally hand-crafted soaps and chocolates.
          Founded by Maitreyee Joshi, our passion for wholesome living led us to
          create a haven where customers of all ages can revel in the goodness
          of nature. We believe in crafting products that resonate with purity
          and bliss, steering clear of harmful chemicals commonly found in
          traditional soaps. Our mission is simple: to offer a sanctuary where
          individuals can luxuriate in the essence of nature, safeguarding their
          bodies from any harm while delighting their senses with our range of
          carefully curated offerings. At SatvaSoaps.com, we're dedicated to
          providing an experience that nourishes both body and soul, ensuring
          that every interaction leaves you feeling refreshed, rejuvenated, and
          utterly satisfied.
        </p>
      </div>
    </div>
  );
};

export default About1;
