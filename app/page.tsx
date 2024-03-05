"use client";
import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Element } from "react-scroll";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Experiences from "../components/sections/Experiences";
import Skills from "@/components/sections/Skills";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        experiences: document.getElementById("experiences"),
        skills: document.getElementById("skills"),
      };

      const currentSection = Object.keys(sections).find(
        (section) => sections[section].getBoundingClientRect().bottom >= 10 
      );

      if (currentSection && window.location.hash !== `#${currentSection}`) {
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
    <Fragment>
      <Header activeLink={activeSection} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/#home" />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
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
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
