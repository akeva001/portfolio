import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import SliderImageContent from "./SliderImageContent";
import { SliderData } from "./SliderData";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

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
  height: 100%;
`;
const ImageBox2 = styled.div`
  display: flex;
  //flex-direction: column;
  //background: green;
  justify-content: space-evenly;
  //width: 100%;
  padding-bottom: 20px;
  min-width: 50%;
`;
const HeaderContainer = styled.div`
  display: flex;
  //background: white;
  justify-content: center;
  font-size: 50px;
  color: black;
  padding: 20px;
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
  overflow-anchor: none;
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
  //background: green;
  overflow: hidden;
  margin-bottom: 50px;
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
  //max-width: 1180px;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: col1;
  justify-content: center;
  align-items: center;
  //max-width: 500px;

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
  flex-direction: column;
  align-items: center;
  grid-area: col2;
  justify-content: center;
  //max-height: 60vh;
 
  @media ${device.mobileS} {
    width: 100%:
  }
  @media ${device.mobileM} {
    width: 100%:
  }
  @media ${device.mobileL} {
    width: 100%:
  }
  @media ${device.tablet} {
    width: 100%:
  }
  @media ${device.laptop} {
    width: 100%
  }
  @media ${device.laptopL} {
    width: 800px;
  }
  @media ${device.desktop} {
    width: 800px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
const Slide = styled.div``;
const Slider = styled.section`
  display: flex;
  justify-content: center;
  //position: relative;
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
  //height: 100vh;
  background-color: rgb(242, 242, 242);
  border-radius: 40px;
  margin-bottom: 60px;
`;
const RightArrow = styled.div`
  //position: absolute;
  //right: 12px;
  font-size: 4rem;
  color: black;
  //z-index: 10;
  cursor: pointer;
  user-select: none;
  padding-right: 40px;
`;
const LeftArrow = styled.div`
  //position: absolute;
  //top: calc(50vh - 42px);
  //left: 42px;
  font-size: 4rem;
  color: black;
  //z-index: 10;
  cursor: pointer;
  user-select: none;
  padding-left: 40px;
`;
const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 200px;
  //background: red;
  justify-content: space-evenly;
`;
const Accomplishments = styled.ul`
  color: black;
  //background: green;
  display: flex;
  flex-direction: column;
  //max-width: 600px;
  width: 100%;

  padding-left: 30px;
  //padding-top: 15px;
  //max-width: 700px;
  font-size: 20px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
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
        <Slider>
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
                      <TechWrapper>
                        <Accomplishments>
                          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Frontend
                          </p>

                          {projects.frontend.map((project, index) => (
                            <li key={index}>{project}</li>
                          ))}
                        </Accomplishments>
                        <Accomplishments>
                          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Backend
                          </p>
                          {projects.backend.map((project, index) => (
                            <li key={index}>{project}</li>
                          ))}
                        </Accomplishments>
                      </TechWrapper>
                    </TextWrapper>

                    <ImageBox>
                      <LeftArrow>
                        <IoIosArrowDropleft onClick={prevSlide} />
                      </LeftArrow>

                      <RightArrow>
                        <IoIosArrowDropright onClick={nextSlide} />
                      </RightArrow>
                    </ImageBox>
                  </Column1>
                  <Column2>
                    <SliderImageContent deviceImages={projects.deviceImages} />
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
                  </Column2>
                </InfoRow>
              )}
            </Slide>
          ))}
        </Slider>
      </InfoContainer>
    </>
  );
};

export default ProjectsSlider;
