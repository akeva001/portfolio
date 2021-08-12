import React, { Component, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
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
  justify-content: center;
  width: 100%;
  padding-top: 20px;
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
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 30px;
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
const InfoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  //display: flex;
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
  //overflow: hidden;
  //margin-bottom: 30px;
  background-color: rgb(242, 242, 242);
  max-width: 1380px;
  border-radius: 20px;
  box-sizing: border-box;
  //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  //margin: 30px;
  //min-height: calc(100vh - 44px);
  // @media ${device.mobileS} {
  //   height: calc(100vh - 44px);
  // }
  // @media ${device.mobileM} {
  //   height: calc(100vh - 44px);
  // }
  // @media ${device.mobileL} {
  //   height: calc(100vh - 44px);
  // }
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
  //max-width: 85rem;
  //margin-left: 2%;
  //margin-right: 2%;
  //padding: 70px 0px 65px;
  //justify-content: space-evenly;
  align-self: center;
  //background: blue;
  width: 100%;
`;

const Column1 = styled.div`
  display: flex;
  grid-area: col1;
  justify-content: center;
  align-items: center;
  @media ${device.mobileS} {
    padding: 15px;
  }
  @media ${device.mobileM} {
    padding: 15px;
  }
  @media ${device.mobileL} {
    padding: 20px;
  }
  @media ${device.tablet} {
    padding: 30px;
  }
  @media ${device.laptop} {
    padding: 80px;
  }
  @media ${device.laptopM} {
    padding: 100px;
  }
  @media ${device.laptopL} {
    padding: 100px;
  }
  @media ${device.desktop} {
    padding: 100px;
  }
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  grid-area: col2;
  justify-content: center;
  width: 100%;
  //background: black;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //max-width: 600px;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding: 15px;
  //max-width: 700px;
`;
const ImgWrap = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
`;

class Experience extends Component {
  constructor(props) {
    super(props);
    this.experienceDetails = [
      {
        projectName: "MyCampusMate",
        year: "July 2019-Present",
        projectDesc:
          "IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
        projectType: "iOS/Android App",
        roles: ["Mobile Developer"],
        image: AppStoreImage,
        deviceImages: [RMateImage2],
        link: "https://apps.apple.com/us/app/rmate/id1418361482",
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
                    <ImageBox>
                      <a
                        style={{ display: "table-cell" }}
                        href={experiences.link}
                        target="_blank"
                      >
                        <img src={experiences.image} height={"50px"} />
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
