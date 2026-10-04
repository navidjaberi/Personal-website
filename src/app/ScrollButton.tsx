"use client";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";

export default function ScrollButton() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`${
        showScrollBtn ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed bottom-6 end-4 md:bottom-10 md:end-10 p-2 bg-lightSecondary text-lightPrimary dark:text-white dark:bg-darkPrimary dark:border-darkSecondary z-50 rounded-full border border-lightPrimary contact-animation transition-opacity ease-in-out delay-150`}
      onClick={scrollTop}
      aria-label="Scroll to top"
      tabIndex={showScrollBtn ? 0 : -1}
    >
      <ArrowLongUpIcon className="h-6 w-6 md:h-10 md:w-10" />
    </button>
  );
}