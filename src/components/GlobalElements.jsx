import styled from "styled-components";
import { device } from "./MediaQueries";

export const Container = styled.div`
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  @media ${device.laptop} {
    max-width: 1024px;
    margin: auto;
  }

  @media ${device.desktop} {
    max-width: 1366px;
    margin: auto;
  }
`;

export const Section = styled.section`
  padding: 2rem 0 2rem;
`;

export const SectionTitle = styled.h1`
  color: var(--dark-color);
  font-size: var(--h1-font-size);
  text-align: center;
`;

export const SectionSubtitle = styled.small`
  display: block;
  color: var(--grey-color);
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;
