import React, { Component } from "react";
import "./App.css";
import MediaQuery from "react-responsive";
import DesktopTitle from "./Slides/Desktop/IntroSlide/Hero.js";
import DesktopExperience from "./Slides/Desktop/ExperienceSlide/Experience.js";
import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import DesktopContact from "./Slides/Desktop/ContactSlide/Contact.js";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <MediaQuery query="(min-device-width: 1224px)"> */}
        <Navbar />
        <DesktopTitle />
        <DesktopExperience />
        <DesktopContact />
        {/* </MediaQuery> */}
      </React.Fragment>
    </Router>
  );
}

export default App;
