import React, { Component, useState, useRef } from "react";

import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import Hero from "../Slides/Desktop/IntroSlide/Hero.js";
import Experience from "../Slides/Desktop/ExperienceSlide/Experience.js";
import Projects from "../Slides/Desktop/ExperienceSlide/ProjectsSlider.js";
import Contact from "../Slides/Desktop/ContactSlide/Contact.js";
import About from "../Slides/Desktop/IntroSlide/About.js";
import SliderData from "../Slides/Desktop/ExperienceSlide/SliderData.js";
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { scrollYProgress } = useScroll({
    offset: ["start 0", "end 0.9"],
  });

  const { scrollYProgressContact } = useScroll({
    offset: ["start start", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    pathLength: scrollYProgress,
    stiffness: 40,
    damping: 30,
    restDelta: 0.001,
  });
  const pathLengthContact = useSpring(scrollYProgressContact, {
    pathLength: scrollYProgressContact,
    stiffness: 40,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero motion={motion} />
      <About />
      <Experience
        motion={motion}
        //scrollYProgress={scrollYProgress}
        pathLength={pathLength}
      />
      <Projects slides={SliderData} />
      <Contact
        motion={motion}
        //scrollYProgress={scrollYProgress}
        pathLength={pathLength}
      />
    </>
  );
};

export default Home;
