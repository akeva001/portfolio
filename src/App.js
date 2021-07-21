import React, { Component } from "react";
import "./App.css";
import MediaQuery from "react-responsive";
import DesktopTitle from "./Slides/Desktop/IntroSlide/Hero.js";
import DesktopExperience from "./Slides/Desktop/ExperienceSlide/Experience.js";
import Navbar from "./NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <Navbar />
          <DesktopTitle />
          <DesktopExperience />
        </MediaQuery>
      </React.Fragment>
    </Router>
  );
}

export default App;
