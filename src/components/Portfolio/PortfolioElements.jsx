import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerPortfolio = styled(Container)`
  color: var(--black-color);

  & .swiper-button-prev {
    color: var(--dark-purple-color);
  }

  & .swiper-button-next {
    color: var(--dark-purple-color);
  }

  & .swiper-pagination-bullet-active {
    background-color: var(--dark-purple-color);
  }
`;

export const PortfolioWrapper = styled(Grid)`
  padding-bottom: 2rem;
  @media ${device.laptop} {
    grid-template-areas: "Col1 Col2";
    max-width: 768px;
    align-items: center;
    margin: auto;
  }
`;

export const PortfolioImg = styled.img`
  width: 265px;
  border-radius: 0.5rem;
  justify-self: center;

  @media ${device.laptop} {
    grid-area: Col1;
    width: 400px;
  }
`;

export const PortfolioData = styled.div`
  color: var(--black-color);
  justify-self: center;
  margin-bottom: var(--mb-2);
  @media ${device.laptop} {
    grid-area: Col2;
  }
`;

export const PortfolioTitle = styled.h1`
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-0-5);

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h1-font-size);
  }
`;

export const PortfolioDescription = styled.p`
  color: var(--grey-color);
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-0-75);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h2-font-size);
  }
`;

export const PortfolioLink = styled.div`
  width: min-content;
`;
