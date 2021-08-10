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
  padding-top: 50px;
`;
const ExperienceContainer = styled.div`
  background: grey;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: black;
  padding-top: 50px;
`;
const InfoContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  //height: 50%;
  align-self: center;
`;
const InfoWrapper = styled.div`
  display: block;
  justify-content: center;
  max-width: 1380px;
  align-self: center;
  background: red;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  margin-bottom: 30px;
`;
const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1200px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
  box-sizing: border-box;
  overflow: hidden;
  //max-width: 85rem;
  //margin-left: 2%;
  //margin-right: 2%;
  padding: 70px 0px 65px;
  //justify-content: space-evenly;
  align-self: center;
  //background: blue;
  background-color: rgb(242, 242, 242);
`;

const Column1 = styled.div`
  display: flex;
  grid-area: col1;
  justify-content: center;
  align-items: center;
  padding: 30px;
  //width: 50vw;
`;
const Column2 = styled.div`
  display: flex;
  align-items: center;
  grid-area: col2;
  justify-content: center;
  //padding-left: ${({ extraPadding }) => (extraPadding ? "50px" : "0px")};
  //margin-left: 50px;
  //width: 50vw;
`;

const TextWrapper = styled.div`
  flex-direction: row;
  max-width: 600px;
  width: 100%;
  justify-content: center;
  align-self: center;
  padding: 25px;
  border-radius: 10px;
  box-sizing: border-box;
  //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
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
      {
        projectName: "Notflix",
        projectDesc:
          "Netflix/Youtube hybrid web app. IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
        projectType: "Web App",
        roles: ["Front-end Developer"],
        image: NotflixLink,
        deviceImages: [NotflixImage1],
        link2: ["https://github.com/kadey001/Notflix"],
        link: "https://notflix.tech",
        imgStart: true,
      },
      {
        projectName: "Food Recipe",
        projectDesc:
          "Search food recipies. IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
        projectType: "Web App",
        roles: ["Front-end Developer"],
        deviceImages: [FoodImage],
        imgStart: false,
      },
    ];
  }

  renderContent() {
    return (
      <>
        <InfoContainer id={"experience"}>
          {/* <HeaderContainer>Experience</HeaderContainer> */}
          {this.experienceDetails.map((experiences) => (
            <div>
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
            </div>
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
