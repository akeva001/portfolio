import React, { Component, useEffect } from "react";
import styled from "styled-components";
import iPhoneImage from "../../../Assets/Images/RMate/iPhone2.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
`;
const ImageBox1 = styled.img`
  @media ${device.mobileS} {
    height: 170px;
  }
  @media ${device.mobileM} {
    height: 200px;
  }
  @media ${device.mobileL} {
    height: 230px;
  }
  @media ${device.tablet} {
    height: 320px;
  }
  @media ${device.laptop} {
    height: 320px;
  }
  @media ${device.laptopM} {
    height: 320px;
  }
  @media ${device.laptopL} {
    height: 300px;
  }
  @media ${device.desktop} {
    height: 320px;
  }
`;
const ImageBox2 = styled.img`
  margin-top: 30px;

  @media ${device.mobileS} {
    height: 270px;
  }
  @media ${device.mobileM} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 330px;
  }
  @media ${device.tablet} {
    height: 420px;
  }
  @media ${device.laptop} {
    height: 420px;
  }
  @media ${device.laptopM} {
    height: 420px;
  }
  @media ${device.laptopL} {
    height: 400px;
  }
  @media ${device.desktop} {
    height: 400px;
  }
`;

class SliderImageContent extends Component {
  render() {
    const { deviceImages } = this.props;
    console.log(deviceImages);
    return (
      <ImageContainer>
        {deviceImages.length > 1 ? (
          <>
            {deviceImages.map((image, index) => (
              <ImageBox2 src={image} />
            ))}
          </>
        ) : (
          <>
            {deviceImages.map((image, index) => (
              <ImageBox1 src={image} />
            ))}
          </>
        )}
      </ImageContainer>
    );
  }
}

SliderImageContent.propTypes = {
  deviceImages: PropTypes.array.isRequired,
};

export default SliderImageContent;
