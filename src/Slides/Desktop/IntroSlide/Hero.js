import React, { Component } from "react";
import NameAndTitle from "./NameAndTitle";
import About from "./About";
import styled from "styled-components";

const HeroContainer = styled.div`
  //background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  //padding-top: 100px;

`;
class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroContainer>
          <NameAndTitle />
        </HeroContainer>
        <HeroContainer>
          <About />
        </HeroContainer>
      </React.Fragment>
    );
  }
}

export default Hero;
