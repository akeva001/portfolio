import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";

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
  overflow: hidden;
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
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  width: 100%;
  overflow: hidden;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 950px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  display: flex;
  padding: 0 15 px;
  grid-area: col1;
  align-items: center;
  justify-content: center;
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15 px;
  grid-area: col2;
  justify-content: center;
`;
const SchoolName = styled.div`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  padding-top: 2%;
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
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const Title = styled.div`
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
    font-size: 20px;
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
  }
  @media ${device.mobileM} {
    height: 100%;
  }
  @media ${device.mobileL} {
    height: 100%;
  }
  @media ${device.tablet} {
    height: 220px;
  }
  @media ${device.laptop} {
    height: 220px;
  }
  @media ${device.laptopL} {
    height: 220px;
  }
  @media ${device.desktop} {
    height: 280px;
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
  }
  @media ${device.mobileM} {
    height: 100%;
  }
  @media ${device.mobileL} {
    height: 100%;
  }
  @media ${device.tablet} {
    height: 220px;
  }
  @media ${device.laptop} {
    height: 220px;
  }
  @media ${device.laptopL} {
    height: 220px;
  }
  @media ${device.desktop} {
    height: 280px;
  }
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-self: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: rgb(242, 242, 242);
  color: black;
  margin-bottom: 30px;
  border-radius: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 2068px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 950px) {
    max-width: 500px;
  }
  @media ${device.mobileS} {
    font-size: 18px;
    padding: 30px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
    padding: 30px;
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
    font-size: 25px;
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
      If I was not studying or completing course work, I was developing new and
      elegant features for our mobile application RMate, while maintaining my
      part time job as a tennis coach. I have been very fortunate to have the
      opportunity to play tennis my entire life. I started playing tennis when I
      was 5 years old, and was a competitive tennis player from 9 years old
      through junior college. Tennis has taught me many valuable lessons that
      have built my character into that of a problem solver, leader, and an
      individual with integrity. I currently am a part tennis coach, teaching
      students from 4 years old to 15 years old.
    </MoreContent>
  );
  const linkName = readMore ? " show less" : " ...read more";

  return (
    <InfoContainer id={"about"}>
      <HeaderContainer>About</HeaderContainer>
      <Wrapper>
        <InfoWrapper>
          <AboutWrapper>
            <RegularIcon>
              Hello! My name is Alex Kevakian. I was born and raised in
              Glendale, California and I currently reside in Hollywood,
              California. I recently graduated from the University of California
              Riverside, with a bachelors degree in Computer Science. During my
              final years as an undergraduate student in Computer Science, I
              discovered my obsession for Front-end development. If I was not
              studying or completing course work, I was developing new and
              elegant features for our mobile application RMate, while
              maintaining my part time job as a tennis coach. I have been very
              fortunate to have the opportunity to play tennis my entire life. I
              started playing tennis when I was 5 years old, and was a
              competitive tennis player from 9 years old through junior college.
              Tennis has taught me many valuable lessons that have built my
              character into that of a problem solver, leader, and an individual
              with integrity. I currently am a part tennis coach, teaching
              students from 4 years old to 15 years old.
            </RegularIcon>
            <DesktopIcon>
              Hello! My name is Alex Kevakian. I was born and raised in
              Glendale, California and I currently reside in Hollywood,
              California. I recently graduated from the University of California
              Riverside, with a bachelors degree in Computer Science. During my
              final years as an undergraduate student in Computer Science, I
              discovered my obsession for Front-end development.
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

          <InfoRow2>
            <Column1>
              <TextWrapper>
                <School>
                  <Title>Education</Title>
                  <SchoolName>University of California, Riverside</SchoolName>
                  <Major>B.S., Computer Science • 2018-2021</Major>

                  <SchoolName>Glendale Community College</SchoolName>
                  <Major>Computer Science • 2014-2018</Major>
                </School>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper2>
                <Title> Skills</Title>
                <TechWrapper>
                  <Skills>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </Skills>
                  <Skills>
                    <li>Responsive Design</li>
                    <li>Application Architecture</li>
                    <li>Testing {"&"} Debugging</li>
                    <li>Version Control {"&"} Git</li>
                    <li>Browser Developer Tools</li>
                  </Skills>
                </TechWrapper>
              </TextWrapper2>
            </Column2>
          </InfoRow2>
        </InfoWrapper>
      </Wrapper>
    </InfoContainer>
  );
};
export default About;
