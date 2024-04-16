"use client";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <html lang="en"suppressHydrationWarning={true} >
      <body className="App" >
        
        <button
          className={`${
            showScrollBtn ? "opacity-100" : "opacity-0"
          } sticky top-[48rem] md:top-[43rem] float-right mr-4 bg-lightSecondary dark:bg-darkPrimary dark:border-darkSecondary z-50 rounded-full border border-lightPrimary contact-animation transition-opacity ease-in-out delay-150`}
          onClick={scrollTop}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="dark:text-darkSecondary w-8 h-8 md:w-12 md:h-12"
          >
            <path
              fill="currentColor"
              d="M17.657 8.962l-1.418 1.411-3.255-3.27-.013 13.605-2-.002.013-13.568-3.23 3.215-1.41-1.417 5.67-5.644 5.643 5.67z"
            />
          </svg>
        </button>

        {children}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "1px solid var(--cursor-color)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </body>
    </html>
  );
}
