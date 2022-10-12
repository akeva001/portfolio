import React, { Component, useEffect } from "react";
import styled from "styled-components";
import iPhoneImage from "../../../Assets/Images/RMate/iPhone2.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  justify-content: center;
  overflow: hidden;
`;
const ImageBox1 = styled.img`
  @media ${device.mobileS} {
    height: 400px;
  }
  @media ${device.mobileM} {
    height: 450px;
  }
  @media ${device.mobileL} {
    height: 550px;
  }
  @media ${device.tablet} {
    height: 550px;
  }
  @media ${device.laptop} {
    height: 600px;
  }
  @media ${device.laptopM} {
    height: 600px;
  }
  @media ${device.laptopL} {
    height: 600px;
  }
  @media ${device.desktop} {
    height: 600px;
  }

  display: flex;
`;

class ImageContent extends Component {
  render() {
    const { deviceImages } = this.props;

    return (
      <ImageContainer>
        <ImageBox1 src={deviceImages} />
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  deviceImages: PropTypes.array.isRequired,
};

export default ImageContent;
