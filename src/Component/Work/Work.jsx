// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import Intro from '../../assets/Intro.png'
import Lexus from '../../assets/lexus.png'

const projects = [
  {
    title: "E-Commerce Website",
    description: "A modern portfolio website built with React and TailwindCSS.",
    image: (Intro),
    link: 'https://introshop.vercel.app/',
  },
  {
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform built with Next.js.",
    image: (Lexus),
    link: 'https://lexus-olive.vercel.app/',
  },
  {
    title: "Dashboard UI",
    description: "An interactive admin dashboard built using React and Chart.js.",
    image: "https://source.unsplash.com/400x300/?dashboard,data",
    link: "https://your-dashboard.com",
  },
  {
    title: "Landing Page",
    description: "A sleek and modern landing page built with TailwindCSS.",
    image: "https://source.unsplash.com/400x300/?landingpage,design",
    link: "https://your-landingpage.com",
  },
];

const Work = () => {
  return (
    <section className="bg-white min-h-screen py-12 px-6 md:px-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Work
      </motion.h1>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
