import styled from "styled-components";
import { device } from "../MediaQueries";
import { Container, Grid } from "../GlobalElements";

export const FooterSection = styled.footer`
  padding: 2rem 0;
  background-color: var(--dark-purple-color);
`;

export const ContainerFooter = styled(Container)`
  color: var(--white-color);
`;

export const FooterWrapper = styled(Grid)`
  row-gap: 0;
  @media ${device.laptop} {
    grid-template-areas: "Titles Links" "Copyright Socials";
  }
`;

export const FooterTitles = styled.div`
  text-align: center;

  @media ${device.laptop} {
    grid-area: Titles;
    align-self: center;
  }
`;

export const FooterTitle = styled.h1`
  font-size: var(--h2-font-size);
  @media ${device.tablet} {
    font-size: var(--h1-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--big-font-size);
  }
`;

export const FooterSubtitle = styled.small`
  display: block;
  margin-bottom: var(--mb-3);
  font-size: var(--smaller-font-size);

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }

  @media ${device.laptop} {
    display: unset;
    font-size: var(--normal-font-size);
  }
`;

export const FooterLinkMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 0.3fr);
  text-align: center;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-area: Links;
  }
`;

export const FooterLinks = styled.li`
  text-decoration: none;
  display: block;
`;

export const FooterLink = styled.a`
  cursor: pointer;
  font-size: var(--small-font-size);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h3-font-size);

    &:hover {
      color: var(--dark-color);
    }
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 4rem;

  @media ${device.laptop} {
    grid-area: Socials;
    align-self: end;
  }
`;

export const FooterSocial = styled.div`
  font-size: 1.25rem;

  @media ${device.laptop} {
    font-size: var(--big-font-size);
  }
`;

export const FooterIcon = styled.a`
  cursor: pointer;
  color: var(--white-color);

  @media ${device.laptop} {
    &:hover {
      color: var(--dark-color);
    }
  }
`;

export const FooterCopyright = styled.small`
  font-size: var(--smaller-font-size);
  text-align: center;

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    grid-area: Copyright;
    align-self: center;
    font-size: var(--normal-font-size);
  }
`;
