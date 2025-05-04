import { motion } from "framer-motion";

const circleVariant = {
  animate: {
    scale: [1, 3],
    opacity: [1, 0],
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const bgVariant = {
  animate: {
    background: [
      "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

const ConcentricCircles = () => {
  return (
    <div id="Home">
      <motion.div
        variants={bgVariant}
        animate="animate"
        className="w-full h-screen flex justify-center items-center relative overflow-hidden"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            variants={circleVariant}
            animate="animate"
            className="absolute w-40 h-40 rounded-full border border-white"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

    
        <motion.div
          className="w-6 h-6 rounded-full bg-white z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.8, 1],
            boxShadow: [
              "0 0 0px rgba(255, 255, 255, 0.5)",
              "0 0 20px rgba(255, 255, 255, 0.8)",
              "0 0 0px rgba(255, 255, 255, 0.5)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <img
          src="https://portfolio1-three-mu.vercel.app/assets/memoji-computer-Ce0c39bY.png"
          alt=""
          className="bg-cover bg-no-repeat w-32 mr-5 mb-10 z-10"
        />

        <div className="absolute flex flex-col items-center justify-center z-10 mt-72 text-white text-center">
          <button className="bg-black text-white rounded-xl p-2 mb-2 mt-20">
            Web Developer #MERN
          </button>
          <h1 className="font-bold text-2xl p-2">
            Building Exceptional User Experience
          </h1>
          <h3 className="text-lg w-[300px] p-2">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </h3>
          <button className="border w-36 h-10 bg-gradient-to-r from-slate-200 to-neutral-400 mt-4">
            <a href="https://www.linkedin.com/in/vishnu-kumar-82575630a/">
              💡 Let's Connect
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConcentricCircles;
