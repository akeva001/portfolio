import React, { Component } from "react";
import "./App.css";
import MediaQuery from "react-responsive";
import DesktopExperience from "./Slides/Desktop/ExperienceSlide/Experience.js";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import DesktopContact from "./Slides/Desktop/ContactSlide/Contact.js";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* <MediaQuery query="(min-device-width: 1224px)"> */}
        <Home />
        {/* </MediaQuery> */}
      </React.Fragment>
    </Router>
  );
}

export default App;
