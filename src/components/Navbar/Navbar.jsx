import React, { useState } from "react";
import { Container } from "../GlobalElements";
import {
  Header,
  Nav,
  NavClose,
  NavIcon,
  NavItem,
  NavLinks,
  NavGridList,
  NavLogo,
  NavMenu,
  NavToggle,
  NavToggleTheme,
  ToggleMenu,
} from "./NavbarElements";
import {
  FaBriefcase,
  FaFileAlt,
  FaFileImage,
  FaHome,
  FaLightbulb,
  FaRegLightbulb,
  FaUser,
} from "react-icons/fa";
import { MdApps, MdClose, MdMessage } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
const Navbar = (props) => {
  // toggle menu
  const [toggle, setToggle] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Header>
      <Container>
        <Nav>
          <NavLogo to="/" onClick={toggleHome}>
            Iqbal Septyan
          </NavLogo>
          <NavMenu show={toggle}>
            <NavGridList>
              <NavItem>
                <NavLinks
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={700}
                >
                  <NavIcon>
                    <FaHome />
                  </NavIcon>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  <NavIcon>
                    <FaUser />
                  </NavIcon>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  <NavIcon>
                    <FaFileAlt />
                  </NavIcon>
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  <NavIcon>
                    <FaBriefcase />
                  </NavIcon>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  <NavIcon>
                    <FaFileImage />
                  </NavIcon>
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  <NavIcon>
                    <MdMessage />
                  </NavIcon>
                  Contact
                </NavLinks>
              </NavItem>

              <NavClose onClick={() => setToggle(false)}>
                <MdClose />
              </NavClose>
            </NavGridList>
          </NavMenu>
          <ToggleMenu>
            <NavToggleTheme onClick={props.handler}>
              <NavIcon style={{ display: "inline" }}>
                {props.toggleTheme ? <FaRegLightbulb /> : <FaLightbulb />}
              </NavIcon>
            </NavToggleTheme>
            <NavToggle onClick={() => setToggle(true)}>
              <NavIcon>
                <MdApps />
              </NavIcon>
            </NavToggle>
          </ToggleMenu>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
