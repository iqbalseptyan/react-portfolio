import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { ReactComponent as Blob } from "../../images/iqbal.svg";
import { device } from "../MediaQueries";

export const ContainerHome = styled(Container)`
  gap: 1rem;
`;

export const HomeWrapper = styled(Grid)`
  grid-template-columns: 0.5fr auto;
  padding-top: 3.5rem;
  align-items: center;

  @media ${device.laptop} {
    grid-template-areas: "Col1 Col2 Col3";
  }
`;

export const HomeSocial = styled(Grid)`
  @media ${device.laptop} {
    grid-area: Col1;
  }
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

export const HomeLinks = styled.a`
  cursor: pointer;
  font-size: var(--h2-font-size);
  color: var(--dark-purple-color);

  @media ${device.tablet} {
    font-size: var(--h1-font-size);
  }

  @media ${device.laptop} {
    font-size: var(--big-font-size);
    color: ${(props) => props.theme.txtFirst};

    &:hover {
      color: ${(props) => props.theme.txtThird};
    }
  }
`;

export const BlobImg = styled(Blob)`
  fill: ${(props) => props.theme.txtThird};
  height: 100%;
  width: 200px;

  @media ${device.laptop} {
    width: 400px;
    grid-area: Col3;
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  @media ${device.laptop} {
    grid-column: unset;
    grid-area: Col2;
  }
`;

export const HomeTitle = styled.h1`
  font-size: var(--h1-font-size);

  @media ${device.tablet} {
    font-size: var(--big-font-size);
  }
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

export const HomeSubtitle = styled.p`
  font-size: var(--small-font-size);
  color: ${(props) => props.theme.txtSecond};
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--big-font-size);
  }
`;

export const HomeDescription = styled.p`
  color: ${(props) => props.theme.txtSecond};
  margin-bottom: var(--mb-2);
  font-size: var(--smaller-font-size);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h1-font-size);
  }
`;
