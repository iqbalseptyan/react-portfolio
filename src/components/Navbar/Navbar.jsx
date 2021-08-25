import React, { useState } from "react";
import {
  Header,
  Nav,
  NavClose,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavToggle,
  NavText,
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
  const [toggle, setToggle] = useState(false);

  return (
    <Header>
      <Nav>
        <NavLogo>Iqbal Septyan</NavLogo>
        <NavMenu show={toggle}>
          <NavItem>
            <NavLinks>
              <NavIcon>
                <FaHome />
              </NavIcon>
              <NavText>Home</NavText>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>
              <NavIcon>
                <FaUser />
              </NavIcon>
              <NavText>About</NavText>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>
              <NavIcon>
                <FaFileAlt />
              </NavIcon>
              <NavText>Skills</NavText>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>
              <NavIcon>
                <FaBriefcase />
              </NavIcon>
              <NavText>Services</NavText>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>
              <NavIcon>
                <FaFileImage />
              </NavIcon>
              <NavText>Portfolio</NavText>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>
              <NavIcon>
                <MdMessage />
              </NavIcon>
              <NavText>Contact</NavText>
            </NavLinks>
          </NavItem>
          <NavClose onClick={() => setToggle(false)}>
            <MdClose />
          </NavClose>
        </NavMenu>
        <NavToggle onClick={() => setToggle(true)}>
          <MdApps />
        </NavToggle>
      </Nav>
    </Header>
  );
};

export default Navbar;
