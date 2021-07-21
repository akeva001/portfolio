import React, { Component } from "react";
import styled from "styled-components";
import TitleAnimation from "./TitleAnimation.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  //max-width: 1280px;
  font-size: 36px;

  h2 {
    font-size: 36px;
    font-weight: 100;
    color: black;
  }
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <TitleAnimation />
      </Container>
    );
  }
}
export default NameAndTitle;
