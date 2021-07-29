import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  min-height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: hidden;
  //background: green;
`;

const ContactTitle = styled.div.attrs({})`
  align-items: center;
  font-family: "AvenirLight";
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  font-size: 45px;

  
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container id={"contact"}>
        <ContactTitle>CONTACT</ContactTitle>
      </Container>
    );
  }
}

export default Contact;
