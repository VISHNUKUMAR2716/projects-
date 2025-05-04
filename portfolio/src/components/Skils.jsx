import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/HTML.svg";
import Image2 from "../assets/CSS (1).svg";
import Image3 from "../assets/react.svg";
import Image4 from "../assets/Node.svg";
import Image5 from "../assets/Express.svg";
import Image6 from "../assets/Mongodb.svg";
import Image7 from "../assets/Mysql.svg";
import Image8 from "../assets/Tailwind.svg";
import Image9 from "../assets/JS.svg";

// Unified skill objects with image and name
const skills = [
  { name: "HTML", image: Image1 },
  { name: "CSS", image: Image2 },
  { name: "React", image: Image3 },
  { name: "NodeJS", image: Image4 },
  { name: "Express", image: Image5 },
  { name: "MongoDB", image: Image6 },
  { name: "MySQL", image: Image7 },
  { name: "Tailwind", image: Image8 },
  { name: "JavaScript", image: Image9 },
];

// Container variant for staggering
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Slide up variant for each skill
const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SkillsSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center mt-12 sm:mt-24 gap-20 font-semibold text-xl"
      id="Skill"
    >
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          variants={itemVariant}
          className="relative flex flex-col items-center group cursor-pointer"
        >
          {/* Tooltip */}
          <div className="absolute -top-8 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            {skill.name}
          </div>

          {/* Image with multiple hover effects */}
          <motion.img
            src={skill.image}
            alt={skill.name}
            className="w-20 h-20 object-contain rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            initial={{ rotateY: 0 }}
            whileHover={{
              rotateY: 360,
              scale: 1.1,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;
