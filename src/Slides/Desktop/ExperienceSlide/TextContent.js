import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const TextContainer = styled.div`
  max-width: 100%;
  background-color: red;
`;
const TextBox = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 30px;
`;
const ProjectName = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
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
    const {
      projectName,
      projectYear,
      image,
      link,
      projectDesc,
      roles,
      projectType,
    } = this.props;
    return (
      <TextBox>
        <ProjectName>
          <span>{projectName}</span>
          <span style={{ fontSize: "30px" }}>{projectYear}</span>
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
  projectYear: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
};
export default TextContent;
