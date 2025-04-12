import React from "react";
import { motion } from "framer-motion";
import logoAbout from "../assets/99239075-522e-4b6d-9069-7405be6ac774-removebg-preview.png"
import about from "../assets/Why-Digital-Marketing-is-Critical-to-Your-Organization-in-2017.avif";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left: Image Section */}
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
>
  <iframe
    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FFunctionITinstitute%2Fvideos%2F582739304076948%2F&show_text=false&width=476&t=0"
    width="100%"
    height="400"
    style={{ border: "none", overflow: "hidden" }}
    scrolling="no"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen={true}
  ></iframe>
</motion.div>


        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6">
            <h3 className="text-2xl text-pink-600 font-semibold mb-2">Why Choose</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              Function IT Institute
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Function IT Institute is a leading online freelancing training center that provides comprehensive courses to help individuals acquire the necessary skills and knowledge to succeed as freelancers. The institute offers hands-on training and practical experiences,
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            preparing students for the real-world challenges of freelancing. Whether you are looking to start a new career or enhance your existing skills, Function IT Institute has everything you need to succeed. With expert instructors, a cutting-edge curriculum, and a supportive environment, this institute is the ideal place to launch your freelancing career.
          </p>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            Learn More <FaArrowRightLong className="text-xl mt-[1px]" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
