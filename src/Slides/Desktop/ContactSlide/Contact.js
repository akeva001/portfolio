import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
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
      <Container>
        <ContactTitle>CONTACT</ContactTitle>
      </Container>
    );
  }
}

export default Contact;
