import React, { Component, useState } from "react";
import NameAndTitle from "./NameAndTitle";
import About from "./About";
import logo from "../../../Assets/Images/Logo/logo.png";
import logoSVG from "../../../Assets/Images/Logo/logo.svg";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import styled, { keyframes } from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

const svgVariants = {
  //hidden: { rotate: -180 },
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
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(242, 242, 242);
  min-height: calc(100vh - 44px);
  //padding-bottom: 100px;
  flex-direction: column;
  margin-bottom: 60px;
  overflow: hidden;

  svg {
    
    //width: 100vw;
    overflow: visible;
    stroke: white;
    stroke-width: 8;
    stroke-linejoin: round;
    stroke-linecap: round;

  
`;
const Overlay = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: calc(100vh - 44px);
  width: 100%;
  background: #fff;
  opacity: 0;
  z-index: 0;
`;
const HeroBackground = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: calc(100vh - 44px);
  width: 100%;
  overflow: hidden;
  svg {
    height: 50vw !important;
    @media ${device.mobileS} {
      height: 150vw !important;
    }
    @media ${device.mobileM} {
      height: 150vw !important;
    }
    @media ${device.mobileL} {
      height: 150vw !important;
    }
    @media ${device.tablet} {
      height: 70vw !important;
    }
    @media ${device.laptop} {
    }
    @media ${device.laptopL} {
    }
    @media ${device.desktop} {
    }
  }
`;
const Gradient = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
  z-index: 1;
`;

const Hero = ({ motion, scrollYProgress, pathLength }) => {
  return (
    <>
      <HeroContainer id={"home"}>
        <HeroBackground>
          <Gradient></Gradient>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="500 800 1000 400"
            variants={svgVariants}
            //animate="visible"
            initial="hidden"
            whileInView="visible"
            //viewport={{ once: true }}
          >
            {/* <rect fill="lime" width="100%" height="100%" /> */}

            <motion.path
              fill="none"
              d="M891.64,763.34c3.96-3.48,6.47-8.57,6.47-14.26c0-10.49-8.5-18.99-18.99-18.99c-7.5,0-13.97,4.36-17.05,10.68
              h-71.66l-113.83,313.11h211.21c3.28,5.71,9.41,9.56,16.47,9.56c10.49,0,18.99-8.5,18.99-18.99c0-8.28-5.31-15.31-12.71-17.9
              L836.92,824.1l-49.75,136.81c-0.48-0.04-0.96-0.07-1.45-0.07c-10.49,0-18.99,8.5-18.99,18.99s8.5,18.99,18.99,18.99
              s18.99-8.5,18.99-18.99c0-5.15-2.06-9.81-5.38-13.23l37.6-102.97l59.48,163.55c-5.38,2.45-9.42,7.33-10.7,13.24H695.84
              L799.9,754.25h60.96c2.24,7.93,9.48,13.75,18.1,13.82l172.97,475.31h-46.37c-1.52-8.96-9.3-15.79-18.7-15.79
              c-1.19,0-2.35,0.12-3.47,0.33L941,1110.8H655.7l-53.05,146.05h91.33l19.61-54.03c10.07-0.47,18.1-8.76,18.1-18.94
              c0-10.49-8.5-18.99-18.99-18.99c-10.49,0-18.99,8.5-18.99,18.99c0,5.99,2.78,11.33,7.12,14.81l-16.35,44.7h-62.56l43.27-119.11
              h266.35l40.15,110.94c-2.38,3.17-3.81,7.1-3.81,11.37c0,10.49,8.5,18.99,18.99,18.99c6.7,0,12.58-3.48,15.96-8.72h68.36
              L891.64,763.34z"
              variants={pathVariants}
            />
            <motion.path
              fill="none"
              d="M1009.63,754.24h61.18v110.57c-6.99,2.8-11.94,9.63-11.94,17.62c0,10.49,8.5,18.99,18.99,18.99
              s18.99-8.5,18.99-18.99c0-8.23-5.24-15.21-12.56-17.85v-123.8h-88.12v231.51l13.46,37V754.24z"
              variants={pathVariants}
            />
            <motion.path
              fill="none"
              d="M1397.35,1256.84l-221.2-257.13c1.59-2.78,2.51-5.98,2.51-9.41c0-4.64-1.67-8.89-4.43-12.18l176.57-205.16
                  c9.93-0.62,17.79-8.85,17.79-18.93c0-10.49-8.5-18.99-18.99-18.99c-5.33,0-10.14,2.2-13.59,5.74h-69.89L1070.8,968.44v178.82
                  c-6.99,2.8-11.94,9.63-11.94,17.62c0,10.49,8.5,18.99,18.99,18.99s18.99-8.5,18.99-18.99c0-8.23-5.24-15.21-12.56-17.85V973.4
                  l187.83-219.15h58.52c0.06,5.61,2.55,10.62,6.47,14.05l-175,203.19c-0.8-0.1-1.6-0.17-2.43-0.17c-10.49,0-18.99,8.5-18.99,18.99
                  c0,10.49,8.5,18.99,18.99,18.99c2.11,0,4.13-0.36,6.02-0.99l202.33,235.08h-64.39c-2.92-6.74-9.62-11.46-17.43-11.46
                  c-2,0-3.92,0.31-5.72,0.88l-115.3-134.99c1.66-2.82,2.62-6.09,2.62-9.6c0-10.49-8.5-18.99-18.99-18.99
                  c-10.49,0-18.99,8.5-18.99,18.99s8.5,18.99,18.99,18.99c2.01,0,3.94-0.32,5.75-0.89l115.44,134.72c-1.76,2.88-2.79,6.25-2.79,9.87
                  c0,10.49,8.5,18.99,18.99,18.99c8.42,0,15.54-5.48,18.03-13.06H1397.35z"
              variants={pathVariants}
            />
          </motion.svg>
        </HeroBackground>
        <NameAndTitle />
      </HeroContainer>
    </>
  );
};

export default Hero;
