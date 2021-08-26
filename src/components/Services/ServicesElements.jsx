import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerServices = styled(Container)`
  color: var(--black-color);

  @media ${device.tablet} {
    max-width: 600px;
    margin-top: var(--mb-2);
  }
`;

export const ServicesWrapper = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobileL} {
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

  @media ${device.mobileL} {
    width: 220px;
    justify-self: center;
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
  margin-bottom: var(--mb-2);
`;

export const ServicesTitle = styled.h1`
  font-size: var(--h1-font-size);
  word-wrap: break-word;
  margin-bottom: var(--mb-1);

  @media ${device.mobileL} {
    font-size: var(--h3-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }

  @media ${device.tablet} {
    width: 120px;
    font-size: var(--normal-font-size);
  }
`;

export const ServicesModalWrapper = styled.div`
  padding: var(--mb-2);
  background-color: (--white-color);
  width: max-content;
`;

export const ServicesModalTitle = styled.h1`
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--mb-1-5);

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ServicesModalClose = styled.div`
  position: absolute;
  top: var(--mb-2);
  right: var(--mb-2);
  font-size: var(--h1-font-size);
  color: var(--black-color);
  cursor: pointer;

  @media ${device.tablet} {
    font-size: var(--h2-font-size);
  }
`;

export const ServicesModalList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-1-5);
  font-weight: var(--font-medium);
`;

export const ServicesModalIcon = styled.div`
  display: flex;
  color: var(--black-color);
  margin-right: var(--mb-0-5);
  font-size: var(--h1-font-size);

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
`;

export const ServicesModalText = styled.p`
  width: 400px;
  word-wrap: break-word;
  font-size: var(--h3-font-size);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;
