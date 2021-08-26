import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerPortfolio = styled(Container)`
  color: var(--black-color);
  z-index: 0;

  & .swiper-pagination-bullet {
    border-radius: 0.5rem;
  }

  & .swiper-pagination-bullet-active {
    background-color: var(--dark-purple-color);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  @media ${device.tablet} {
    max-width: 600px;
    margin-top: var(--mb-2);
  }
`;

export const PortfolioWrapper = styled(Grid)`
  grid-template-columns: 1fr 2fr;
  padding: 0 2.5rem;
  @media ${device.mobileL} {
    padding: 0;
  }

  @media ${device.tablet} {
    grid-template-areas:
      "col1 col1"
      "col2 col2";
    margin-top: var(--mb-2);
  }
`;

export const PortfolioImg = styled.img`
  border-radius: 0.5rem;
  justify-self: center;

  @media ${device.tablet} {
    width: 265px;
  }
`;

export const PortfolioData = styled.div`
  margin-bottom: var(--mb-2);

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
`;

export const PortfolioTitle = styled.h1`
  color: var(--black-color);
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-5);

  @media ${device.mobileL} {
    font-size: var(--h3-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
`;

export const PortfolioDescription = styled.p`
  color: var(--grey-color);
  margin-bottom: var(--mb-0-75);
  font-size: var(--h3-font-size);

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const PortfolioLink = styled.div`
  width: min-content;
`;

export const SwiperNavigation = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: var(--z-tooltip);

  @media ${device.mobileL} {
    display: none;
  }
`;

export const SwiperButtonPrev = styled.div`
  cursor: pointer;
  left: -0.5rem;
`;

export const SwiperButtonNext = styled.div`
  cursor: pointer;
  right: -0.5rem;
`;

export const SwiperIcon = styled.div`
  font-size: 3rem;
  color: var(--dark-purple-color);
`;
