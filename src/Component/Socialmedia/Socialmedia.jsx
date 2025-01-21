// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPlus } from "react-icons/fa";

const SocialMedia = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Button (Spins) */}
      <motion.div
        className="w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-full flex items-center justify-center shadow-xl focus:outline-none transition-all"
        whileHover={{ scale: 1.1, rotate: 180 }}
      >
        <FaPlus size={24} />
      </motion.div>

      {/* Expanding Social Media Icons */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-20 right-2 flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {[
              { href: "https://facebook.com", icon: <FaFacebook size={24} /> },
              { href: "https://twitter.com", icon: <FaTwitter size={24} /> },
              { href: "https://linkedin.com", icon: <FaLinkedin size={24} /> },
              { href: "https://github.com", icon: <FaGithub size={24} /> },
            ].map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg transition-all"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.icon}
                </motion.div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMedia;
