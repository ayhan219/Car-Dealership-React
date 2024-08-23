import React from "react";
import logo from "../assets/arkas.jpg";

const Navbar = () => {
  return (
    <div className="w-full h-28 bg-white flex items-center justify-evenly">
      <div className="w-20 h-16">
        <img src={logo} alt="Arkas Logo" />
      </div>
      <div className="flex gap-5 text-[#000000] font-semibold relative">
        <div className="relative group">
          <a href="#" className="hover:text-[#00247D]">Sıfır Araç</a>
          <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-2 p-4 rounded-lg z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Marka 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Marka 2</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Marka 3</a>
          </div>
        </div>
        <a href="#" className="hover:text-[#00247D]">Servis</a>
        <a href="#" className="hover:text-[#00247D]">Filo Kiralama</a>
        <a href="#" className="hover:text-[#00247D]">2. El</a>
        <a href="#" className="hover:text-[#00247D]">Şubelerimiz</a>
      </div>
      <button className="w-36 h-10 bg-[#00247D] rounded-sm font-extrabold text-white text-[0.900rem] hover:bg-blue-700 transition ease-in-out">Bize Ulaşın</button>
    </div>
  );
};

export default Navbar;
