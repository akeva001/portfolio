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
  flex-direction: column;
  flex-flow: row;
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
      },
      {
        projectName: "Notflix",
        projectDesc: "Netflix/Youtube hybrid web app",
        projectType: "Web App",
        roles: ["Front-end Developer"],
        image: GithubImage,
        deviceImages: [NotflixImage1],
        link: ["https://github.com/kadey001/Notflix"],
        link2: "https://notflix.tech",
      },
    ];
  }

  renderText() {
    return (
      <div>
        {this.experienceDetails.map((experiences) => (
          <div key={experiences}>
            {" "}
            <TextContent
              projectName={experiences.projectName}
              image={experiences.image}
              link={experiences.link}
              projectDesc={experiences.projectDesc}
              projectType={experiences.projectType}
              roles={experiences.roles}
            />{" "}
          </div>
        ))}
      </div>
    );
  }
  renderImage() {
    return (
      <div>
        {this.experienceDetails.map((experiences) => (
          <div key={experiences}>
            {" "}
            <ImageContent deviceImages={experiences.deviceImages} />{" "}
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <Container>
        {this.renderText()}
        {this.renderImage()}
      </Container>
    );
  }
}

export default Experience;
