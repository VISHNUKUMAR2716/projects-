import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Resume from "../assets/WhatsApp Image 2025-02-07 at 10.30.36 AM.pdf";

const About = () => {
  return (
    <div
      id="About"
      className="bg-gradient-to-b from-white to-gray-100 min-h-screen px-4 py-12"
    >
      {/* Profile Image */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <img
          src="https://portfolio1-three-mu.vercel.app/assets/memoji-smile-B91-HwDZ.png"
          alt="me"
          className="w-44 h-44 rounded-full border-4 border-white shadow-xl bg-gray-300"
        />
      </motion.div>

      {/* About Card */}
      <motion.div
        className="bg-white max-w-3xl mx-auto mt-8 rounded-2xl shadow-2xl p-6 md:p-10 text-center"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Hello! I'm <span className="font-semibold text-black">Vishnu Kumar</span>, a passionate
          web developer. My curiosity about how modern tech works inspired me to
          dive into web development. I'm a self-learner dedicated to continuous
          improvement. I believe everything becomes simple once the basics are
          strong.
        </p>

        {/* Download Button */}
        <a href={Resume} download="VishnuKumar_Resume.pdf">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full shadow-lg transition duration-300 hover:shadow-xl"
          >
            <FaDownload /> Download CV
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default About;
