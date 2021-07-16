import React from "react";
import styled, { keyframes } from "styled-components";

export default function TitleAnimation() {
  const reactArray = "Frontend Developer".split("");
  return <Wrapper>Frontend Developer</Wrapper>;
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
    100% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
    
`;

const Wrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 8s;
  animation-fill-mode: forwards;
`;
