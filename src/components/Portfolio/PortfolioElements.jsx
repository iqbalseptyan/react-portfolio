import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerPortfolio = styled(Container)`
  & .swiper-button-prev {
    color: ${(props) => props.theme.txtThird};
  }

  & .swiper-button-next {
    color: ${(props) => props.theme.txtThird};
  }

  & .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.txtThird};
  }

  @media ${device.mobileS} {
    & .swiper-button-prev {
      display: none;
    }
    & .swiper-button-next {
      display: none;
    }
  }
  @media ${device.tablet} {
    & .swiper-button-prev {
      display: flex;
    }
    & .swiper-button-next {
      display: flex;
    }
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

export const PortfolioImgWrapper = styled.div`
  display: flex;
  width: 265px;
  height: 225px;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);
  @media ${device.laptop} {
    grid-area: Col1;
    width: 400px;
  }
`;

export const PortfolioImg = styled.img`
  width: 100%;
`;

export const PortfolioData = styled.div`
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
  color: ${(props) => props.theme.txtSecond};
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
