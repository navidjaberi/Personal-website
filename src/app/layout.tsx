"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollTop = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);
  return (
    <html lang="en">
      <body className="App">
        <div>
          <button
            className={`${
              showScrollBtn ? "opacity-100" : "opacity-0"
            } sticky top-[40rem] md:top-[43rem] float-right mr-10 bg-lightSecondary dark:bg-darkPrimary dark:border-darkSecondary z-50 rounded-full border border-lightPrimary contact-animation transition-opacity ease-in-out delay-150`}
            onClick={scrollTop}
          >
            <ArrowLongUpIcon className="h-6 w-6 md:h-10 md:w-10" />
          </button>
        </div>

        {children}
      </body>
    </html>
  );
}
