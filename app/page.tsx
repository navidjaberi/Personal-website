"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import AnimatedCursor from "react-animated-cursor";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experiences from "@/components/sections/Experiences";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { ThemeProvider } from "next-themes";
import Particles from "@/components/particlesbg";
import { Suspense } from 'react'
import Loading from "./loading";
function App() {

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {

    });
    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
    });
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();
    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <Suspense fallback={<Loading/>}>
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
    <ThemeProvider attribute="class">
      <Header />
      <Particles />
      <div>
        <Element id="home" name="home" className="element">
          <Home />
        </Element>
        <Element id="about" name="about" className="element">
          <About />
        </Element>
        <Element id="experiences" name="experiences" className="element">
          <Experiences />
        </Element>
        <Element id="skills" name="skills" className="element">
          <Skills />
        </Element>
        <Element id="contact" name="contact" className="element">
          <Contact />
        </Element>
      </div>
    </ThemeProvider>
    </Suspense>
  );
}
export default App;
