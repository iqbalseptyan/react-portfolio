import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerServices = styled(Container)`
  color: var(--black-color);
`;

export const ServicesWrapper = styled(Grid)`
  grid-template-columns: repeat(1, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServicesCard = styled.div`
  justify-self: center;
  width: 250px;
  height: 280px;
  position: relative;
  background-color: var(--white-color);
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ServicesCardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 2rem;
`;

export const ServicesIcon = styled.div`
  font-size: var(--mb-1-5);
  color: var(--dark-purple-color);
  margin-bottom: var(--mb-1-5);

  @media ${device.tablet} {
    font-size: var(--mb-2);
  }
`;

export const ServicesTitle = styled.h1`
  font-size: var(--normal-font-size);
  width: 120px;
  word-wrap: break-word;
  margin-bottom: var(--mb-1);

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
`;

export const ServicesModalWrapper = styled.div`
  padding: var(--mb-2);
  background-color: (--white-color);
  max-width: 420px;
`;

export const ServicesModalTitle = styled.h1`
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--mb-1-5);
`;

export const ServicesModalClose = styled.div`
  position: absolute;
  top: var(--mb-2);
  right: var(--mb-2);
  font-size: var(--normal-font-size);
  color: var(--black-color);
  cursor: pointer;
`;

export const ServicesModalList = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
`;

export const ServicesModalIcon = styled.div`
  display: flex;
  color: var(--black-color);
  margin-right: var(--mb-0-5);
`;

export const ServicesModalText = styled.p`
  word-wrap: break-word;
`;
