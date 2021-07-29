import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  min-height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  //overflow: hidden;
  //margin-top: 80px;
  //background: red;
  margin: 0;
`;

const AboutMeDescription = styled.div`
  align-items: center;
  font-family: "AvenirLight";
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  font-size: 45px;
`;

class About extends Component {
  render() {
    return (
      <Container id={"about"}>
        <AboutMeDescription>About Me</AboutMeDescription>
      </Container>
    );
  }
}

export default About;
