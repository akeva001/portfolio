import React, { Component, useState } from "react";

import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import Hero from "../Slides/Desktop/IntroSlide/Hero.js";
import Experience from "../Slides/Desktop/ExperienceSlide/Experience.js";
import Projects from "../Slides/Desktop/ExperienceSlide/ProjectsSlider.js";
import Contact from "../Slides/Desktop/ContactSlide/Contact.js";
import About from "../Slides/Desktop/IntroSlide/About.js";
import SliderData from "../Slides/Desktop/ExperienceSlide/SliderData.js";

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
      <Projects slides={SliderData} />
      <Contact />
    </>
  );
};

export default Home;
