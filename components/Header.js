"use client";
const { Fragment, useState, useRef } = require("react");
import Link from "next/link";

const Header = ({ activeLink }) => {
  const [darkMode, setDarkMode] = useState(null);
  const darkModeToggle = () => {
    setDarkMode((prv) => !prv);
  };

  return (
    <nav
      className={
        "flex items-center text-center content-center rounded-3xl flex-wrap bg-[#181828] p-6 w-2/4 mt-10 h-1 fixed right-2/4 translate-x-1/2 z-50 uppercase"
      }
    >
      <div>
        <button onClick={darkModeToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={darkMode ? "white" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="#home"
            className={`${
              activeLink === "home"
                ? "text-white scale-110"
                : "text-blue-300 scale-1"
            } block mt-4 lg:inline-block lg:mt-0 mr-10 relative group`}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-width duration-300 group-hover:w-full "></span>
          </Link>
          <Link
            href="#about"
            className={`${
              activeLink === "about"
                ? "text-white scale-110"
                : "text-blue-300 scale-1"
            } block mt-4 lg:inline-block lg:mt-0 mr-10 relative group`}
          >
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-width duration-300 group-hover:w-full"></span>
            About
          </Link>
          <Link
            href="#experiences"
            className={`${
              activeLink === "experiences"
                ? "text-white scale-110"
                : "text-blue-300 scale-1"
            } block mt-4 lg:inline-block lg:mt-0 mr-10 relative group`}
          >
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-width duration-300 group-hover:w-full"></span>
            Experiences
          </Link>
          <Link
            href="#skills"
            className={`${
              activeLink === "skills"
                ? "text-white scale-110"
                : "text-blue-300 scale-1"
            } block mt-4 lg:inline-block lg:mt-0 mr-10 relative group`}
          >
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-width duration-300 group-hover:w-full"></span>
            Skills
          </Link>
          <Link
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-300 relative group"
          >
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-width duration-300 group-hover:w-full"></span>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
