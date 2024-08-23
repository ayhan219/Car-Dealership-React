import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";

const NavbarTop = () => {
  return (
    <div className="w-full h-[40px] bg-[#F6F6F6] flex justify-end items-center pr-[250px] gap-5 border-dashed ">
      <div className="flex gap-4 text-[0.820rem] text-[#838383] ">
      <a href="" className="hover:text-[#003ED8]">Hakkımızda</a>
      <a href="" className="hover:text-[#003ED8]">İnsan Kaynakları</a>
      <a href="" className="hover:text-[#003ED8]">Blog</a>
      <a href="" className="hover:text-[#003ED8]">2.El</a>
      </div>
      <div className="flex space-x-4 text-[#838383] text-[0.960rem]">
        <FaFacebookF className="hover:text-[#003ED8]" />
        <FaTwitter className="hover:text-[#003ED8]" />
        <FaLinkedinIn  className="hover:text-[#003ED8]"/>
        <TfiYoutube  className="hover:text-[#003ED8]"/>
        <FiInstagram className="hover:text-[#003ED8]" />
      </div>
    </div>
  );
};

export default NavbarTop;
