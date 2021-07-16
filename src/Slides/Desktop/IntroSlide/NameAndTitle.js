import React, { Component } from "react";
import styled from "styled-components";
import TitleAnimation from "./TitleAnimation.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: gray;
  text-color: white;
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <h2>Hello, I'm Alex Kevakian</h2>
        <p>
          I am a <TitleAnimation />
        </p>
      </Container>
    );
  }
}
export default NameAndTitle;
