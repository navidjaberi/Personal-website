"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Element } from "react-scroll";
import { useTheme } from "next-themes";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experiences from "@/pages/Experiences";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import { ThemeProvider } from "next-themes";
import Particles from "@/components/particlesbg";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : (theme as string);
    setTheme(currentTheme!);
  });
  useEffect(() => {
    const handleScroll = () => {
      const sections: Record<string, HTMLElement | null> = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        experiences: document.getElementById("experiences"),
        skills: document.getElementById("skills"),
        contact: document.getElementById("contact"),
      };
      const currentSection = Object.keys(sections).find(
        (section) => sections[section]!.getBoundingClientRect().bottom >= 10
      );

      if (currentSection) {
        window.history.replaceState(null, "", `#${currentSection}`);
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  return (
    <ThemeProvider attribute="class">
      
      <Header activeLink={activeSection} />
      <Particles />
      <div>
      <Element id="home" name="home">
        <Home />
      </Element>
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="experiences" name="experiences">
        <Experiences />
      </Element>
      <Element id="skills" name="skills">
        <Skills />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      </div>
    </ThemeProvider>
  );
}
export default App;
