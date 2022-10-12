import React, { Component } from "react";
import styled from "styled-components";
import GithubImg from "../../../Assets/Images/Sites/Git.png";
import LinkedinImg from "../../../Assets/Images/Sites/linkedin-logo.png";
import EmailImg from "../../../Assets/Images/Sites/email.png";
import ResumeImg from "../../../Assets/Images/Sites/resume.png";
import EmailForm from "../../../EmailForm";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import { motion } from "framer-motion";

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

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(0turn, rgb(242, 242, 242), 90%, white);
  //align-self: center;
  min-height: 100vh;
  overflow: hidden !important;
`;
const Image = styled.img`
  @media ${device.mobileS} {
    height: 40px;
  }
  @media ${device.mobileM} {
    height: 50px;
  }
  @media ${device.mobileL} {
    height: 50px;
  }
  @media ${device.tablet} {
    height: 70px;
  }
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const Background = styled.div`
  display: flex !important;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  transform: scaleX(-1);
  //transform: rotate(180deg);
  height: calc(100vh) !important;

  svg {
    display: block;
    overflow: visible;
    stroke: white;
    stroke-width: 8;
    stroke-linejoin: round;
    stroke-linecap: round;
    min-height: 100vh !important;

    @media ${device.mobileS} {
      height: 180vw !important;
    }
    @media ${device.mobileM} {
      height: 180vw !important;
    }
    @media ${device.mobileL} {
      height: 180vw !important;
    }
    @media ${device.tablet} {
      height: 100vw !important;
    }
    @media ${device.laptop} {
    }
    @media ${device.laptopL} {
      height: 80vw !important;
    }
    @media ${device.desktop} {
      height: 80vw !important;
    }
  }
`;
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  grid-gap: 25px;
  align-items: center;
  align-self: center;
  font-family: "AvenirLight";
  text-align: center;
  max-width: 700px;
  padding-top: 20px;
  padding-bottom: 10px;
  z-index: 10;
`;
// const Gradient = styled.div`
//   position: absolute;
//   //display: flex;
//   // bottom: 0;
//   // left: 0;
//   width: 100%;
//   height: 400px;
//   background-image: linear-gradient(to bottom, transparent, white);
//   z-index: 100;
//   background: green;
// `;
const Contact = ({ motion, scrollYProgress, pathLength }) => {
  return (
    <Container id={"contact"}>
      {/* <Gradient></Gradient> */}
      <EmailForm />
      <ContactWrapper>
        <a
          style={{ display: "table-cell" }}
          href={"https://github.com/akeva001"}
          target="_blank"
        >
          <Image src={GithubImg} height={"100px"} />
        </a>
        <a
          style={{ display: "table-cell" }}
          href={"https://www.linkedin.com/in/alexkevakian/"}
          target="_blank"
        >
          <Image src={LinkedinImg} height={"100px"} />
        </a>
        <a
          style={{ display: "table-cell" }}
          href={"mailto:" + "alexkevakian@gmail.com"}
          target="_blank"
        >
          <Image src={EmailImg} height={"100px"} />
        </a>
        <a
          style={{ display: "table-cell" }}
          href={
            "https://drive.google.com/file/d/1QO431HTGrhkIBjyOK7qS8xTMqW7-sJ8r/view?usp=sharing"
          }
          target="_blank"
        >
          <Image src={ResumeImg} height={"100px"} margin-right={"110px"} />
        </a>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
