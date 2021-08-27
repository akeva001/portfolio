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
  margin-bottom: 60px;
  //background-color: green;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  max-width: 1300px;
  padding-left: 25px;
  padding-right: 25px;
  align-self: center;
  //background: red;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  //min-height: 50vh;
  //background: blue;
  //width: 100%;
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
    font-size: 70px;
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
  //height: 50vh;
  //height: calc(50vh - 22px);
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
const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
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
    font-size: 30px;
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
    font-size: 20px;
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
    font-size: 25px;
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
  //justify-content: space-between;
  align-self: center;
  padding: 20px;
  background-color: rgb(242, 242, 242);
  height: 100%;
  color: black;
  //max-height: 250px;

  border-radius: 20px;
  box-sizing: border-box;
  //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
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
    height: 260px;
  }
  @media ${device.desktop} {
    height: 300px;
  }
`;
const TextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //justify-content: space-between;
  align-self: center;
  padding: 20px;
  background-color: rgb(242, 242, 242);
  height: 100%;
  color: black;
  //max-height: 250px;

  border-radius: 20px;
  box-sizing: border-box;
  //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
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
    height: 260px;
  }
  @media ${device.desktop} {
    height: 300px;
  }
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
  border-radius: 20px;
  box-sizing: border-box;
  @media ${device.mobileS} {
    font-size: 18px;
  }
  @media ${device.mobileM} {
    font-size: 18px;
  }
  @media ${device.mobileL} {
    font-size: 25px;
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
    font-size: 30px;
  }
`;
const TechWrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  //background-color: rgb(242, 242, 242);
  color: black;

  box-sizing: border-box;
  //color: black;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Skills = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  //padding-right: 10px;
  font-size: 20px;
  //background: green;
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
    font-size: 19px;
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
const School = styled.div`
  display: flex;
  justify-conent: center;
  flex-direction: column;
  align-self: center;
  height: 100%;
  //padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-conent: center;
  flex-direction: column;
  align-self: center;
  height: 100%;
  //background-color: red;
`;
class About extends Component {
  render() {
    return (
      <InfoContainer id={"about"}>
        <HeaderContainer>About</HeaderContainer>
        <Wrapper>
          <InfoWrapper>
            {/* <AboutWrapper>
              about
              me----------------------------------------------------------------------------------------------------------------------
            </AboutWrapper> */}

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
  }
}

export default About;