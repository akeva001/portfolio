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
  StyledMessage,
  StyledErrorMessage,
} from "./EmailFormElements";

function ContactForm() {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const email = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");

    for (let key in state) {
      if (state[key] === "") {
        if (state[key] === "email") {
          setError(`Please provide an ${key}`);
        } else {
          setError(`Please provide a ${key}`);
        }

        state.emailSent = false;
        console.log(state);
        return;
      }
    }
    setState({
      disabled: true,
    });
    //state.disabled = true;
    //console.log(state);
    setError("");
    fetch(
      `https://server.alexkevakian.com/send-email?recipient=alexkevakian@gmail.com&sender=alexkevakian96@gmail.com&topic=Website Contact-${email.name}&mail=Sender: ${email.email}&text= ${email.message}`
    )
      .then((res) => {
        console.log(res);
        if (res.status) {
          setState({
            disabled: true,
            emailSent: true,
          });

          console.log(state);
        } else {
          setState({
            disabled: false,
            emailSent: false,
          });
          console.log(state);
        }
      })
      .catch((err) => {
        console.error(err);

        setState({
          disabled: false,
          emailSent: false,
        });
        console.log(state);
      });

    //console.log(state);
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
          <Header style={{ paddingBottom: "20px" }}>Contact</Header>
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
          <StyledErrorMessage>
            <StyledMessage>
              {state.emailSent && <p>Email Sent, thanks!</p>}
              {state.disabled === true && !state.emailSent && <p>Sending…</p>}
              {state.emailSent === false && state.disabled === false && (
                <p>Email Not Sent </p>
              )}
              {error && (
                <p style={{ color: "black", paddingRight: "5px" }}>{": "}</p>
              )}
            </StyledMessage>

            <StyledError>
              <p> {error}</p>
            </StyledError>
          </StyledErrorMessage>

          <SubmitWrapper>
            <StyledButton disabled={state.disabled} type="submit">
              Send Message
            </StyledButton>
          </SubmitWrapper>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default ContactForm;
