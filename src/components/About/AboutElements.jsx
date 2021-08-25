import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerAbout = styled(Container)`
  color: var(--black-color);
  @media ${device.laptopL} {
    max-width: 1366px;
  }

  @media ${device.laptop} {
    max-width: 1024px;
  }
`;

export const AboutWrapper = styled(Grid)`
  grid-template-areas: "col1 col2";
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1023px) {
    row-gap: 2.5rem;
  }
`;

export const AboutCol1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: col1;
`;

export const AboutCol2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  grid-area: col2;
`;

export const AboutImg = styled.img`
  display: flex;
  border-radius: 0.625rem;

  margin: auto;
  alt: "Iqbal Septyan";

  @media (max-width: 1023px) {
    width: 200px;
  }
`;

export const AboutDescription = styled.p`
  color: var(--grey-color);
  font-size: var(--h2-font-size);

  text-align: left;

  @media ${device.tablet} {
    text-align: center;
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
  font-size: var(--normal-font-size);
  width: 120px;
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
