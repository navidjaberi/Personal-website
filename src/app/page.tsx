"use client";
import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from "next-themes";
import Loading from "@/src/app/loading";
const Header = dynamic(() => import("@/src/components/Header"), {
  ssr: false,
  loading: () => <Loading />
});
const Home = dynamic(() => import("@/src/components/sections/Home"), {
  ssr: false,
});
const About = dynamic(() => import("@/src/components/sections/About"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/src/components/sections/Skills"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/src/components/sections/Contact"), {
  ssr: false,
});
const Experiences = dynamic(
  () => import("@/src/components/sections/Experiences"),
  {
    ssr: false,
  }
);
const Particles = dynamic(() => import("@/src/components/particlesbg"), {
  ssr: false,
});
function App() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {});
    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {});
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();
    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <div>
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
    </div>
  );
}
export default App;
