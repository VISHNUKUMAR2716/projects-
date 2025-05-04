import React from "react";
import { motion } from "framer-motion";
import MYImages from "../assets/Screenshot 2025-05-02 104444.png";
import Image2 from "../assets/Screenshot 2025-05-03 175928.png";
import Image3 from "../assets/Screenshot 2025-05-03 181542.png";

const Project = () => {
  return (
    <div id="Project" className="px-4 py-8">
      <h1 className="font-bold text-3xl text-center mb-8">Projects</h1>

      {/* Project 1 - Card style */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-6 border border-dashed border-indigo-400 rounded-xl bg-white shadow-lg p-6 mb-10"
      >
        <img src={MYImages} alt="project" className="w-full md:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform" />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-serif text-indigo-600">Books Shopping</h3>
          <p className="mt-4 text-gray-600">
            A full-stack book store app with user authentication, shopping cart, and checkout features. Built with modern UI and responsive layout.
          </p>
          <a href="#" className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">View Project</a>
        </div>
      </motion.div>

      {/* Project 2 - Image right layout */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col-reverse md:flex-row items-center gap-6 border border-solid border-blue-400 rounded-xl bg-blue-50 shadow-lg p-6 mb-10"
      >
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-serif text-blue-700">BMW Web Page ReCreate</h3>
          <p className="mt-4 text-gray-700">
            A stylish BMW landing page clone made with React and Tailwind. Emphasizes clean design and brand-like elegance.
          </p>
          <a href="#" className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">View Project</a>
        </div>
        <img src={Image2} alt="project" className="w-full md:w-1/2 rounded-lg shadow-md hover:grayscale transition-all" />
      </motion.div>

      {/* Project 3 - Card with outlined & blurred hover */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center gap-6 border border-2 border-green-300 rounded-xl bg-white shadow-md p-6"
      >
        <img src={Image3} alt="project" className="w-full md:w-1/2 rounded-lg hover:blur-sm transition-all duration-500" />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-serif text-green-700">Recipe Dashboard (API)</h3>
          <p className="mt-4 text-gray-600">
            Real-time recipe browser using an external API (Spoonacular/Edamam). Features search, filters, and clean nutritional data layout.
          </p>
          <a href="#" className="inline-block mt-4 px-4 py-2 border-2 border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition">
            View Project
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
