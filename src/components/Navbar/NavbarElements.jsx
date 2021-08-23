import styled from "styled-components";
import { Grid } from "../GlobalElements";
// import { device } from "../MediaQueries";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--white-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
`;

export const Nav = styled.nav`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const NavMenu = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    bottom: ${(props) => (props.show ? 0 : "-100%")};
    left: 0;
    width: 100%;
    background-color: var(--white-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1rem 1rem 0 0;
    transition: 0.3s;
  }
`;

export const NavGridList = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const NavItem = styled.li`
  text-decoration: none;
`;

export const NavLinks = styled(NavLogo)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavIcon = styled.div`
  font-size: 1.2rem;
`;

export const NavToggle = styled(NavLogo)`
  font-size: 1.1rem;
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
`;
