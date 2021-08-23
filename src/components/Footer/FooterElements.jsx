import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";

export const FooterSection = styled.footer`
  padding: 2rem 0 4rem;
`;

export const ContainerFooter = styled(Container)`
  color: var(--black-color);
`;

export const FooterWrapper = styled(Grid)`
  row-gap: 1rem;
`;

export const FooterTitle = styled.h1`
  font-size: var(--h1-font-size);
  /* margin-bottom: var(--mb-0-25); */
  text-align: center;
`;

export const FooterSubtitle = styled.small`
  display: block;
  margin-bottom: var(--mb-3);
  text-align: center;
  font-size: var(--small-font-size);
`;

export const FooterLinkMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  list-style-type: none;
  justify-content: center;
  align-items: center;
`;

export const FooterLinks = styled.li`
  text-decoration: none;
  display: block;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  &:hover {
    color: var(--dark-purple-color);
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 4rem;
`;

export const FooterSocial = styled.div`
  font-size: 1.25rem;
`;

export const FooterIcon = styled.a`
  cursor: pointer;
  color: var(--black-color);

  &:hover {
    color: var(--dark-purple-color);
  }
`;

export const FooterCopyright = styled.div`
  font-size: var(--smaller-font-size);
  text-align: center;
  padding: 1rem;
`;