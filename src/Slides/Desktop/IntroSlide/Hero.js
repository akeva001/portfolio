import React, { Component } from "react";
import NameAndTitle from "./NameAndTitle";
import About from "./About";

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <NameAndTitle />
        <About />
      </React.Fragment>
    );
  }
}

export default Hero;
