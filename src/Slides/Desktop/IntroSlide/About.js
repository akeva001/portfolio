import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 40vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const AboutMeDescription = styled.div`
  align-items: center;
  font-family: "AvenirLight";
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
`;

class About extends Component {
  render() {
    return (
      <Container>
        <AboutMeDescription>Front-end developer</AboutMeDescription>
      </Container>
    );
  }
}

export default About;
