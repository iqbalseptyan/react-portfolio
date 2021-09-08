import styled from "styled-components";
import { Grid } from "../GlobalElements";
import { device } from "../MediaQueries";
import { Link as scroll } from "react-scroll";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.txtFirst};
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

export const NavLogo = styled(scroll)`
  text-decoration: none;
  cursor: pointer;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.txtThird};
  }
  @media ${device.laptop} {
    font-size: var(--h2-font-size);
  }
`;

export const NavGridList = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  position: fixed;
  bottom: ${(props) => (props.show ? 0 : "-100%")};
  left: 0;
  background-color: ${(props) => props.theme.bg};
  padding: 2rem 1.5rem 4rem;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 1rem 1rem 0 0;
  transition: 0.3s;
  width: 100%;
  @media ${device.laptop} {
    position: initial;
    display: flex;
    bottom: unset;
    left: unset;
    width: min-content;
    background-color: unset;
    padding: unset;
    box-shadow: unset;
    border-radius: unset;
  }
`;

export const NavItem = styled.li`
  text-decoration: none;
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    height: inherit;
  }
`;

export const NavLinks = styled(NavLogo)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.1s;
  &:hover {
    color: ${(props) => props.theme.txtThird};
    border-bottom: 7px solid ${(props) => props.theme.txtThird};
    border-radius: 10px 10px;
  }
  &.active {
    color: ${(props) => props.theme.txtThird};
    border-bottom: 7px solid ${(props) => props.theme.txtThird};
    border-radius: 10px 10px;
  }
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavToggleTheme = styled.div`
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    height: var(--header-height-desktop);
    &:hover {
      transform: scale(1.5);
    }
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

export const ToggleMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 0.5rem;
`;
