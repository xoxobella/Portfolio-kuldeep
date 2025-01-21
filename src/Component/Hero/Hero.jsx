// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import Bitmoji from "../../assets/Bitmoji.png";

const Hero = () => {
  // Motion Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-white h-screen flex items-center justify-center px-6 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-300 shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={Bitmoji}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight"
            variants={item}
          >
            Building digital products, brands, and experiences.
          </motion.h1>
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 px-2 sm:px-0"
            variants={item}
          >
            A Product Designer and Visual Developer in SF. I specialize in UI/UX
            Design, Responsive Web Design, and Visual Development.
          </motion.p>
          <motion.button
            className="bg-black text-white hover:bg-gray-800 px-5 sm:px-6 py-3 rounded-lg font-medium text-base sm:text-lg"
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Connect with Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
