import styled from "styled-components";
import { Container } from "../GlobalElements";
import { device } from "../MediaQueries";

export const FooterSection = styled.footer`
  padding: 2rem 0 2rem;
  background-color: var(--dark-purple-color);
`;

export const ContainerFooter = styled(Container)`
  color: var(--white-color);
  background-color: var(--dark-purple-color);

  @media ${device.tablet} {
    max-width: 600px;
    margin-bottom: var(--header-height);
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: auto 1fr;

  @media ${device.mobileM} {
    row-gap: var(--mb-1);
  }
`;

export const GridItem = styled.div`
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const FooterTitle = styled.h1`
  font-size: var(--h1-font-size);
  text-align: center;

  @media ${device.tablet} {
    font-size: var(--h1-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--h2-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--h3-font-size);
  }
`;

export const FooterSubtitle = styled.small`
  display: block;

  text-align: center;
  font-size: var(--normal-font-size);

  @media ${device.tablet} {
    margin-bottom: var(--mb-3);
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const FooterLinkMenu = styled.ul`
  align-items: center;
  columns: 3;

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
    columns: 2;
  }

  @media ${device.mobileL} {
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--small-font-size);
  }
`;

export const FooterLinks = styled.li`
  text-decoration: none;
  display: block;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  &:hover {
    color: var(--dark-color);
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 200px;
`;

export const FooterSocial = styled.div`
  font-size: 1.25rem;
`;

export const FooterIcon = styled.a`
  cursor: pointer;
  color: var(--white-color);

  &:hover {
    color: var(--dark-color);
  }

  @media ${device.tablet} {
    font-size: var(--h1-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--h2-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--h3-font-size);
  }
`;

export const FooterCopyright = styled.small`
  font-size: var(--small-font-size);
  text-align: center;
  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;
