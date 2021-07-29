import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  min-height: calc(100vh - 80px);
  justify-content: center;
  width: 100%;
  //position: relative;
  //overflow: hidden;
  //margin-top: 80px;
  //background: red;
  margin: 0;
`;

const AboutMeDescription = styled.div`
  display: grid;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  font-family: "AvenirLight";
  //text-align: left;
  //margin-left: 30%;
  //margin-right: 5%;
  font-size: 45px;
  //max-width: 1000px;
  box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.2);
`;

class About extends Component {
  render() {
    return (
      <Container id={"about"}>
        <AboutMeDescription>About Me</AboutMeDescription>
        <AboutMeDescription>About Me</AboutMeDescription>
      </Container>
    );
  }
}

export default About;
