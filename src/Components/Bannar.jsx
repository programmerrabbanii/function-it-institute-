import React from "react";
import { motion } from "framer-motion";

const Bannar = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Empower Your Brand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            with Digital Marketing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          We build result-driven marketing strategies that help your business grow, increase sales, and boost brand awareness — faster than ever before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-3 text-lg font-semibold rounded-full hover:opacity-90 transition duration-300 shadow-lg">
            Get Started Today
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Bannar;
