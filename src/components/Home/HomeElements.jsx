import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { ReactComponent as Blob } from "../../images/iqbal.svg";
import { device } from "../MediaQueries";

export const ContainerHome = styled(Container)`
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media ${device.laptop} {
    max-width: 1024px;
  }
`;

export const HomeWrapper = styled(Grid)`
  grid-template-areas: "social data blob ";
  grid-template-columns: 0.5fr 3fr auto;
  padding-top: 3.5rem;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 0.5fr auto;
  }
`;

export const HomeSocial = styled(Grid)`
  grid-template-areas: "col1 col1" "col2 col2";
  row-gap: 1rem;

  @media ${device.laptop} {
    grid-area: social;
  }
`;

export const HomeLinks = styled.a`
  cursor: pointer;
  font-size: var(--big-font-size);
  color: var(--black-color);
  &:hover {
    color: var(--dark-purple-color);
  }

  @media ${device.tablet} {
    font-size: var(--h1-font-size);
  }
`;

export const HomeBlob = styled.div`
  margin: auto;

  @media ${device.laptop} {
    grid-area: blob;
  }
`;

export const BlobImg = styled(Blob)`
  fill: var(--dark-purple-color);
  height: 100%;
  width: 400px;

  @media ${device.tablet} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 200px;
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  @media ${device.laptop} {
    grid-area: data;
  }
`;

export const HomeTitle = styled.h1`
  font-size: var(--big-font-size);

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

export const HomeSubtitle = styled.h2`
  font-size: var(--small-font-size);
  color: var(--grey-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);

  @media ${device.tablet} {
    font-size: var(--h2-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--h3-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }
`;

export const HomeDescription = styled.p`
  color: var(--grey-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-2);
  font-size: var(--h2-font-size);

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
