import React, { useState } from "react";
import { Container, Grid } from "../GlobalElements";
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
} from "./NavbarElements";
import {
  FaBriefcase,
  FaFileAlt,
  FaFileImage,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { MdApps, MdClose, MdMessage } from "react-icons/md";

const Navbar = () => {
  // toggle menu
  const [toggle, setToggle] = useState(false);

  return (
    <Header>
      <Container>
        <Nav>
          <NavLogo>Iqbal Septyan</NavLogo>
          <NavMenu show={toggle}>
            <Grid>
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
            </Grid>
          </NavMenu>
          <NavToggle onClick={() => setToggle(true)}>
            <MdApps />
          </NavToggle>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
