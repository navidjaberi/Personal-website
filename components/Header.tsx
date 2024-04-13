"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
const Header: React.FC<{ activeLink: string }> = ({ activeLink }) => {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [headerStickTop, setHeaderStickTop] = useState<boolean>(false);
  const [y, setY] = useState<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const handleNavigation = useCallback(
    (e:any) => {
      const window = e.currentTarget;
      if (window.scrollY > 800) {
        setHeaderStickTop(true);
      } else {
        setHeaderStickTop(false);
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const darkModeToggle = () => {
    setDarkMode((prv) => !prv);
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  const toggleMenu = () => {
    setMenuActive((prv) => !prv);
  };
  const variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };
  const item = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div>
      <div className="md:hidden flex items-center mt-10">
        <motion.button
          whileTap={{ scale: 1.1 }}
          className={`${
            menuActive ? "bg-lightSecondary" : "bg-[#DDD0C8] "
          } dark:bg-transparent  p-1  rounded-lg mx-1`}
          onClick={toggleMenu}
        >
          <svg
            className="block h-5 w-5"
            fill={darkMode ? "white" : "lightPrimary"}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </motion.button>
        <button
          onClick={darkModeToggle}
          className=" transition-all duration-100 bg-[#DDD0C8] dark:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={darkMode ? "none" : "lightSecondary"}
            viewBox="0 0 16 16"
            stroke={darkMode ? "white" : "none"}
            strokeWidth="0.3"
            className="w-5 h-5"
          >
            <path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />{" "}
          </svg>
        </button>
      </div>
      <motion.div
        animate={menuActive ? "open" : "closed"}
        className={`${
          menuActive ? "block" : "hidden"
        } md:hidden  transition duration-300 bg-lightSecondary dark:bg-darkPrimary mt-1 rounded mx-1 border-[0.4px]`}
      >
        <motion.ul className="divide-y-[0.4px]" variants={variants}>
          <motion.li variants={item}>
            <a
              className="block p-4 text-sm font-semibold text-gray-400 focus:bg-white hover:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary rounded"
              href="#home"
            >
              Home
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a
              className="block p-4 text-sm font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#about"
            >
              About
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a
              className="block p-4 text-sm font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#experiences"
            >
              Experiences
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a
              className="block p-4 text-sm font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#skills"
            >
              Skills
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a
              className="block p-4 text-sm font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              href="#contact"
            >
              Contact
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.nav
        className={`${
          headerStickTop ? "translate-y-0" : "translate-y-10"
        } hidden md:flex transition-transform duration-300 items-center text-center justify-center rounded-3xl  dark:bg-darkPrimary bg-lightPrimary p-3  lg:w-7/12 md:w-8/12  fixed right-2/4 translate-x-1/2 z-50 uppercase`}
        animate={{
          width: [0, 1000],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        <div className="flex items-center ml-3">
          <button
            onClick={darkModeToggle}
            className=" transition-all duration-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={darkMode ? "none" : "white"}
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth="0.3"
              className="w-6 h-6"
            >
              <path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />{" "}
            </svg>
          </button>
        </div>
        <div className="w-full  flex justify-center  items-center ">
          <div className="text-sm  flex justify-center  items-center gap-11">
            <Link
              href="#home"
              className={`${
                activeLink === "home"
                  ? "text-white scale-110 "
                  : "text-lightSecondary dark:text-darkSecondary scale-1 "
              } block  lg:inline-block lg:mt-0  relative group`}
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full "></span>
            </Link>
            <Link
              href="#about"
              className={`${
                activeLink === "about"
                  ? "text-white scale-110 "
                  : "text-lightSecondary dark:text-darkSecondary scale-1 "
              } block  lg:inline-block lg:mt-0  relative group`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
              About
            </Link>
            <Link
              href="#experiences"
              className={`${
                activeLink === "experiences"
                  ? "text-white scale-110 "
                  : "text-lightSecondary dark:text-darkSecondary scale-1 "
              } block  lg:inline-block lg:mt-0  relative group`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
              Experiences
            </Link>
            <Link
              href="#skills"
              className={`${
                activeLink === "skills"
                  ? "text-white scale-110 "
                  : "text-lightSecondary dark:text-darkSecondary scale-1 "
              } block  lg:inline-block lg:mt-0  relative group`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
              Skills
            </Link>
            <Link
              href="#contact"
              className={`${
                activeLink === "contact"
                  ? "text-white scale-110 "
                  : "text-lightSecondary dark:text-darkSecondary scale-1 "
              } block  lg:inline-block lg:mt-0  relative group`}
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>
      <nav></nav>
    </div>
  );
};
export default Header;
