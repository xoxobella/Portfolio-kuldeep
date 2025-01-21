// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Experience",
    items: [
      {
        role: "Frontend Developer",
        company: "Tech Company",
        date: "2022 - Present",
        description:
          "Developed modern web applications using React, Next.js, and TailwindCSS.",
      },
      {
        role: "UI/UX Designer",
        company: "Creative Studio",
        date: "2020 - 2022",
        description:
          "Designed intuitive user interfaces and enhanced user experience for web and mobile applications.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        role: "Bachelor’s in Computer Science",
        company: "XYZ University",
        date: "2017 - 2021",
        description:
          "Specialized in web development, UI/UX design, and front-end frameworks.",
      },
    ],
  },
  {
    title: "Skills",
    items: [
      {
        role: "Frontend Development",
        description:
          "React, Next.js, TailwindCSS, JavaScript, TypeScript, HTML, CSS",
      },
      {
        role: "Design & Tools",
        description: "Figma, Adobe XD, Photoshop, Framer Motion",
      },
    ],
  },
];

const Resume = () => {
  return (
    <section className="bg-white min-h-screen py-12 px-6 md:px-16 ">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto"
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
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-10"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-2xl font-semibold text-black border-b-2 pb-2 mb-4">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-gray-100 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold text-black">{item.role}</h3>
                  <p className="text-gray-600 text-sm">{item.company} • {item.date}</p>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Resume;
