import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import TitleAnimation from "./TitleAnimation.js";
import Me from "../../../Assets/Images/Me/Me2.jpg";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const Container = styled.div`
  display: flex;
  //position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 36px;
  margin-top: 80px;
`;
const Img = styled.img`
  border-radius: 50%;

  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  @media ${device.mobileS} {
    height: 40px;
  }
  @media ${device.mobileM} {
    height: 3px;
  }
  @media ${device.mobileL} {
    max-height: 30px;
  }
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
          <Img style={{ minHeight: "250px" }} src={Me} />
        </Animation>
        <TitleAnimation />
      </Container>
    );
  }
}
export default NameAndTitle;
