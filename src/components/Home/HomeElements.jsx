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
`;

export const HomeSocial = styled(Grid)`
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

export const HomeLinks = styled.a`
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--black-color);
  &:hover {
    color: var(--dark-purple-color);
  }
`;

export const BlobImg = styled(Blob)`
  fill: var(--dark-purple-color);
  height: 100%;
  width: 200px;
`;

export const HomeData = styled.div`
  grid-column: 1/3;
`;

export const HomeTitle = styled.h1`
  font-size: var(--h1-font-size);
`;

export const HomeSubtitle = styled.p`
  font-size: var(--small-font-size);
  color: var(--grey-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);
`;

export const HomeDescription = styled.p`
  color: var(--grey-color);
  margin-bottom: var(--mb-2);
  font-size: var(--smaller-font-size);
`;
