"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Link } from "react-scroll";
import { useAnimate, stagger, motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const { theme, setTheme } = useTheme();
  const [scope, animate] = useAnimate();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [headerStickTop, setHeaderStickTop] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [y, setY] = useState<number>(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const switchLanguage = (locale: string) => {
    startTransition(() => {
      router.push(`/${locale}${pathname}`);
    });
  };
  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    if (window.scrollY > 800) {
      setHeaderStickTop(true);
    } else {
      setHeaderStickTop(false);
    }
    setY(window.scrollY);
  }, []);
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
  const handleSetActive = (to: string) => {
    setActiveSection(to);
    window.history.replaceState(null, "", `${to}`);
  };

  useEffect(() => {
    animate(
      "li",
      menuActive
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: menuActive ? staggerMenuItems : 0,
      }
    );
  }, [menuActive]);

  return (
    <>
      <motion.nav
        className="menu"
        ref={scope}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <div className="md:hidden flex items-center h-32">
          <motion.button
            whileTap={{ scale: 1.1 }}
            className={`${
              menuActive ? "bg-lightSecondary" : "bg-[#DDD0C8] "
            } dark:bg-transparent  p-1  rounded-lg mx-1`}
            onClick={toggleMenu}
          >
            <Bars3Icon className="h-6 w-6 " />
          </motion.button>
          <button
            onClick={darkModeToggle}
            className=" transition-all duration-100 bg-[#DDD0C8] dark:bg-transparent"
          >
            {theme !== "dark" && <MoonIcon className="h-6 w-6 text-primary" />}
            {theme === "dark" && <SunIcon className="h-6 w-6 " />}
          </button>
        </div>
        <motion.ul
          className={`${
            menuActive ? "block" : "hidden"
          } divide-y-[0.4px] md:hidden  transition duration-300 bg-lightSecondary dark:bg-darkPrimary -mt-9 mb-12 mx-3 border-[0.4px]`}
        >
          <motion.li>
            <Link
              className="block p-4 text-xs font-semibold text-gray-400 focus:bg-white hover:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary rounded"
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </motion.li>
          <motion.li>
            <Link
              className="block p-4 text-xs font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
            >
              About
            </Link>
          </motion.li>
          <motion.li>
            <Link
              className="block p-4 text-xs font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              to="experiences"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
            >
              Experiences
            </Link>
          </motion.li>
          <motion.li>
            <Link
              className="block p-4 text-xs font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              to="skills"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
            >
              Skills
            </Link>
          </motion.li>
          <motion.li>
            <Link
              className="block p-4 text-xs font-semibold text-gray-400 focus:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary hover:bg-white hover:bg-blue-50 hover:text-blue-600 rounded"
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              offset={50}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
      <motion.nav
        className={`${
          headerStickTop ? "translate-y-0" : "translate-y-10 "
        }, hidden md:block transition-transform duration-300 rounded-3xl  dark:bg-darkPrimary bg-lightPrimary p-3  lg:w-7/12 md:w-8/12  fixed right-2/4 translate-x-1/2 z-50 uppercase`}
        animate={{
          opacity: [0, 1],
          width: [0, 700],
          borderRadius: headerStickTop ? "0 0 20px 20px" : "40px",
        }}
        transition={{
          width: {
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          },
          opacity: {
            duration: 3,
          },
          borderRadius: {
            duration: 0.1,
          },
        }}
      >
        <motion.div
          className="items-center text-center justify-center  md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 3, ease: "easeIn" }}
        >
          <div className="flex items-center ml-3">
            <button
              onClick={darkModeToggle}
              className=" transition-all duration-100 "
            >
              {theme !== "dark" && <MoonIcon className="h-6 w-6 text-white" />}
              {theme === "dark" && <SunIcon className="h-6 w-6 " />}
            </button>
          </div>
          <div className="w-full  flex justify-center  items-center ">
            <div className="text-xs  flex justify-center  items-center gap-11">
              <Link
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                offset={50}
                onSetActive={handleSetActive}
                to="home"
                className={`${
                  activeSection === "home"
                    ? "text-white scale-110 "
                    : "text-lightSecondary dark:text-darkSecondary scale-1 "
                } block  lg:inline-block lg:mt-0  relative group`}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full "></span>
              </Link>
              <Link
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                offset={50}
                onSetActive={handleSetActive}
                to="about"
                className={`${
                  activeSection === "about"
                    ? "text-white scale-110 "
                    : "text-lightSecondary dark:text-darkSecondary scale-1 "
                } block  lg:inline-block lg:mt-0  relative group`}
              >
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
                About
              </Link>
              <Link
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                offset={50}
                onSetActive={handleSetActive}
                to="experiences"
                className={`${
                  activeSection === "experiences"
                    ? "text-white scale-110 "
                    : "text-lightSecondary dark:text-darkSecondary scale-1 "
                } block  lg:inline-block lg:mt-0  relative group`}
              >
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
                Experiences
              </Link>
              <Link
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                offset={50}
                onSetActive={handleSetActive}
                to="skills"
                className={`${
                  activeSection === "skills"
                    ? "text-white scale-110 "
                    : "text-lightSecondary dark:text-darkSecondary scale-1 "
                } block  lg:inline-block lg:mt-0  relative group`}
              >
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
                Skills
              </Link>
              <Link
                smooth={true}
                duration={500}
                activeClass="active"
                spy={true}
                onSetActive={handleSetActive}
                to="contact"
                className={`${
                  activeSection === "contact"
                    ? "text-white scale-110 "
                    : "text-lightSecondary dark:text-darkSecondary scale-1 "
                } block  lg:inline-block lg:mt-0  relative group`}
              >
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full"></span>
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};
export default Header;
