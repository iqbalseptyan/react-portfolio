import styled from "styled-components";
import { device } from "../MediaQueries";
import { Container, Grid } from "../GlobalElements";

export const FooterSection = styled.footer`
  padding: 2rem 0 4rem;
  background-color: var(--dark-purple-color);
`;

export const ContainerFooter = styled(Container)`
  color: var(--white-color);
`;

export const FooterWrapper = styled(Grid)`
  row-gap: 0;
`;

export const FooterTitle = styled.h1`
  font-size: var(--h2-font-size);
  text-align: center;
`;

export const FooterSubtitle = styled.small`
  display: block;
  margin-bottom: var(--mb-3);
  text-align: center;
  font-size: var(--smaller-font-size);
`;

export const FooterLinkMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: var(--mb-1);
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
  font-size: var(--small-font-size);

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
  color: var(--white-color);

  &:hover {
    color: var(--dark-purple-color);
  }
`;

export const FooterCopyright = styled.small`
  font-size: var(--smaller-font-size);
  text-align: center;
`;
