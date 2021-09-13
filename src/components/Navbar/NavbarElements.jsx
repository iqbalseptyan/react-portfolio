import styled, { keyframes } from "styled-components";
import { Grid } from "../GlobalElements";
import { device } from "../MediaQueries";
import { Link as scroll } from "react-scroll";

const navLinkLoad = keyframes`
  from {
    transform: scale(0);
  }
  80%{
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`;

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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
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

  animation-name: ${navLinkLoad};
  animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  transform: scale(0);

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
  z-index: 1;
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
  animation-name: ${navLinkLoad};
  animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
  transform: scale(0);
  height: 50px;
  @media ${device.laptop} {
    &:nth-child(2) {
      animation-delay: 800ms;
    }
    &:nth-child(3) {
      animation-delay: 900ms;
    }
    &:nth-child(4) {
      animation-delay: 1000ms;
    }
    &:nth-child(5) {
      animation-delay: 1100ms;
    }
    &:nth-child(6) {
      animation-delay: 1200ms;
    }
    display: flex;
    align-items: center;
    height: inherit;
  }
`;

export const NavLinks = styled(NavLogo)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  &.active {
    color: ${(props) => props.theme.txtThird};
    border-bottom: 4px solid ${(props) => props.theme.txtThird};
    border-radius: 10px 10px;
  }
  @media ${device.laptop} {
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
  }
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavToggleTheme = styled.div`
  transition: 0.3s;
  animation-name: ${navLinkLoad};
  animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
  transform: scale(0);
  cursor: pointer;
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    height: var(--header-height-desktop);
    animation-delay: 1300ms;
    &:hover {
    }
  }
`;

export const NavToggle = styled.a`
  display: flex;
  cursor: pointer;
  animation-name: ${navLinkLoad};
  animation-duration: 300ms;
  animation-timing-function: ease-in;
  animation-delay: 900ms;
  animation-fill-mode: forwards;
  transform: scale(0);
  @media ${device.laptop} {
    display: none;
  }
`;

export const NavClose = styled.a`
  position: absolute;
  right: 1.8rem;
  bottom: 0.4rem;
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
