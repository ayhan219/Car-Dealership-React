import React, { useState } from "react";
import img1 from "../assets/citroen.png";
import img2 from "../assets/ford.png";
import img3 from "../assets/mg.png";
import img4 from "../assets/opel.png";
import img5 from "../assets/peug.jpg";
import img6 from "../assets/subaru.jpg";
import img7 from "../assets/suzuki.png";
import img8 from "../assets/volvo.png";

const Brands = ({activeBrand,setActiveBrand}) => {
  

  const handleSetActiveBrand = (brand) => {
    setActiveBrand(brand);
    console.log(brand);
    
  };

  // Helper function to determine if an image is active
  const isActive = (brand) => activeBrand === brand;

  return (
    <div className="w-full h-[150px] flex items-center gap-4 justify-center">
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("citroen") ? "border-solid border-2 bg-black shadow-2xl" : ""
        }`}
        src={img1}
        alt="Citroen"
        onClick={() => handleSetActiveBrand("citroen")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("ford") ? "border-solid border-2 bg-black shadow-2xl" : ""
        }`}
        src={img2}
        alt="Ford"
        onClick={() => handleSetActiveBrand("ford")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("mg") ? "border-solid border-2 shadow-2xl" : ""
        }`}
        src={img3}
        alt="MG"
        onClick={() => handleSetActiveBrand("mg")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("opel") ? "border-solid border-2 bg-black shadow-2xl": ""
        }`}
        src={img4}
        alt="Opel"
        onClick={() => handleSetActiveBrand("opel")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("peug") ? "border-solid border-2 bg-black shadow-2xl" : ""
        }`}
        src={img5}
        alt="Peugeot"
        onClick={() => handleSetActiveBrand("peug")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("subaru") ? "border-solid border-2 bg-black shadow-2xl" : ""
        }`}
        src={img6}
        alt="Subaru"
        onClick={() => handleSetActiveBrand("subaru")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("suzuki") ? "border-solid border-2 bg-black shadow-2xl" : ""
        }`}
        src={img7}
        alt="Suzuki"
        onClick={() => handleSetActiveBrand("suzuki")}
      />
      <img
        className={`w-[100px] h-25 cursor-pointer ${
          isActive("volvo") ? "border-solid border-2 bg-black shadow-2xl" : ""
        }`}
        src={img8}
        alt="Volvo"
        onClick={() => handleSetActiveBrand("volvo")}
      />
    </div>
  );
};

export default Brands;
