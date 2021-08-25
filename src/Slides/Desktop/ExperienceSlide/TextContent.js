import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const TextContainer = styled.div`
  width: 100%;
  //background-color: red;
  //height: 100vh;
`;
const TextBox = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
  //max-height: 50vh;
  @media ${device.mobileS} {
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const ProjectName = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-weight: lighter;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 35px;
    font-weight: 200;
  }
  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 50px;
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
const ProjectRole = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  padding-top: 20px;
  @media ${device.mobileS} {
    font-size: 17px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 17px;
  }
  @media ${device.laptop} {
    font-size: 17px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const ProjectYear = styled.span`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  padding-top: 17px;

  @media ${device.mobileS} {
    font-size: 17px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 17px;
  }
  @media ${device.laptop} {
    font-size: 17px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;
const ProjectDescription = styled.div`
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  padding-top: 10px;
  //min-height: 100px;
  @media ${device.mobileS} {
    font-size: 17px;
  }
  @media ${device.mobileM} {
    font-size: 17px;
    //min-height: 130px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 17px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 20px;
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
      image2,
      link,
      link2,
      projectDesc,
      roles,
      projectType,
    } = this.props;
    return (
      <TextBox>
        <ProjectName>
          <span>{projectName}</span>
        </ProjectName>
        <ProjectRole>
          <span style={{ fontWeight: "bold" }}>{roles}</span>
          <ProjectYear>{projectYear}</ProjectYear>
        </ProjectRole>

        <ProjectDescription>
          <span>{projectDesc}</span>
        </ProjectDescription>
      </TextBox>
    );
  }
}

export default TextContent;
