import React, { Component, useState } from "react";
import NameAndTitle from "./NameAndTitle";
import About from "./About";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  padding-bottom: 100px;
  flex-direction: column;
  background-color: rgb(242, 242, 242);
  margin-bottom: 30px;
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
