import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const TextContainer = styled.div`
  //display: flex;
  // flex: 1;
  // flex-flow: column nowrap;
  //height: 100vh;
  width: 100%;
  background-color: red;
  //justify-content: center;
  //align-items: center;
  //padding-left: 100px;
  // flex-direction: column;
`;
const TextBox = styled.div`
  color: black;
  //width: 50%;
  //max-width: 50vh;
  display: flex;
  //flex: 1;
  //flex-flow: column nowrap;
  flex-direction: column;
  //justify-content: center;
  //align-self: center;
  font-size: 30px;
`;
const ProjectName = styled.div`
  font-family: "AvenirHeavy";
  @media ${device.laptop} {
    font-size: 70px;
  }
  @media ${device.laptopL} {
    font-size: 80px;
  }
  @media ${device.desktop} {
    font-size: 120px;
  }
`;
const Button = styled.div`
  display: flex;
`;
class TextContent extends Component {
  render() {
    const { projectName, image, link, projectDesc, roles, projectType } =
      this.props;
    return (
      <TextBox>
        <ProjectName>
          <span>{projectName}</span>
        </ProjectName>

        <span>{roles}</span>
        <span>{projectDesc}</span>
        <span>{projectType}</span>
      </TextBox>
    );
  }
}
TextContent.propTypes = {
  projectName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
};
export default TextContent;
