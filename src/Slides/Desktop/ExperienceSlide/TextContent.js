import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const TextContainer = styled.section`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  height: 100vh;
  //width: 50%;
  //background-color: grey;
  justify-content: center;
  //align-items: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  //background-color: red;
  width: 50vw;
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
`;
class TextContent extends Component {
  render() {
    const { projectName, image, link, projectDesc, roles, projectType } =
      this.props;
    return (
      <TextContainer>
        <TextBox>
          <span>{projectName}</span>
          <a href={link}>
            <img src={image} height="50vh" />
          </a>
          <span>{roles}</span>
          <span>{projectDesc}</span>
          <span>{projectType}</span>
        </TextBox>
      </TextContainer>
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
