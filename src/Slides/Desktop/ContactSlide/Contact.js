import React, { Component } from "react";
import styled from "styled-components";
import GithubImg from "../../../Assets/Images/Sites/Git.png";
import LinkedinImg from "../../../Assets/Images/Sites/linkedin-logo.png";
import EmailImg from "../../../Assets/Images/Sites/email.png";
import ResumeImg from "../../../Assets/Images/Sites/resume.png";
import EmailForm from "../../../EmailForm";
import device from "../../../Assets/Scaling/DisplaySizes.js";

const Container = styled.section`
  //position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(242, 242, 242);
  //background-color: green;
  align-self: center;
  padding-bottom: 100px;
  //max-height: calc(100vh - 44px);
  min-height: calc(100vh - 44px);
`;
const Image = styled.img`
  @media ${device.mobileS} {
    height: 40px;
  }
  @media ${device.mobileM} {
    height: 50px;
  }
  @media ${device.mobileL} {
    height: 50px;
  }
  @media ${device.tablet} {
    height: 70px;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  grid-gap: 25px;
  align-items: center;
  align-self: center;
  font-family: "AvenirLight";
  text-align: center;
  max-width: 700px;
  
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
            <Image src={GithubImg} height={"100px"} />
          </a>
          <a
            style={{ display: "table-cell" }}
            href={"https://www.linkedin.com/in/alexkevakian/"}
            target="_blank"
          >
            <Image src={LinkedinImg} height={"100px"} />
          </a>
          <a
            style={{ display: "table-cell" }}
            href={"mailto:" + "alexkevakian@gmail.com"}
            target="_blank"
          >
            <Image src={EmailImg} height={"100px"} />
          </a>
          <a
            style={{ display: "table-cell" }}
            href={"https://www.linkedin.com/in/alexkevakian/"}
            target="_blank"
          >
            <Image src={ResumeImg} height={"100px"} margin-right={"110px"} />
          </a>
        </ContactWrapper>
      </Container>
    );
  }
}

export default Contact;
