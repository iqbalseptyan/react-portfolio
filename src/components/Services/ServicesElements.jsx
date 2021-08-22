import styled from "styled-components";
import { Grid } from "../GlobalElements";

export const ContainerServices = styled(Grid)`
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const ServicesContent = styled.div`
  position: relative;
  background-color: var(--white-color);
  padding: 3.5rem 0.5rem 1.25rem 2.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ServicesIcon = styled.div`
  display: block;
  font-size: 1.5rem;
  color: var(--dark-purple-color);
  margin-bottom: var(--mb-1);
`;

export const ServicesTitle = styled.h1`
  width: 100px;
  word-wrap: break-word;
  margin-bottom: var(--mb-0-5);
`;

export const ServicesModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServicesModalContent = styled.div`
  position: relative;
  background-color: var(--white-color);
`;

export const ServicesModalTitle = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
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
  margin: 0;
`;

export const ServicesModalList = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  word-wrap: break-word;
`;

export const ServicesModalIcon = styled.div`
  color: var(--black-color);
  align-items: center;
  margin-right: var(--mb-0-5);
`;
