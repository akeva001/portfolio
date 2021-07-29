import React, { Component, useState } from "react";

import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import Hero from "../Slides/Desktop/IntroSlide/Hero.js";
import Experience from "../Slides/Desktop/ExperienceSlide/Experience.js";
import Contact from "../Slides/Desktop/ContactSlide/Contact.js";
import About from "../Slides/Desktop/IntroSlide/About.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
