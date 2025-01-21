import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Animation Variants for Mobile Menu
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.nav
      className="bg-white border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold text-black">
            MyPortfolio
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-cta"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Animated Mobile Navbar */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg md:hidden flex flex-col items-center justify-center z-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col font-medium p-4 space-y-6 text-center">
                <li>
                  <Link
                    to="/"
                    className="block text-black relative group hover:text-gray-700 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                    <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-1/2"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className="block text-black relative group hover:text-gray-700 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                    <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-1/2"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    className="block text-black relative group hover:text-gray-700 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Work
                    <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-1/2"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-black relative group hover:text-gray-700 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                    <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-1/2"></span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navbar */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="text-black hover:text-gray-700 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/resume" className="text-black hover:text-gray-700 relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/work" className="text-black hover:text-gray-700 relative group">
            Work
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-700 relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Get Started Button (Always visible on desktop) */}
        <div className="hidden md:flex">
          <button
            type="button"
            className="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
