import React, { Component } from "react";
import styled from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const InfoContainer = styled.div`
  display: flex;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  min-height: 100vh;
  //height: 100vh;

  justify-content: center;
  flex-direction: column;
`;
const InfoWrapper = styled.div`
  display: block;
  justify-content: center;
  max-width: 1380px;
  align-self: center;
  //padding-top: 50px;
  background: red;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  margin-bottom: 30px;
  width: 100%;
`;
const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  //grid-gap: 16px;
  //align-items: center;
  justify-content: center;
  //grid-gap: 100px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  box-sizing: border-box;
  overflow: hidden;
  //padding: 70px 0px 65px;
  //justify-content: space-evenly;
  //align-self: center;
  //background: blue;
  //background-color: rgb(242, 242, 242);
  width: 100%;
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
  //justify-content: space-between;
  align-items: center;
  //height: 100%;
  //padding: 30px;
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15 px;
  grid-area: col2;
  justify-content: center;
  //padding: 30px;
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
  padding-top: 2%;
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
  flex: 1;
  //max-width: 600px;
  //background-color: red;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding: 35px;
  //margin-top: 30px;
  // border-radius: 10px;
  // box-sizing: border-box;
  // box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(242, 242, 242);
  color: black;
  height: 100vh;
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  //max-width: 600px;
  justify-content: center;
  align-self: center;
  //border-radius: 5%;
  padding: 35px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  // border-radius: 10px;
  // box-sizing: border-box;
  // box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(242, 242, 242);
  color: black;
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
            <Column1>
              <AboutWrapper>
                During my final years as an undergraduate student in Computer
                Science, I discovered my obsession for Front-end development. If
                I was not studying or completing course work, I was developing
                new and elegant features for our mobile application RMate, while
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
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    );
  }
}

export default About;
