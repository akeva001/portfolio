import React, { Component } from "react";
import styled from "styled-components";
import TitleAnimation from "./TitleAnimation.js";
import Me from "../../../Assets/Images/Me/Me2.jpg";

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
  img {
    border-radius: 50%;
    height: 25%;
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <img src={Me} />
        <TitleAnimation />
      </Container>
    );
  }
}
export default NameAndTitle;
