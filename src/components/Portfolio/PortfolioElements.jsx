import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";

export const ContainerPortfolio = styled(Container)``;

export const PortfolioContent = styled(Grid)`
  padding: 0 2.5rem;
`;

export const PortfolioImg = styled.img`
  width: 265px;
  border-radius: 0.5rem;
  justify-self: center;
`;
export const PortfolioData = styled.div`
  margin-bottom: var(--mb-2);
`;

export const PortfolioTitle = styled.h1`
  color: var(--black-color);
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
`;

export const PortfolioDescription = styled.p`
  color: var(--grey-color);
  margin-bottom: var(--mb-0-75);
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
  z-index: 100;
  transition: 0.3s;
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
