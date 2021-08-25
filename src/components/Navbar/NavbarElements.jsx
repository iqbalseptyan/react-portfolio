import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const Header = styled(Container)`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: var(--z-fixed);
  right: 0;
  left: 0;
  background-color: var(--white-color);
  /* box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15); */
  /* box-shadow: 0 1px rgba(0, 0, 0, 0.15); */

  top: 0;
  /* margin: 0; */
  max-height: 1366px;
  padding: var(--mb-2);
  height: var(--header-height-laptop);

  @media (max-width: 1023px) {
    bottom: 0;
  }
`;

export const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: inherit;
  /* border: 2px solid green; */
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
    position: fixed;
    left: 0;
    width: 100%;
    background-color: var(--white-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1rem 1rem 0 0;
    transition: 0.3s;
    bottom: ${(props) => (props.show ? 0 : "-100%")};
  }

  @media ${device.mobileM} {
    padding: 2rem 0.25rem 4rem;
  }
`;

export const NavItem = styled.li`
  display: inline;
`;

export const NavGridList = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.laptop} {
    column-gap: 0;
    grid-template-columns: auto auto auto auto;
  }

  @media ${device.mobileM} {
    column-gap: 0;
  }
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
