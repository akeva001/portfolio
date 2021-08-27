import React from "react";
import styled, { keyframes } from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";

export default function TitleAnimation() {
  return (
    <Animation>
      <secondSpanName>
        <h2>Alex Kevakian</h2>
      </secondSpanName>

      {/* <First>I am a </First> */}
      <Slide>
        <Second>Frontend Developer</Second>
      </Slide>
    </Animation>
  );
}

const secondSpanName = keyframes`
    0%{
        transform: translateY(-150%);
    }
    60%{
        transform: translateY(-150%);
    }
    100%{
        transform: translateY(0%);
    }
`;

const secondSpan = keyframes`
    0%{
        transform: translateY(150%);
    }
    60%{
        transform: translateY(150%);
    }
    100%{
        transform: translateY(0%);
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
const firstSpan = keyframes`
    0%{
        transform: translateX(50%);
    }
    60%{
        transform: translateX(50%);
    }
    100%{
        transform: translateX(0%);
    }
`;

const Animation = styled.div`
  text-align: center;
  text-transform: uppercase;
  display: inline-block;
  animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-fill-mode: forwards;
  opacity: 0;
  letter-spacing: 1px;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 100px;
  //font-family: "Rubik", sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 25px;
  }
  @media ${device.mobileL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
`;

const First = styled.span`
  display: inline-block;
  background: white;
  z-index: 1;
  position: relative;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-name: ${secondSpanName};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;
const Slide = styled.span`
  display: inline-flex;
  overflow: hidden;
  padding: 15px;
`;
const Second = styled.span`
  z-index: -1;
  display: inline-block;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-name: ${secondSpan};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;
