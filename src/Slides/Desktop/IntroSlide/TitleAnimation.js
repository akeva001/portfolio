import React from "react";
import styled, { keyframes } from "styled-components";

export default function TitleAnimation() {
  return (
    <Animation>
      <h2>Hello! My name is Alex Kevakian</h2>
      <First>I am a </First>
      <Slide>
        <Second>Frontend Developer</Second>
      </Slide>
    </Animation>
  );
}

const secondSpan = keyframes`
    0%{
        transform: translateX(-100%);
    }
    60%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(0%);
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
`;

const First = styled.span`
  display: inline-block;
  background: white;
  z-index: 1;
  position: relative;
  animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  animation-name: ${firstSpan};
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
