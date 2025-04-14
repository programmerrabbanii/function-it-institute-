import React from "react";
import ebg from "../assets/99239075-522e-4b6d-9069-7405be6ac774-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={ebg} alt="Logo" className="w-28 mb-4" />
          <p className="text-sm text-gray-400">
            Freelance services for your business. Connect with professionals,
            get your job done.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Selling on Fiverr</a>
            </li>
            <li>
              <a href="#">Buying on Fiverr</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://www.youtube.com/watch?v=GE5fB5C-Ick&ab_channel=FunctionIT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/FunctionITinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/functionitinstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Function IT Institute. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
