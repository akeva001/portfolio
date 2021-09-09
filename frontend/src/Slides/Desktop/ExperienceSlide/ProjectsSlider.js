import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import SliderImageContent from "./SliderImageContent";
import { SliderData } from "./SliderData";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import device from "../../../Assets/Scaling/DisplaySizes.js";

const ImageBox = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  height: 100%;
`;
const ImageBox2 = styled.div`
  display: flex;

  justify-content: space-evenly;

  padding-bottom: 20px;
  min-width: 50%;
`;
const HeaderContainer = styled.div`
  display: flex;

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
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
  @media ${device.laptopL} {
    font-size: 80px;
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

  overflow: hidden;
  margin-bottom: 50px;
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

  overflow: hidden;

  align-self: center;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: col1;
  justify-content: center;
  align-items: center;
  //background: green;

  @media ${device.mobileS} {
    padding: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
  }
  @media ${device.mobileL} {
    padding: 60px;
  }
  @media ${device.tablet} {
    padding: 60px;
  }
  @media ${device.laptop} {
    padding: 40px;
    // width: 450px;
  }
  @media ${device.laptopM} {
    padding: 40px;
  }
  @media ${device.laptopL} {
    padding: 70px;
    width: 550px;
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

  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileM} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.laptop} {
    width: 650px;
  }
  @media ${device.laptopL} {
    width: 800px;
  }
  @media ${device.desktop} {
    width: 800px;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  align-self: center;

  @media ${device.mobileS} {
    height: 250px;
  }
  @media ${device.mobileM} {
    height: 250px;
  }
  @media ${device.mobileL} {
    height: 240px;
  }
  @media ${device.tablet} {
    height: 350px;
  }
  @media ${device.laptop} {
    height: 350px;
  }
  @media ${device.laptopM} {
    height: 320px;
  }
  @media ${device.laptopL} {
    height: 320px;
  }
  @media ${device.desktop} {
    height: 320px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;
`;
const Slide = styled.div``;
const Slider = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;

  background-color: rgb(242, 242, 242);
  border-radius: 40px;
  margin-bottom: 60px;
  margin-left: 25px;
  margin-right: 25px;

  @media screen and (max-width: 1439px) {
    max-width: 1100px;
  }

  @media screen and (max-width: 900px) {
    max-width: 500px;
  }
`;
const RightArrow = styled.div`
  font-size: 4rem;
  color: black;

  cursor: pointer;
  user-select: none;
  padding-right: 40px;

  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const LeftArrow = styled.div`
  font-size: 4rem;
  color: black;

  cursor: pointer;
  user-select: none;
  padding-left: 40px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;

  justify-content: space-evenly;
  @media ${device.mobileS} {
    height: 120px;
  }
  @media ${device.mobileM} {
    height: 150px;
  }
  @media ${device.mobileL} {
    height: 200px;
  }
  @media ${device.tablet} {
    height: 150px;
  }
  @media ${device.laptop} {
    height: 150px;
  }
  @media ${device.laptopM} {
    height: 150px;
  }
  @media ${device.laptopL} {
    height: 160px;
  }
  @media ${device.desktop} {
    height: 160px;
  }
`;
const Accomplishments = styled.ul`
  color: black;
  list-style-type: none;
  display: flex;
  flex-direction: column;

  font-size: 20px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 15px;
    width: 100px;
    height: 2100px;
    padding-top: 10px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
    width: 100px;
    height: 150px;
    padding-top: 10px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
    height: 170px;
    width: 150px;
    padding-top: 10px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    width: 150px;
    padding-top: 10px;
    height: 160px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    width: 150px;
    height: 160px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
    width: 160px;
    height: 160px;
  }
  @media ${device.desktop} {
    font-size: 20px;
    width: 160px;
    height: 160px;
  }
`;
const Button = styled.img`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
                      <DescriptionWrapper>
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
                      </DescriptionWrapper>
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
                        }}
                        href={projects.link}
                        target="_blank"
                      >
                        <Button src={projects.image} height={"70px"} />
                      </a>
                      {projects.image2 != null && (
                        <a
                          style={{
                            display: "table-cell",
                          }}
                          href={projects.link2}
                          target="_blank"
                        >
                          <Button src={projects.image2} height={"70px"} />
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
