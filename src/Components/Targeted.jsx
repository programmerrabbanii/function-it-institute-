import React from 'react';
import { motion } from 'framer-motion';
import fiverr from "../assets/Fiverr.png";
import upwork from "../assets/Upwork.png";
import people from "../assets/People Per Hour.png";
import kWork from "../assets/Kwork.png";
import indeed from "../assets/Indeed.png";
import linkedin from "../assets/Linkedin.png";

const marketplaces = [
  { img: upwork, alt: "Upwork" },
  { img: people, alt: "PeoplePerHour" },
  { img: fiverr, alt: "Fiverr" },
  { img: kWork, alt: "Kwork" },
  { img: indeed, alt: "Indeed" },
  { img: linkedin, alt: "LinkedIn" },
];

const Targeted = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-slate-100">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-gray-800 mb-12"
      >
        Our Targeted <span className="text-pink-600">Marketplace</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center px-4 max-w-6xl mx-auto">
        {marketplaces.map((marketplace, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:scale-110 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={marketplace.img}
              alt={marketplace.alt}
              className="object-contain max-h-full max-w-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Targeted;
