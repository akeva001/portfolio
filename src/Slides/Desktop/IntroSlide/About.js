import React, { Component } from "react";
import styled from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const InfoContainer = styled.div`
  display: flex;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  height: calc(100vh - 80px);
  //height: 100vh;
  //max-width: 1849px;
  //box-sizing: border-box;
  //background-color: blue;
  //margin-top: 80px;
  //box-sizing: border-box;
  justify-content: center;
`;
const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  //height: calc(100vh - 80px);
  //width: 100%;
  //max-width: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0 100px;
  justify-content: center;
  //background-color: red;
  //width: 1849px;
  align-self: center;
  //padding-top: 50px;
  color: black;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const InfoRow = styled.div`
  display: flex;
  grid-auto-columns: minmax(auto, 1fr);
  //grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  //grid-gap: 16px;
  //align-items: center;
  justify-content: center;
  //grid-gap: 100px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1200px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  //background-color: green;
  //width: 100vw;
  //width: 1849px;
  //box-sizing: border-box;
  //overflow: hidden;
`;
const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  //grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  //grid-gap: 16px;
  align-items: center;
  justify-content: center;
  //grid-gap: 100px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1200px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  //background-color: green;
  //width: 100vw;
  //box-sizing: border-box;
  //overflow: hidden;
  //height: 100%;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15 px;
  grid-area: col1;
  //background-color: black;
  justify-content: space-evenly;
  align-items: center;
  //height: 100%;
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15 px;
  grid-area: col2;
  justify-content: center;
`;
const SchoolName = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  padding-top: 2%;
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 100px;
  }
`;
const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  padding-top: 2%;
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 100px;
  }
`;

const Major = styled.div`
  padding-top: 2%;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 25px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 500px;
  //background-color: red;
  width: 100%;
  justify-content: center;
  align-self: center;
  //background-color: grey;
  padding: 15px;
  margin-top: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  //background-color: red;
  justify-content: center;
  align-self: center;
  //background-color: grey;
  border-radius: 5%;
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  padding-top: 2%;
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 100px;
  }
`;
class About extends Component {
  render() {
    return (
      <InfoContainer id={"about"}>
        <InfoWrapper>
          <Column1>
            <AboutWrapper>
              During my final years as an undergraduate student in Computer
              Science, I discovered my obsession for Front-end development. If I
              was not studying or completing course work, I was developing new
              and elegant features for our mobile application RMate, while
              maintaining my part time job as a tennis coach.
            </AboutWrapper>
          </Column1>
          <Column2>
            <TextWrapper>
              <Title>Education</Title>
              <SchoolName>University of California, Riverside</SchoolName>
              <Major>B.S., Computer Science • 2014-2018</Major>

              <SchoolName>Glendale Community College</SchoolName>
              <Major>Computer Science • 2018-2021</Major>
            </TextWrapper>

            <TextWrapper>
              <Title>Skills</Title>
            </TextWrapper>
          </Column2>
        </InfoWrapper>
      </InfoContainer>
    );
  }
}

export default About;
