import { useState, useEffect } from "react";

import React from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require("../assets/images/hero1.jpg"),
    require("../assets/images/hero2.jpg"),
    require("../assets/images/hero3.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="image-slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        animation:'slideLeft 3s linear infinite'
      }}
    ></div>
  );
};

export default ImageSlider;
