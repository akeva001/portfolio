import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import TitleAnimation from "./TitleAnimation.js";
import Me from "../../../Assets/Images/Me/Me2.jpg";

const Container = styled.div`
  display: flex;
  //position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 36px;
  //background: red;
  //overflow: hidden;
  //position: absolute;
  //left: 50%;
  //top: 50%;
  //transform: translate(-50%, -50%);
  margin-top: 80px;
`;
const Img = styled.img`
  border-radius: 50%;
  max-height: 250px;
  //max-width: 250px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  //box-sizing: border-box;
  //flex-shrink: 0;
  //float: right;
  //height: auto;
`;
const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: scale(1);
    }
    60%{
        opacity: 1;
        transform: scale(1);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;
const Animation = styled.div`
  //text-align: center;
  //text-transform: uppercase;
  //display: inline-block;
  animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-fill-mode: forwards;
  opacity: 0;
  //letter-spacing: 1px;
  //z-index: 1;
  //padding-top: 100px;
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <Animation>
          <Img style={{ minHeight: "350px" }} src={Me} />
        </Animation>
        <TitleAnimation />
      </Container>
    );
  }
}
export default NameAndTitle;
