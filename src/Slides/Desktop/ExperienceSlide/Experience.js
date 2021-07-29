import React, { Component } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import NotflixLink from "../../../Assets/Images/Sites/ExternalLink.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const Container = styled.div`
  display: flex;
  //z-index: 1;

  //box-sizing: border-box;
  //flex-direction: column;
  flex-flow: column;
  // height: 100vh;
  justify-content: center;
  overflow: hidden;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`;
const ExperienceContainer = styled.div`
  background: grey;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  //flex: 1;
  //flex-direction: row;
  //justify-content: space-evenly;
  align-items: center;
  //padding 0 30px;
  height: 100vh;
  width: 100%;
  //position: relative;
  //z-index: 1;
  //overlow: auto;
`;
const InfoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  min-height: calc(100vh - 80px);
  //max-width: 1849px;
  //box-sizing: border-box;
  //background-color: blue;
  //margin-top: 80px;
  //box-sizing: border-box;
`;
const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  //height: 860px;
  //width: 100%;
  //max-width: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0 100px;
  justify-content: center;
  //background-color: red;
  max-width: 1849px;
  align-self: center;
  padding-top: 50px;
`;
const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  //grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  //grid-gap: 16px;
  //lign-items: center;
  //grid-gap: 100px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1200px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  //background-color: blue;
  //width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
`;

const Column1 = styled.div`
  display: flex;
  //margin-bottom: 15px;
  padding: 0 15 px;
  grid-area: col1;
  //background-color: green;
  min-width: 100%;
  //min-height: 100%;
  //max-width: 700px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  //min-width: 40vh;
`;
const Column2 = styled.div`
  display: flex;
  //margin-bottom: 15px;
  align-items: center;
  padding: 0 15 px;
  grid-area: col2;
  //background-color: brown;
  justify-content: center;
  //overflow: hidden;
  min-width: 40vh;
  //min-height: 100%;
`;

const TextWrapper = styled.div`
  //display: flex;
  flex-direction: row;
  //flex: 1;
  max-width: 500px;
  //padding-top: 0;
  //padding-left: 100px;
  //padding-right: 100px;
  //padding-bottom: 60px;
  //background-color: red;
  width: 100%;
  justify-content: center;
  align-self: center;
  //background-color: grey;
  border-radius: 5%;
  padding: 15px;
  //box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.2);
`;
const ImgWrap = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
  background-color: red;
`;

class Experience extends Component {
  constructor(props) {
    super(props);
    this.experienceDetails = [
      {
        projectName: "RMate",
        projectDesc:
          "IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
        projectType: "iOS/Android App",
        roles: ["Mobile Developer"],
        image: AppStoreImage,
        deviceImages: [RMateImage2],
        link: "https://apps.apple.com/us/app/rmate/id1418361482",
        imgStart: false,
      },
      {
        projectName: "Notflix",
        projectDesc: "Netflix/Youtube hybrid web app. ",
        projectType: "Web App",
        roles: ["Front-end Developer"],
        image: NotflixLink,
        deviceImages: [NotflixImage1],
        link2: ["https://github.com/kadey001/Notflix"],
        link: "https://notflix.tech",
        imgStart: false,
      },
    ];
  }

  renderContent() {
    return (
      <>
        {this.experienceDetails.map((experiences) => (
          <div>
            <InfoContainer key={experiences} id={"experience"}>
              <InfoWrapper>
                <InfoRow imgStart={experiences.imgStart}>
                  <Column1>
                    <TextWrapper>
                      <TextContent
                        projectName={experiences.projectName}
                        projectDesc={experiences.projectDesc}
                        projectType={experiences.projectType}
                        roles={experiences.roles}
                        image={experiences.image}
                        link={experiences.link}
                      />
                      <ImageBox>
                        <a href={experiences.link}>
                          <img src={experiences.image} height={"100px"} />
                        </a>
                      </ImageBox>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImageContent deviceImages={experiences.deviceImages} />
                  </Column2>
                </InfoRow>
              </InfoWrapper>
            </InfoContainer>
          </div>
        ))}
      </>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Experience;
