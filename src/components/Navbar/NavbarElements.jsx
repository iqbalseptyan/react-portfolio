import styled from "styled-components";
import { Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--white-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);

  @media ${device.laptop} {
    top: 0;
    height: var(--header-height-desktop);
  }
`;

export const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    height: var(--header-height-desktop);
  }
`;

export const NavLogo = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: var(--small-font-size);
  color: var(--black-color);
  font-weight: var(--font-medium);
  &:hover {
    color: var(--dark-purple-color);
  }

  @media ${device.laptop} {
    font-size: var(--h2-font-size);
  }
`;

export const NavGridList = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  position: fixed;
  bottom: ${(props) => (props.show ? 0 : "-100%")};
  left: 0;
  width: 100%;
  background-color: var(--white-color);
  padding: 2rem 1.5rem 4rem;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s ease;

  @media ${device.laptop} {
    position: relative;
    bottom: unset;
    left: unset;
    width: 70%;
    background-color: unset;
    padding: unset;
    box-shadow: unset;
    border-radius: unset;
  }
`;

export const NavItem = styled.li`
  text-decoration: none;
  cursor: pointer;
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 80px;

    &:hover {
      border-bottom: 7px solid var(--dark-purple-color);
      border-radius: 10px 10px;
      transition: 0.2s;
    }
  }
`;

export const NavLinks = styled(NavLogo)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavToggle = styled.a`
  display: flex;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavClose = styled.a`
  position: absolute;
  right: 1.8rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: var(--dark-purple-color);
  }

  @media ${device.laptop} {
    display: none;
  }
`;
