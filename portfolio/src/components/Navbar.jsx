import React from "react";
import { FaHome, FaUser, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-16 h-full  text-black flex flex-col justify-center items-center space-y-24 text-3xl">
      <a
        href="#Home"
        className="hover:text-red-400 hover:scale-110 transition duration-500 ease-in-out"
      >
        <FaHome />
      </a>
      <a
        href="#About"
        className="hover:text-red-400 hover:scale-110 transition duration-500 ease-in-out"
      >
        <FaUser />
      </a>
      <a
        href="#Skill"
        className="hover:text-red-400 hover:scale-110 transition duration-500 ease-in-out"
      >
        <FaFileAlt />
      </a>
      <a
        href="#Contect"
        className="hover:text-red-400 hover:scale-110 transition duration-500 ease-in-out"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Navbar;
