import React, { Component } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import GithubImage from "../../../Assets/Images/Sites/Git.png";
import AppStoreImage from "../../../Assets/Images/Sites/AppStore.png";
import RMateImage1 from "../../../Assets/Images/RMate/iPhone1.png";
import RMateImage2 from "../../../Assets/Images/RMate/iPhone2.png";
import RMateImage3 from "../../../Assets/Images/RMate/iPhone3.png";
import NotflixImage1 from "../../../Assets/Images/Notflix/Mac1.png";

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
    padding: 100px 0;
  }
  height: 100%;
`;
const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  //height: 860px;
  width: 100%;
  //max-width: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0 100px;
  justify-content: center;
`;
const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  //grid-gap: 1000px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1100px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15 px;
  grid-area: col1;
  //background-color: green;
  //width: 50vh;
`;
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15 px;
  grid-area: col2;
  //background-color: green;
`;

const TextWrapper = styled.div`
  //display: flex;
  //flex-direction: row;
  flex: 1;
  max-width: 700px;
  //padding-top: 0;
  padding-left: 100px;
  padding-right: 100px;
  //padding-bottom: 60px;
  //background-color: red;
  //width: 100%;
  //justify-content: center;
  //align-self: center;
`;
const ImgWrap = styled.div`
  position: relative;
  max-width: 700px;
  //height: 100%;
`;

class Experience extends Component {
  constructor(props) {
    super(props);
    this.experienceDetails = [
      {
        id: "proj1",
        projectName: "RMate",
        projectDesc:
          "IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
        projectType: "iOS/Android App",
        roles: ["Mobile Developer"],
        image: AppStoreImage,
        deviceImages: [RMateImage2],
        link: "https://apps.apple.com/us/app/rmate/id1418361482",
        imgStart: true,
      },
      {
        id: "proj2",
        projectName: "Notflix",
        projectDesc: "Netflix/Youtube hybrid web app",
        projectType: "Web App",
        roles: ["Front-end Developer"],
        image: GithubImage,
        deviceImages: [NotflixImage1],
        link: ["https://github.com/kadey001/Notflix"],
        link2: "https://notflix.tech",
        imgStart: false,
      },
    ];
  }

  renderImage() {
    return (
      <>
        {this.experienceDetails.map((experiences) => (
          <div>
            <InfoContainer key={experiences}>
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
                      <a href={experiences.link}>
                        <img src={experiences.image} height={"100px"} />
                      </a>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <ImageContent deviceImages={experiences.deviceImages} />
                    </ImgWrap>
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
    return <div>{this.renderImage()}</div>;
  }
}

export default Experience;
