"use client";
import { useTheme } from "next-themes";
import React, { useRef, useState } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { Link } from "react-scroll";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "../i18n/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
const Header: React.FC = () => {
  const languages = [
    {
      code: "en",
      name: "English",
      flag: "/flags/us.svg",
    },
    {
      code: "fa",
      name: "فارسی",
      flag: "/flags/ir.svg",
    },
    {
      code: "tr",
      name: "Türkçe",
      flag: "/flags/tr.svg",
    },
  ];
  const navItems = ["home", "about", "experiences", "skills", "contact"];
  const [open, setOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement | null>(null);
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState<string>("home");
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const { theme, setTheme } = useTheme();
  const [scope, animate] = useAnimate();
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [headerStickTop, setHeaderStickTop] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("nav");
  const currentLanguage =
    languages.find((l) => l.code === locale) ?? languages[0];
  const switchLanguage = (locale: string) => {
    startTransition(() => {
      router.replace(pathname, {
        locale,
      });
    });
  };
  useEffect(() => {
    const onScroll = () => {
      setHeaderStickTop(window.scrollY > 800);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const darkModeToggle = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  const toggleMenu = () => {
    setMenuActive((prv) => !prv);
  };
  const handleSetActive = (id: string) => {
    setActiveSection(id);

    window.history.replaceState({}, "", `#${id}`);

    setMenuActive(false);
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const insideMobile = mobileDropdownRef.current?.contains(
        event.target as Node
      );

      const insideDesktop = desktopDropdownRef.current?.contains(
        event.target as Node
      );

      if (!insideMobile && !insideDesktop) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const element = document.getElementById(hash);

    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="menu" ref={scope}>
        <div className="md:hidden flex items-center justify-between h-16 w-full px-5">
          <div>
            <motion.button
              whileTap={{ scale: 1.1 }}
              className={`${
                menuActive ? "bg-lightSecondary" : "bg-[#DDD0C8] "
              } dark:bg-transparent  p-1  rounded-lg mx-1`}
              onClick={toggleMenu}
            >
              <Bars3Icon className="h-6 w-6 " />
            </motion.button>
          </div>
          <div className="flex items-center">
            <button onClick={darkModeToggle}>
              {mounted &&
                (theme === "dark" ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6 " />
                ))}
            </button>
            <div className="flex items-center ml-3">
              <div className="relative z-50" ref={mobileDropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center rounded-full  hover:bg-white/10 transition"
                >
                  <img
                    src={currentLanguage.flag}
                    alt={currentLanguage.name}
                    className="w-5 h-5 rounded-full"
                  />
                </button>

                {open && (
                  <div
                    className={`absolute right-0 mt-2 w-44 rounded-xl border   z-[9999]

                bg-lightSecondary  dark:bg-darkPrimary
                shadow-2xl
                transition-all duration-200 origin-top-right
                ${
                  open
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          switchLanguage(language.code);
                          setOpen(false);
                        }}
                        className={`
                      flex w-full items-center gap-3 px-4 py-3 transition
                      
                      ${
                        currentLanguage.code === language.code
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      }
                      `}
                      >
                        <img
                          src={language.flag}
                          alt={language.name}
                          className="w-6 h-6 rounded-full"
                        />

                        <span className="text-darkPrimary dark:text-white">
                          {language.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <motion.ul
          className={`${
            menuActive ? "block" : "hidden"
          } divide-y-[0.4px] md:hidden  transition duration-300 bg-lightSecondary dark:bg-darkPrimary mb-12 mx-3 border-[0.4px]`}
        >
          <motion.li>
            {navItems.map((item) => (
              <Link
                className="block p-4 text-xs font-semibold text-gray-400 focus:bg-white hover:bg-white dark:focus:bg-darkSecondary dark:hover:bg-darkSecondary rounded"
                to={item}
                key={item}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={handleSetActive}
              >
                {t(item)}
              </Link>
            ))}
          </motion.li>
        </motion.ul>
      </div>
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
            <button onClick={darkModeToggle}>
              {mounted &&
                (theme === "dark" ? (
                  <SunIcon className="h-6 w-6 " />
                ) : (
                  <MoonIcon className="h-6 w-6 text-white" />
                ))}
            </button>
          </div>
          <div className="w-full  flex justify-center  items-center ">
            <div className="text-xs  flex justify-center  items-center gap-11">
              {navItems.map((item) => (
                <React.Fragment key={item}>
                  <Link
                    className={`${
                      activeSection === item
                        ? "text-white scale-110 "
                        : "text-lightSecondary dark:text-darkSecondary scale-1 "
                    } block  lg:inline-block lg:mt-0  relative group`}
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onSetActive={handleSetActive}
                    spy
                  >
                    {t(item)}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lightSecondary dark:bg-darkSecondary transition-width duration-300 group-hover:w-full "></span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center ml-3">
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center rounded-full  hover:bg-white/10 transition"
              >
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="w-7 h-6 rounded-full"
                />
              </button>

              {open && (
                <div
                  className={`absolute right-0 mt-2 w-44 rounded-xl border
                bg-lightPrimary dark:bg-darkPrimary
                shadow-2xl
                transition-all duration-200 origin-top-right
                ${
                  open
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        switchLanguage(language.code);
                        setOpen(false);
                      }}
                      className={`
                      flex w-full items-center gap-3 px-4 py-3 transition
                      
                      ${
                        currentLanguage.code === language.code
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      }
                      `}
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-6 h-6 rounded-full"
                      />

                      <span className="text-white">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};
export default Header;
