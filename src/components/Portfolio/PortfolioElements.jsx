import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerPortfolio = styled(Container)`
  color: var(--black-color);
  z-index: 0;
`;

export const PortfolioWrapper = styled(Grid)``;

export const PortfolioImg = styled.img`
  width: 265px;
  border-radius: 0.5rem;
  justify-self: center;
`;

export const PortfolioData = styled.div`
  color: var(--black-color);
  justify-self: center;
  margin-bottom: var(--mb-2);
`;

export const PortfolioTitle = styled.h1`
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-0-5);

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
`;

export const PortfolioDescription = styled.p`
  color: var(--grey-color);
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-0-75);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const PortfolioLink = styled.div`
  width: min-content;
`;

export const SwiperNavigation = styled.div`
  /* display: flex; */
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
  display: none;
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
