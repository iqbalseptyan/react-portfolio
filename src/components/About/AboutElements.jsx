import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerAbout = styled(Container)`
  //hmm
`;

export const AboutWrapper = styled(Grid)`
  row-gap: 2.5rem;

  @media ${device.laptop} {
    grid-template-areas: "Col1 Col2";
  }
`;

export const Col1 = styled.div`
  @media ${device.laptop} {
    grid-area: Col1;
  }
`;
export const Col2 = styled.div`
  @media ${device.laptop} {
    grid-area: Col2;
  }
`;

export const AboutImg = styled.img`
  display: flex;
  border-radius: 0.625rem;
  width: 200px;
  margin: auto;
  alt: "Iqbal Septyan";

  @media ${device.laptop} {
    width: 400px;
  }
`;

export const AboutDescription = styled.p`
  color: ${(props) => props.theme.txtSecond};
  text-align: center;
  font-size: var(--small-font-size);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.laptop} {
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-2);
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
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);

  @media ${device.tablet} {
    font-size: var(--h2-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--big-font-size);
  }
`;

export const AboutInfoSubTitle = styled.p`
  color: ${(props) => props.theme.txtSecond};
  font-size: var(--smaller-font-size);
  width: 100px;
  word-wrap: break-word;

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--normal-font-size);
    width: 120px;
  }
`;
