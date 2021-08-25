import styled from "styled-components";
import { Container } from "../GlobalElements";
import { device } from "../MediaQueries";

export const Header = styled(Container)`
  display: flex;
  position: fixed;
  z-index: var(--z-fixed);

  @media ${device.tablet} {
    height: var(--header-height);
    padding: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media ${device.laptop} {
    max-width: 1366px;
    height: var(--header-height-laptop);
    top: 0;
    bottom: unset;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: inherit;

  @media ${device.tablet} {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  @media ${device.laptop} {
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);
  }
`;

export const NavLogo = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: var(--h1-font-size);
  color: var(--black-color);
  font-weight: var(--font-semi-bold);
  &:hover {
    color: var(--dark-purple-color);
  }

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 50%;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--mb-1);
    position: fixed;
    width: inherit;
    background-color: var(--white-color);
    padding: 2rem 2rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1rem 1rem 0 0;
    transition: 0.3s;
    left: 0;
    bottom: ${(props) => (props.show ? 0 : "-100%")};
  }

  @media ${device.mobileM} {
    padding: 2rem 0.25rem 4rem;
  }
`;

export const NavItem = styled.li`
  display: inline;
`;

export const NavLinks = styled(NavLogo)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    display: inline;
  }
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavText = styled.h1`
  font-size: var(--normal-font-size);
`;

export const NavToggle = styled(NavLogo)`
  font-size: 1.1rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavClose = styled.a`
  position: absolute;
  right: 1.3rem;
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
