import React, { Component } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";

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
      <TextContent
        projectName={this.experienceDetails[0].projectName}
        projectDesc={this.experienceDetails[0].projectDesc}
        projectType={this.experienceDetails[0].projectType}
        roles={this.experienceDetails[0].roles}
      />
    );
  }
  render() {
    return <Container>{this.renderText()}</Container>;
  }
}

export default Experience;
