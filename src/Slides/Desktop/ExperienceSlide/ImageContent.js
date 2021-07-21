import React, { Component } from "react";
import styled from "styled-components";
import iPhoneImage from "/Users/alexkevakian/portfolio/src/Assets/Images/RMate/iPhone2.png";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  //margin-left: 50%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  //flex-flow: column nowrap;
  justify-content: center;
  //background-color: black;
`;
const ImageBox = styled.div`
  position: relative;
  align-self: center;
`;
class ImageContent extends Component {
  render() {
    const { pageSplitTimes } = this.props;

    return (
      <ImageContainer>
        <ImageBox>
          <img src={iPhoneImage} height="1000vh" />
        </ImageBox>
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
