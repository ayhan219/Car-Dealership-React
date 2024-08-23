import React, { useState, useEffect } from 'react';
import img1 from "../assets/araba.jpg";
import img2 from "../assets/araba1.jpg";
import img3 from "../assets/araba2.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [img1, img2, img3];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-[500px] flex justify-center items-center '>
      <div className='relative w-full h-full max-w-screen-lg overflow-hidden shadow-xl'>
        <FaArrowLeft
          className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-semibold text-4xl cursor-pointer z-10'
          onClick={goToPreviousImage}
        />
        <FaArrowRight
          className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-semibold text-4xl cursor-pointer z-10'
          onClick={goToNextImage}
        />
        <div className='relative w-full h-full'>
          <div
            className='flex transition-transform duration-1000 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                className='w-full h-full object-cover flex-shrink-0'
                src={img}
                alt={`slide-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
