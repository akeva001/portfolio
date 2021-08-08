import React, { Component } from "react";
import styled from "styled-components";
import GithubImg from "../../../Assets/Images/Sites/Git.png";
import LinkedinImg from "../../../Assets/Images/Sites/linkedin-logo.png";
import EmailImg from "../../../Assets/Images/Sites/email.png";
import ResumeImg from "../../../Assets/Images/Sites/resume.png";
import EmailForm from "../../../EmailForm";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  //width: 100%;
  min-height: calc(100vh - 44px);
  max-width: 1380px;
  //position: relative;
  background-color: rgb(242, 242, 242);
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 12px;
  align-items: center;
  align-self: center;
  font-family: "AvenirLight";
  text-align: center;
  font-size: 45px;
  min-width:25vw;
  padding-top: 40px;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container id={"contact"}>
        <EmailForm />
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
          <a
            style={{ display: "table-cell" }}
            href={"mailto:" + "alexkevakian@gmail.com"}
            target="_blank"
          >
            <img src={EmailImg} height={"100px"} />
          </a>
          <a
            style={{ display: "table-cell" }}
            href={"https://www.linkedin.com/in/alexkevakian/"}
            target="_blank"
          >
            <img src={ResumeImg} height={"100px"} margin-right={"110px"} />
          </a>
        </ContactWrapper>
      </Container>
    );
  }
}

export default Contact;
