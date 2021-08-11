import React, { Component } from "react";
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
  margin-bottom: 30px;
  //background-color: green;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  max-width: 1380px;
  align-self: center;
  //background: red;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  //min-height: 50vh;
  //background: blue;
  width: 100%;
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
  //height: 50vh;
  //height: calc(50vh - 22px);
`;
const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  //height: 100%;
  overflow: hidden;
  //background-color: black;
  //height: calc(50vh - 22px);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1200px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  display: flex;
  padding: 0 15 px;
  grid-area: col1;
  align-items: center;
  //height: 100%;
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15 px;
  grid-area: col2;
  justify-content: center;
  //padding-top: 30px;
  //height: 100%;
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
    font-size: 30px;
  }
`;
const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  //padding-top: 2%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 30px;
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
    font-size: 30px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding: 35px;
  background-color: rgb(242, 242, 242);
  color: black;
  height: 100%;
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //height: 100%;
  justify-content: center;
  align-self: center;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: rgb(242, 242, 242);
  color: black;
  margin-bottom: 30px;
  padding: 30px;
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 30px;
  }
`;
class About extends Component {
  render() {
    return (
      <InfoContainer id={"about"}>
        <InfoWrapper>
          <InfoRow>
            <AboutWrapper>
              During my final years as an undergraduate student in Computer
              Science, I discovered my obsession for Front-end development. If I
              was not studying or completing course work, I was developing new
              and elegant features for our mobile application RMate, while
              maintaining my part time job as a tennis coach.
            </AboutWrapper>
          </InfoRow>
        </InfoWrapper>
        <InfoWrapper>
          <InfoRow2>
            <Column1>
              <TextWrapper>
                <Title>Education</Title>
                <SchoolName>University of California, Riverside</SchoolName>
                <Major>B.S., Computer Science • 2018-2021</Major>

                <SchoolName>Glendale Community College</SchoolName>
                <Major>Computer Science • 2014-2018</Major>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Title>Skills</Title>
                <SchoolName>University of California, Riverside</SchoolName>
                <Major>B.S., Computer Science • 2018-2021</Major>

                <SchoolName>Glendale Community College</SchoolName>
                <Major>Computer Science • 2014-2018</Major>
              </TextWrapper>
            </Column2>
          </InfoRow2>
        </InfoWrapper>
      </InfoContainer>
    );
  }
}

export default About;
