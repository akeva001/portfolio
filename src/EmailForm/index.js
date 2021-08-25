import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import device from "../Assets/Scaling/DisplaySizes.js";

import {
  initialState,
  StyledFormWrapper,
  StyledForm,
  Header,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
  SubmitWrapper,
} from "./EmailFormElements";
function ContactForm() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");

    console.log("Succes!");
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <Header style={{ paddingBottom: "30px" }}>Contact</Header>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />

          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />

          <StyledError>
            <p>{error}</p>
          </StyledError>
          <SubmitWrapper>
            <StyledButton type="submit">Send Message</StyledButton>
          </SubmitWrapper>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default ContactForm;
