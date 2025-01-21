// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with actual form submission logic
  };

  return (
    <section className="bg-white min-h-screen py-12 px-6 md:px-16">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <label className="text-black font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <label className="text-black font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <label className="text-black font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-black text-white font-medium px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
