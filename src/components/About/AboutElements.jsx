import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerAbout = styled(Container)`
  color: var(--black-color);
`;

export const AboutWrapper = styled(Grid)`
  row-gap: 2.5rem;
`;

export const AboutImg = styled.img`
  display: flex;
  border-radius: 0.625rem;
  width: 200px;
  margin: auto;
  alt: "Iqbal Septyan";
`;

export const AboutDescription = styled.p`
  color: var(--grey-color);
  text-align: center;

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--small-font-size);
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AboutInfoWrapper = styled.div`
  text-align: center;
`;

export const AboutInfoTitle = styled.h1`
  font-size: var(--h1-font-size);
  font-weight: var(--font-semi-bold);

  @media ${device.tablet} {
    font-size: var(--medium-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--h1-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--h2-font-size);
  }
`;

export const AboutInfoSubTitle = styled.p`
  color: var(--grey-color);
  font-size: var(--small-font-size);
  width: 100px;
  word-wrap: break-word;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;
