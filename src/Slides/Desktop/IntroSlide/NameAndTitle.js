import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <h2>Hello, I'm Alex Kevakian</h2>
        <p>I am a Frontend Developer</p>
      </Container>
    );
  }
}
export default NameAndTitle;
