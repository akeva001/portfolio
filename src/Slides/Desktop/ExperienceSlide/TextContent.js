import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const TextContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  /* border: 1px dashed black; */
  height: 100vh;
  width: 100%;
  background-color: grey;
`;

class TextContent extends Component {
  render() {
    const { projectName, projectDesc, roles, projectType } = this.props;
    return (
      <TextContainer>
        <span>{projectName}</span>
        <span>{roles}</span>
        <span>{projectDesc}</span>
        <span>{projectType}</span>
      </TextContainer>
    );
  }
}
TextContent.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
};
export default TextContent;
