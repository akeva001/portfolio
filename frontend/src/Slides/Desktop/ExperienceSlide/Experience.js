import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import GooglePlayImage from "../../../Assets/Images/Sites/GooglePlay2.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";
import FoodImage from "../../../Assets/Images/FoodRecipeEngine/Food.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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
    font-size: 60px;
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
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 44px);
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(242, 242, 242);
  max-width: 1050px;
  border-radius: 40px;
  box-sizing: border-box;
  margin-bottom: 60px;
  margin-left: 25px;
  margin-right: 25px;
  @media screen and (max-width: 1439px) {
    max-width: 850px;
  }
  @media screen and (max-width: 900px) {
    max-width: 500px;
  }
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
  grid-area: col1;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    padding-left: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
  }
  @media ${device.mobileL} {
    padding: 30px;
  }
  @media ${device.tablet} {
    padding: 40px;
  }
  @media ${device.laptop} {
    padding: 40px;
  }
  @media ${device.laptopM} {
    padding: 40px;
  }
  @media ${device.laptopL} {
    padding: 50px;
  }
  @media ${device.desktop} {
    padding: 50px;
  }
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  grid-area: col2;
  justify-content: center;
  width: 100%;
`;
const Accomplishments = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding: 20px;
  font-size: 17px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
const Button = styled.img`
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

class Experience extends Component {
  constructor(props) {
    super(props);
    this.experienceDetails = [
      {
        projectName: "MyCampusMate",
        year: "  • July 2019 - Present",
        projectDesc:
          "RMate is a mobile application aimed at organizing and optimizing your access to student tools. RMate is intended for students enrolled at University of California, Riverside. Students are able to find buildings across the campus with ease, create an organized class schedule, keep up with the latest events on campus, and much more! ",
        projectType: "iOS/Android App",
        roles: ["Mobile Developer"],
        image: AppStoreImage,
        image2: GooglePlayImage,
        deviceImages: [RMateImage2],
        link: "https://apps.apple.com/us/app/rmate/id1418361482",
        link2:
          "https://play.google.com/store/apps/details?id=com.mycampusmate.rmate&hl=en_US&gl=US",
        imgStart: false,
        extrapadding: true,
      },
    ];
  }

  renderContent() {
    return (
      <>
        <InfoContainer id={"experience"}>
          <HeaderContainer>Experience</HeaderContainer>
          {this.experienceDetails.map((experiences) => (
            <InfoWrapper key={experiences}>
              <InfoRow imgStart={experiences.imgStart}>
                <Column1>
                  <TextWrapper>
                    <TextContent
                      projectName={experiences.projectName}
                      projectYear={experiences.year}
                      projectDesc={experiences.projectDesc}
                      projectType={experiences.projectType}
                      roles={experiences.roles}
                      image={experiences.image}
                      link={experiences.link}
                    />
                    <Accomplishments>
                      <li>
                        Collaborated with senior developers and product
                        management
                      </li>
                      <li>
                        Delivered user-friendly new features for RMate mobile
                        application using react-native
                      </li>
                      <li>
                        In charge of submitting all major updates to the
                        AppStore
                      </li>
                      <li>Attended weekly scrum meetings</li>
                      <li>
                        Tested all new features and reduced the number of
                        crashes and bugs by 80%
                      </li>
                      <li>
                        Performed core library updates and regression testing
                      </li>
                    </Accomplishments>
                    <ImageBox>
                      <a
                        style={{
                          display: "table-cell",
                          //orderRadius: "40px",
                          boxSizing: "border-box",
                          //boxShadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2),
                        }}
                        href={experiences.link}
                        target="_blank"
                      >
                        <Button src={experiences.image} height={"60px"} />
                      </a>
                      <a
                        style={{ display: "table-cell" }}
                        href={experiences.link2}
                        target="_blank"
                      >
                        <Button src={experiences.image2} height={"60px"} />
                      </a>
                    </ImageBox>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImageContent deviceImages={experiences.deviceImages} />
                </Column2>
              </InfoRow>
            </InfoWrapper>
          ))}
        </InfoContainer>
      </>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Experience;
