import React, { Component } from "react";
import styled from "styled-components";
import TitleAnimation from "./TitleAnimation.js";
import Me from "../../../Assets/Images/Me/Me2.jpg";

const Container = styled.div`
  display: flex;
  //position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  //width: 100%;
  font-size: 36px;
  background: red;
  //overflow: hidden;
`;
const Img = styled.img`
  border-radius: 50%;
  max-height: 250px;
  max-width: 250px;
  //background-color: red;
  //overflow: hidden;
  box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  //flex-shrink: 0;
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <Img style={{ minHeight: "350px" }} src={Me} />

        <TitleAnimation />
      </Container>
    );
  }
}
export default NameAndTitle;
