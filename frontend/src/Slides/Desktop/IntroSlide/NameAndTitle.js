import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import TitleAnimation from "./TitleAnimation.js";
import Me from "../../../Assets/Images/Me/Me2.jpg";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 36px;
  margin-top: 100px;
`;
const svgVariants = {
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};
const Img = styled.img`
  box-sizing: border-box;
  border-radius: 50%;
  border-color: black;
  border-width: 3px;
  //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
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
  animation-name: ${fadeIn};
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 3s;
  img {
    @media ${device.mobileS} {
      height: 180px;
    }
    @media ${device.mobileM} {
      height: 180px;
    }
    @media ${device.mobileL} {
      height: 180px;
    }
    @media ${device.tablet} {
      height: 250px;
    }
    @media ${device.laptop} {
      height: 250px;
    }
    @media ${device.laptopM} {
      height: 250px;
    }
    @media ${device.laptopL} {
      height: 250px;
    }
    @media ${device.desktop} {
      height: 260px;
    }
  }
`;

class NameAndTitle extends Component {
  render() {
    return (
      <Container>
        <Animation>
          <Img src={Me} />
        </Animation>
        <TitleAnimation />
      </Container>
    );
  }
}
export default NameAndTitle;
