import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import device from "../Assets/Scaling/DisplaySizes.js";

export const sharedStyles = css`
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

  padding: 0 30px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;

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
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
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

  &:disabled {
    opacity: 0.5;
  }
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
  display: flex;
  color: red;

  margin: 0 0 40px 0;
  height: 1px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
`;
export const StyledMessage = styled.div`
  display: flex;
  color: black;

  margin: 0 0 20px 0;

  height: 1px;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
`;
export const StyledErrorMessage = styled.div`
  display: flex;

  padding-left: 10px;
  margin: 0 0 40px 0;
  height: 10px;

  @media ${device.mobileS} {
    flex-direction: column;
    font-size: 13px;
  }
  @media ${device.mobileM} {
    flex-direction: column;
    font-size: 13px;
  }
  @media ${device.mobileL} {
    flex-direction: row;
    font-size: 14px;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  @media ${device.laptopL} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: row;
  }
`;
export const initialState = {
  name: "",
  email: "",
  message: "",
  disabled: false,
  emailSent: null,
};

export const Header = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  font-size: 50px;
  color: black;

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
