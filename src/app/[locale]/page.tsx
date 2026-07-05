"use client";
import Home from "@/src/components/sections/Home";
import About from "@/src/components/sections/About";
import Experiences from "@/src/components/sections/Experiences";
import Skills from "@/src/components/sections/Skills";
import Contact from "@/src/components/sections/Contact";
import Header from "@/src/components/Header";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AnimatedCursor from "react-animated-cursor";
import Loading from "@/src/components/SplashScreen";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
// -------------------- DYNAMIC IMPORTS --------------------
const Particles = dynamic(() => import("@/src/components/particlesbg"), {
  ssr: false,
});
// -------------------- MAIN APP --------------------
function App() {
  const sections = ["home", "about", "experiences", "skills", "contact"];
  const [heroReady, setHeroReady] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  const appReady = heroReady && particlesReady;

  // -------------------- SCROLL PROGRESS BAR --------------------
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / height) * 100;

      const bar = document.getElementById("scroll-progress");

      if (bar) {
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <AnimatePresence>
        {!appReady && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-lightSecondary dark:bg-darkPrimary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-700 ${
          appReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ---------------- CURSOR ---------------- */}
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            showSystemCursor={false}
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
        </div>

        {/* ---------------- PROGRESS BAR ---------------- */}
        <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-transparent">
          <div
            id="scroll-progress"
            className="h-full bg-blue-500 w-0 transition-[width] duration-100"
          />
        </div>

        {/* ---------------- APP ---------------- */}
          <Header />

          <Particles onReady={() => setParticlesReady(true)} />

          <section id="home">
            <Home onHeroLoaded={() => setHeroReady(true)} />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="experiences">
            <Experiences />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
      </div>
    </>
  );
}

export default App;
