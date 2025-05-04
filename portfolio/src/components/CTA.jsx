import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-12">
      {/* Education Cards */}
      <div className="max-w-3xl mx-auto">
        {/* First Education Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg mb-6 hover:shadow-xl transition duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaGraduationCap className="w-12 text-indigo-600" />
            <h3 className="text-gray-500 font-semibold">2024-2026</h3>
          </div>
          <div className="ml-16 mt-4">
            <h1 className="text-xl font-bold font-serif text-gray-800">B.TECH-INFORMATION TECHNOLOGY</h1>
            <h2 className="font-sans text-lg text-gray-600">SNS College of Engineering, Coimbatore</h2>
            <h3 className="text-gray-800 font-semibold mt-2">Percentage: 75.5%</h3>
          </div>
        </div>

        {/* Second Education Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg mb-6 hover:shadow-xl transition duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaGraduationCap className="w-12 text-indigo-600" />
            <h3 className="text-gray-500 font-semibold">2020-2023</h3>
          </div>
          <div className="ml-16 mt-4">
            <h1 className="text-xl font-bold font-serif text-gray-800">DIPLOMA IN CIVIL ENGINEERING</h1>
            <h2 className="font-sans text-lg text-gray-600">Thiagarajar Polytechnic College, Salem</h2>
            <h3 className="text-gray-800 font-semibold mt-2">Percentage: 85.5%</h3>
          </div>
        </div>

        {/* Third Education Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg mb-6 hover:shadow-xl transition duration-300 ease-in-out">
          <div className="flex items-center space-x-4">
            <FaGraduationCap className="w-12 text-indigo-600" />
            <h3 className="text-gray-500 font-semibold">2018-2019</h3>
          </div>
          <div className="ml-16 mt-4">
            <h1 className="text-xl font-bold font-serif text-gray-800">SCHOOLING</h1>
            <h2 className="font-sans text-lg text-gray-600">Yuva Bharathi Matric School</h2>
            <h3 className="text-gray-800 font-semibold mt-2">Percentage: 44.5%</h3>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-xl mx-auto mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.245755417942!2d78.14509037478115!3d11.6643257885404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf4db4e19f22b%3A0x23f16e8100f9a0a6!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714472669437!5m2!1sen!2sin"
          className="w-full h-72 rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Salem Location"
        ></iframe>
      </div>
    </div>
  );
};

export default CTA;
