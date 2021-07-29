import React, { Component } from "react";
import styled from "styled-components";
import GithubImg from "../../../Assets/Images/Sites/Git.png";
import LinkedinImg from "../../../Assets/Images/Sites/linkedin-logo.png";
import EmailImg from "../../../Assets/Images/Sites/email.png";
import ResumeImg from "../../../Assets/Images/Sites/resume.png";

const Container = styled.section`
  display: flex;
  min-height: calc(50vh - 80px);
  justify-content: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  //background: green;
`;

const ContactWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  font-family: "AvenirLight";
  //text-align: left;
  //margin-left: 30%;
  //margin-right: 5%;
  font-size: 45px;
  min-width:1000px;

  
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container id={"contact"}>
        <ContactWrapper>
          <a
            style={{ display: "table-cell" }}
            href={"https://github.com/akeva001"}
            target="_blank"
          >
            <img src={GithubImg} height={"100px"} />
          </a>
          <a
            style={{ display: "table-cell" }}
            href={"https://www.linkedin.com/in/alexkevakian/"}
            target="_blank"
          >
            <img src={LinkedinImg} height={"100px"} />
          </a>
          <img src={EmailImg} height={"100px"} />
          <img src={ResumeImg} height={"100px"} />
        </ContactWrapper>
      </Container>
    );
  }
}

export default Contact;
