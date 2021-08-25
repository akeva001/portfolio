import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import device from "../Assets/Scaling/DisplaySizes.js";

export const sharedStyles = css`
  //background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 100vh;
  padding: 0 30px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  //margin-top: 50px;
  h2 {
    display: flex;
    justify-content: center;
  }
`;
export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
  height: 1px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
`;

export const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Header = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  font-size: 50px;
  color: black;
  //padding: 25px;

  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 35px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
  @media ${device.desktop} {
    font-size: 80px;
  }
`;
