import React, { Component, useEffect } from "react";
import styled from "styled-components";
import iPhoneImage from "../../../Assets/Images/RMate/iPhone2.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  //display: flex;
  //flex: 1;
  //justify-content: center;
  overflow: hidden;
  //background: red;
  //height: 100%;
`;
const ImageBox1 = styled.img`
  @media ${device.mobileS} {
    height: 200px;
  }
  @media ${device.mobileM} {
    height: 200px;
  }
  @media ${device.mobileL} {
    height: 250px;
  }
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.laptop} {
    height: 400px;
  }
  @media ${device.laptopM} {
    height: 450px;
  }
  @media ${device.laptopL} {
    height: 450px;
  }
  @media ${device.desktop} {
    height: 500px;
  }
`;

class SliderImageContent extends Component {
  render() {
    const { deviceImages } = this.props;

    return (
      <ImageContainer>
        <ImageBox1 src={deviceImages} />
      </ImageContainer>
    );
  }
}

SliderImageContent.propTypes = {
  deviceImages: PropTypes.array.isRequired,
};

export default SliderImageContent;
