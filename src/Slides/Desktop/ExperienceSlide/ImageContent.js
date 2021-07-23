import React, { Component } from "react";
import styled from "styled-components";
import iPhoneImage from "../../../Assets/Images/RMate/iPhone2.png";
import device from "../../../Assets/Scaling/DisplaySizes.js";
import PropTypes from "prop-types";

const ImageContainer = styled.div`
  //display: flex;
  //flex: 1;
  //flex-flow: column nowrap;
  //height: 100vh;
  width: 100%;
  // background-color: grey;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
  //background: green;

  //overflow: hidden;
`;
const ImageBox1 = styled.img`
  @media ${device.laptop} {
    height: 700px;
  }
  @media ${device.laptopL} {
    height: 800px;
  }
  @media ${device.desktop} {
    height: 1000px;
  }
  //display: flex;
  //justify-content: center;
  //align-self: center;
  // background-color: black;
  // margin: 0 0 10px 0;
  // padding-right: 0;
  //width: 100%;
  //margin: 0 0 10px 0;
  //padding: 60px;
  //overflow: hidden;
`;
const ImageBox = styled.div`
  //background-color: blue;
  //width: 100%;
  max-width: 1000px;
  display: flex;
  //flex: 1;
  //flex-flow: row nowrap;
  //flex-direction: row;
  justify-content: center;
  //padding-left: 100px;
  //overflow: hidden;
`;
class ImageContent extends Component {
  render() {
    const { deviceImages } = this.props;

    return (
      <ImageBox>
        <ImageBox1 src={deviceImages} height="700vh" />
      </ImageBox>
    );
  }
}

ImageContent.propTypes = {
  deviceImages: PropTypes.array.isRequired,
};

export default ImageContent;
