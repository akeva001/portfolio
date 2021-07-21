import React, { Component } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

class Experience extends Component {
  constructor(props) {
    super(props);
    this.experienceDetails = [
      {
        number: "1",
        projectName: "RMate",
        projectDesc:
          "IOS and Android mobile application aimed at organizing and optimizing your access to student tools. Intended for students enrolled at University of California, Riverside.",
        projectType: "iOS/Android App",
        roles: ["Mobile Developer"],
      },
      {
        number: "2",
        projectName: "Notflix",
        projectDesc: "Netflix/Youtube hybrid web app",
        projectType: "Web App",
        roles: ["Front-end Developer"],
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
              projectDesc={experiences.projectDesc}
              projectType={experiences.projectType}
              roles={experiences.roles}
            />{" "}
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <Container>
        {this.renderText()}
        <ImageContent />
      </Container>
    );
  }
}

export default Experience;
