import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import { Parallax } from "react-scroll-parallax";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }

  min-height: calc(100vh - 44px);
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1300px;
  padding-left: 25px;
  padding-right: 25px;
  align-self: center;

  margin-left: auto;
  margin-right: auto;
  //overflow: hidden;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: black;
  padding: 20px;
  padding-bottom: 0;
  transform: translate(0, 10px);
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
    margin-top: 10vh;
  }
  @media ${device.laptopL} {
    font-size: 60px;
    margin-top: 15vh;
  }
  @media ${device.desktop} {
    font-size: 80px;
    margin-top: 20vh;
  }
`;
const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;
const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto);
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
  width: 100%;
  // margin-top: 50vh;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1250px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }

  @media ${device.mobileS} {
    margin-top: 30vh;
    margin-bottom: 50px;
  }
  @media ${device.mobileM} {
    margin-top: 30vh;
    margin-bottom: 50px;
  }
  @media ${device.mobileL} {
    margin-top: 30vh;
    margin-bottom: 50px;
  }
  @media ${device.tablet} {
    margin-top: 30vh;
  }
  @media ${device.laptop} {
    margin-top: 30vh;
  }
  @media ${device.laptopL} {
    margin-top: 30vh;
  }
  @media ${device.desktop} {
    margin-top: 20vh;
  }
`;

const Column1 = styled.div`
  position: relative;
  display: flex;
  padding: 0 15 px;
  grid-area: col1;
  align-items: center;
  align-self: center;
  //justify-content: center;
  filter: drop-shadow(0 0 0.75rem #bebebe);

  width: 40vw;
  @media ${device.mobileS} {
    width: 350px;
  }
  @media ${device.mobileM} {
    width: 380px;
  }
  @media ${device.mobileL} {
    width: 500px;
  }
  @media ${device.tablet} {
    width: 60vw;
  }
  @media ${device.laptop} {
    width: 50vw;
  }

  @media ${device.laptopL} {
    width: 40vw;
  }
  @media ${device.desktop} {
    width: 25vw;
  }
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15 px;
  grid-area: col2;
  //justify-content: center;
  //background: black;
  filter: drop-shadow(0 0 0.75rem #bebebe);
  //min-width: 450px !important;

  width: 40vw;
  @media ${device.mobileS} {
    width: 350px;
  }
  @media ${device.mobileM} {
    width: 380px;
  }
  @media ${device.mobileL} {
    width: 500px;
  }
  @media ${device.tablet} {
    width: 75vw;
  }
  @media ${device.laptop} {
    width: 50vw;
  }

  @media ${device.laptopL} {
    width: 40vw;
  }
  @media ${device.desktop} {
    width: 25vw;
  }
`;
const SchoolName = styled.div`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  //padding-top: 2%;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 25px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const TitleEd = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding-bottom: 35px;

  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 25px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const TitleSk = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 25px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;

const Major = styled.div`
  padding-top: 2%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;

  @media ${device.mobileS} {
    font-size: 16px;
    padding-bottom: 10px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
    padding-bottom: 10px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    padding-bottom: 10px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    padding-bottom: 10px;
  }
  @media ${device.laptop} {
    font-size: 20px;
    padding-bottom: 20px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
    padding-bottom: 20px;
  }
  @media ${device.desktop} {
    font-size: 25px;
    padding-bottom: 20px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  //align-self: center;
  padding: 20px;
  background-color: rgb(242, 242, 242);
  height: 100%;
  color: black;

  border-radius: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 950px) {
    max-width: 500px;
  }
  @media ${device.mobileS} {
    height: 100%;
    margin: 20px;
  }
  @media ${device.mobileM} {
    height: 100%;
    margin: 20px;
  }
  @media ${device.mobileL} {
    height: 100%;
    margin: 20px;
  }
  @media ${device.tablet} {
    height: 300px;
    margin: 20px;
  }
  @media ${device.laptop} {
    height: 300px;
    margin: 50px;
  }
  @media ${device.laptopL} {
    height: 300px;
    margin: 50px;
  }
  @media ${device.desktop} {
    height: 300px;
    width: 100%;
  }
`;
const TextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-self: center;
  padding: 20px;
  background-color: rgb(242, 242, 242);
  height: 100%;
  color: black;

  border-radius: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 950px) {
    max-width: 500px;
  }
  @media ${device.mobileS} {
    height: 100%;
    margin: 20px;
  }
  @media ${device.mobileM} {
    height: 100%;
    margin: 20px;
  }
  @media ${device.mobileL} {
    height: 100%;
    margin: 20px;
  }
  @media ${device.tablet} {
    height: 300px;
    margin: 50px;
  }
  @media ${device.laptop} {
    height: 300px;
    margin: 50px;
  }
  @media ${device.laptopL} {
    height: 300px;
    margin: 50px;
  }
  @media ${device.desktop} {
    height: 300px;
    width: 100%;
  }
`;
const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 0 0.75rem #bebebe);
  justify-content: center;
  align-self: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: rgb(242, 242, 242);
  color: black;
  margin-bottom: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 100px;

  @media screen and (max-width: 2068px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 950px) {
    max-width: 500px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
    padding: 30px;
    margin: 15px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
    padding: 30px;
    margin: 15px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    padding: 50px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    padding: 50px;
  }
  @media ${device.laptop} {
    font-size: 25px;
    padding: 50px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
    padding: 50px;
    max-width: 1100px;
  }
  @media ${device.desktop} {
    font-size: 30px;
    padding: 50px;
    max-width: 1100px;
  }
`;
const TechWrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;

  color: black;

  box-sizing: border-box;

  flex-direction: row;
  justify-content: space-evenly;
`;
const Skills = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  padding-left: 25px;

  font-size: 20px;

  max-width: 300px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 17px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
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
const School = styled.div`
  display: flex;
  justify-conent: center;
  flex-direction: column;
  align-self: center;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-conent: center;
  flex-direction: column;
  align-self: center;
  height: 100%;
`;
const extraContentWrapper = styled.div`
  transition: height 0.25s linear;
`;
const MobileIcon = styled.a`
  display: none;

  @media screen and (max-width: 950px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    height: 14px;
  }
`;
const DesktopIcon = styled.p`
  display: none;

  @media screen and (max-width: 950px) {
    display: inline-block;
    float: left;
    margin: 0;
  }
`;
const RegularIcon = styled.p`
  display: none;

  @media screen and (min-width: 950px) {
    display: flex;
    font-size: 25px;
  }
`;
const MoreContent = styled.p`
  display: none;

  @media screen and (max-width: 950px) {
    display: inline-block;
    float: left;
    margin: 0;
  }
`;

export const About = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <MoreContent>
      <br />
      If I was not studying or completing course work, I was developing new and
      elegant features for our mobile application RMate. I have been very
      fortunate to have the opportunity to play tennis my entire life. I started
      playing tennis when I was 5 years old, and was a competitive tennis player
      from 9 years old through junior college. Tennis has taught me many
      valuable lessons that have built my character into that of a problem
      solver, leader, and an individual with integrity.
    </MoreContent>
  );
  const linkName = readMore ? " show less" : " ...read more";

  return (
    <InfoContainer id={"about"}>
      <HeaderContainer>About</HeaderContainer>
      <Wrapper>
        <InfoWrapper>
          <Parallax
            translateY={["300px", "-120px"]}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AboutWrapper>
              <RegularIcon>
                Hello! My name is Alex Kevakian and I currently reside in
                Glendale, California. I graduated from the University of
                California, Riverside; with a bachelors degree in Computer
                Science. Over the past 3 years as a Front-end Developer, I have
                designed, developed, and launched custom, highly responsive
                websites using React and NextJS. My Front-end experience also
                extends to building mobile applications using React Native.
                <br />
                <br /> I have been very fortunate to have the opportunity to
                play tennis my entire life. I started playing tennis when I was
                5 years old, and was a competitive tennis player from 9 years
                old through junior college. Tennis has taught me many valuable
                lessons that have built my character into that of a problem
                solver, leader, and an individual with integrity.
              </RegularIcon>
              <DesktopIcon>
                Hello! My name is Alex Kevakian and I currently reside in
                Glendale, California. I recently graduated from the University
                of California Riverside, with a bachelors degree in Computer
                Science. During my final years as an undergraduate student, I
                discovered my passion for front-end development.
              </DesktopIcon>

              {readMore && extraContent}

              <MobileIcon
                onClick={() => {
                  setReadMore(!readMore);
                }}
                style={{
                  flex: 1,
                  opacity: ".5",
                  cursor: "pointer",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: "20px",
                  fontSize: "20px",
                }}
              >
                {linkName}
              </MobileIcon>
            </AboutWrapper>
          </Parallax>

          <InfoRow2>
            <Column1>
              <Parallax
                translateX={["-30vw", "20vw"]}
                style={{
                  width: "100%",
                  display: "flex",
                  //justifyContent: "center",
                }}
              >
                <TextWrapper>
                  <School>
                    <TitleEd>Education</TitleEd>
                    <SchoolName>University of California, Riverside</SchoolName>
                    <Major>B.S., Computer Science • 2018-2021</Major>

                    <SchoolName>Glendale Community College</SchoolName>
                    <Major>Computer Science • 2014-2018</Major>
                  </School>
                </TextWrapper>
              </Parallax>
            </Column1>

            <Column2>
              <Parallax
                translateX={["30vw", "-20vw"]}
                style={{
                  width: "100%",
                  display: "flex",
                  //justifyContent: "center",
                }}
              >
                <TextWrapper2>
                  <TitleSk> Skills</TitleSk>
                  <TechWrapper>
                    <Skills>
                      <li>ReactJS</li>
                      <li>React Native</li>
                      <li>NextJS</li>
                      <li>Node.js</li>
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </Skills>
                    <Skills>
                      <li>JSON</li>
                      <li>Redux</li>
                      <li>Responsive Design</li>
                      <li>DOM Manipulation</li>
                      <li>Application Architecture</li>
                      <li>Unit Testing {"&"} Debugging</li>
                      <li>Version Control {"&"} Git</li>
                      <li>Browser Developer Tools</li>
                    </Skills>
                  </TechWrapper>
                </TextWrapper2>
              </Parallax>
            </Column2>
          </InfoRow2>
        </InfoWrapper>
      </Wrapper>
    </InfoContainer>
  );
};
export default About;
