import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [Result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa3fe033-332f-43f1-a433-69ac1bbe4cd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="Contect" className="px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-center font-bold text-4xl mb-2 text-gray-800">Get In Touch</h1>
      <h4 className="text-center text-lg text-gray-600 mb-6">I'd love to collaborate or answer your questions!</h4>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-3xl mb-10">
        <a
          href="https://github.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-3 rounded-full shadow-md hover:shadow-lg hover:bg-gray-200 transition"
        >
          <FaGithub className="text-gray-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishnu-kumar-82575630a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-100 p-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-200 transition"
        >
          <FaLinkedin className="text-blue-700" />
        </a>
        <a
          href="mailto:vishnuarun2704@gmail.com"
          className="bg-red-100 p-3 rounded-full shadow-md hover:shadow-lg hover:bg-red-200 transition"
        >
          <FaEnvelope className="text-red-500" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white backdrop-blur-md bg-opacity-70 p-8 rounded-xl shadow-xl">
        <form onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="aa3fe033-332f-43f1-a433-69ac1bbe4cd1" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full mb-4 p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-blue-400 outline-none transition"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 rounded-md hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
        {Result && <p className="text-center text-green-600 font-semibold mt-4">{Result}</p>}
      </div>
    </div>
  );
};

export default Contact;
