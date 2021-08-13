import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import device from "../../../Assets/Scaling/DisplaySizes.js";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
`;
const ImageBox = styled.div`
  display: flex;
  //flex-direction: column;
  //background: green;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;
const ImageBox2 = styled.div`
  display: flex;
  //flex-direction: column;
  //background: green;
  justify-content: space-evenly;
  //width: 100%;
  padding-top: 40px;
  min-width: 50%;
`;
const HeaderContainer = styled.div`
  display: flex;
  /background: green;
  justify-content: center;
  font-size: 50px;
  color: black;
  padding: 25px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 35px;
  }
  @media ${device.mobileL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
  @media ${device.desktop} {
    font-size: 80px;
  }
`;
const InfoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: calc(100vh - 44px);
  align-self: center;
  justify-content: center;
  align-items: center;
  //background: black;
  overflow: hidden;
  margin-bottom: 30px;
`;
const InfoContainer2 = styled.section`
  // color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }

  // align-self: center;
  position: relative;

  //width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: black;
  min-height: calc(100vh - 44px);
  margin-bottom: 30px;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  //margin-bottom: 30px;
  background-color: rgb(242, 242, 242);
  //max-width: 1380px;
  //margin: 30px;
  height: 100vh;
`;
const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  //box-sizing: border-box;
  overflow: hidden;
  //padding: 70px 0px 65px;
  align-self: center;
  //height: 100%;
  //width: 100%;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: col1;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    padding: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
  }
  @media ${device.mobileL} {
    padding: 30px;
  }
  @media ${device.tablet} {
    padding: 30px;
  }
  @media ${device.laptop} {
    padding: 40px;
  }
  @media ${device.laptopM} {
    padding: 70px;
  }
  @media ${device.laptopL} {
    padding: 70px;
  }
  @media ${device.desktop} {
    padding: 70px;
  }
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  grid-area: col2;
  justify-content: center;
  //min-height: 30vh;
  @media ${device.mobileS} {
    height: 30vh;
  }
  @media ${device.mobileM} {
    height: 30vh;
  }
  @media ${device.mobileL} {
    height: 30vh;
  }
  @media ${device.tablet} {
    height: 100%;
  }
  @media ${device.laptop} {
    height: 100%;
  }
  @media ${device.laptopM} {
    height: 100%;
  }
  @media ${device.laptopL} {
    height: 100%;
  }
  @media ${device.desktop} {
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  flex-direction: row;
  //max-width: 600px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-self: center;
  padding: 15px;
  //max-width: 700px;
`;
const Slide = styled.div`
  max-width: 1380px;
  //height: 100vh;
  background-color: rgb(242, 242, 242);
  opacity: 0;
  //transition-duration: 1s ease;
  //height: calc(100vh - 44px);
  // margin-left: 30px;
  // margin-right: 30px;
  border-radius: 20px;
  box-sizing: border-box;

  ${({ active }) =>
    active &&
    `
    border-radius: 20px;
    box-sizing: border-box;
    //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    opacity: 1;
    //transition-duration: 1s;
    //transform: scale(1);
    overflow: hidden;
    // margin-left: 30px;
    // margin-right: 30px;
    
    
    
  `}
`;
const RightArrow = styled.div`
  //position: absolute;
  //right: 12px;
  font-size: 4rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
const LeftArrow = styled.div`
  //position: absolute;
  //top: calc(50vh - 42px);
  //left: 42px;
  font-size: 4rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const ProjectsSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <InfoContainer id={"projects"}>
        <HeaderContainer>Projects</HeaderContainer>
        {SliderData.map((projects, index) => (
          <Slide key={projects} active={index === current ? true : false}>
            {index === current && (
              <InfoRow imgStart={projects.imgStart}>
                <Column1>
                  <TextWrapper>
                    <TextContent
                      projectName={projects.projectName}
                      projectYear={projects.year}
                      projectDesc={projects.projectDesc}
                      projectType={projects.projectType}
                      roles={projects.roles}
                      image={projects.image}
                      image2={projects.image2}
                      link={projects.link}
                    />
                    <ImageBox2>
                      <a
                        style={{
                          display: "table-cell",
                          //paddingHorizontal: "30px",
                        }}
                        href={projects.link}
                        target="_blank"
                      >
                        <img src={projects.image} height={"70px"} />
                      </a>
                      {projects.image2 != null && (
                        <a
                          style={{
                            display: "table-cell",
                            //paddingHorizontal: "30px",
                          }}
                          href={projects.link2}
                          target="_blank"
                        >
                          <img src={projects.image2} height={"70px"} />
                        </a>
                      )}
                    </ImageBox2>
                  </TextWrapper>

                  <ImageBox>
                    <LeftArrow>
                      <FaArrowAltCircleLeft
                        className="left-arrow"
                        onClick={prevSlide}
                      />
                    </LeftArrow>

                    <RightArrow>
                      <FaArrowAltCircleRight
                        className="right-arrow"
                        onClick={nextSlide}
                      />
                    </RightArrow>
                  </ImageBox>
                </Column1>
                <Column2>
                  <ImageContent deviceImages={projects.deviceImages} />
                </Column2>
              </InfoRow>
            )}
          </Slide>
        ))}
      </InfoContainer>
    </>
  );
};

export default ProjectsSlider;
