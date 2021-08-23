import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerServices = styled(Container)`
  color: var(--black-color);
`;

export const ServicesWrapper = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
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

  @media ${device.mobileM} {
    width: 200px;
    justify-self: center;
  }
`;

export const ServicesCardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 2rem;
`;

export const ServicesIcon = styled.div`
  font-size: 1.5rem;
  color: var(--dark-purple-color);
  margin-bottom: var(--mb-1);
`;

export const ServicesTitle = styled.h1`
  width: 100px;
  word-wrap: break-word;
  margin-bottom: var(--mb-1);

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }
`;

export const ServicesModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServicesModalWrapper = styled.div`
  position: relative;
  background-color: var(--white-color);
`;

export const ServicesModalTitle = styled.h1`
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--mb-1-5);

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }
`;

export const ServicesModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  color: var(--black-color);
  cursor: pointer;
`;

export const ServicesModalDetail = styled(Grid)`
  row-gap: 1rem;
`;

export const ServicesModalList = styled.p`
  display: flex;
  align-items: center;
  width: 300px;
  word-wrap: break-word;
  font-weight: var(--font-medium);
  @media ${device.mobileM} {
    font-size: var(--small-font-size);
  }
`;

export const ServicesModalIcon = styled.div`
  color: var(--black-color);
  align-items: center;
  margin-right: var(--mb-0-5);
`;
