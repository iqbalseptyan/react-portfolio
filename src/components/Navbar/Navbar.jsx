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

const Navbar = (props) => {
  // toggle menu
  const [toggle, setToggle] = useState(false);

  return (
    <Header>
      <Container>
        <Nav>
          <NavLogo>Iqbal Septyan</NavLogo>
          <NavMenu show={toggle}>
            <NavGridList>
              <NavItem>
                <NavLinks>
                  <NavIcon>
                    <FaHome />
                  </NavIcon>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <NavIcon>
                    <FaUser />
                  </NavIcon>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <NavIcon>
                    <FaFileAlt />
                  </NavIcon>
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <NavIcon>
                    <FaBriefcase />
                  </NavIcon>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <NavIcon>
                    <FaFileImage />
                  </NavIcon>
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
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
              <NavIcon style={{ display: "initial" }}>
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
