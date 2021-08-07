import React, { Component, useState } from "react";
import NameAndTitle from "./NameAndTitle";
import About from "./About";
import styled from "styled-components";

const HeroContainer = styled.div`
  //background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding 0 30px;
  min-height: 100vh;
  //position: relative;
  //z-index: 1;
  padding-bottom: 100px;
  flex-direction: column;
`;

const Hero = () => {
  return (
    <>
      <HeroContainer id={"home"}>
        <NameAndTitle />
      </HeroContainer>
    </>
  );
};

export default Hero;
