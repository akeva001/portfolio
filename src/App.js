import React, { Component } from "react";
import "./App.css";
import MediaQuery from "react-responsive";
import DesktopTitle from "./Slides/Desktop/IntroSlide/NameAndTitle.js";

function App() {
  return (
    <React.Fragment>
      <MediaQuery query="(min-device-width: 1224px)">
        <DesktopTitle />
      </MediaQuery>
    </React.Fragment>
  );
}

export default App;
