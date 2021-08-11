import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavRightPlaceholder,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="home"
            smooth={true}
            duration={600}
            spy={true}
            offset={-44}
          >
            AK{" "}
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                //activeClass={active}
                offset={-44}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={600}
                spy={true}
                //activeClass={active}
                offset={-44}
              >
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={600}
                spy={true}
                //activeClass={active}
                offset={-44}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={600}
                spy={true}
                //activeClass={active}
                offset={-44}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavRightPlaceholder></NavRightPlaceholder>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
