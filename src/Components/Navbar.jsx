import React from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/99239075-522e-4b6d-9069-7405be6ac774-removebg-preview.png";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  const link = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/courses", label: "Courses" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
      ].map(({ to, label }, index) => (
        <li key={index}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold text-lg border-b-2 border-red-500 pb-1 transition duration-300"
                : "text-gray-700 text-lg font-medium hover:text-[#0ea5e9] hover:border-b-2 hover:border-[#0ea5e9] pb-1 transition duration-300"
            }
          >
            {label}
          </NavLink>
        </li>
      ))}

      {/* External Facebook Support Link */}
      <li>
        <a
          href="https://www.facebook.com/groups/functionitinstitute"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-lg font-medium hover:text-[#0ea5e9] hover:border-b-2 hover:border-[#0ea5e9] pb-1 transition duration-300"
        >
          Community
        </a>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* Left Side */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52 space-y-1"
            >
              {link}
            </ul>
          </div>
          <Link to="/">
            <img src={navLogo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 items-center">{link}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            <IoMdCall className="text-xl" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
