import styled from "styled-components";
import { device } from "./MediaQueries";

export const Container = styled.div`
  margin: auto;
  background-color: var(--white-color);

  @media ${device.laptop} {
    max-width: 1366px;
  }
`;

export const Section = styled.section`
  padding: 2rem 0 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    height: 600px;
  }
`;

export const SectionTitle = styled.h1`
  color: var(--dark-color);
  font-size: var(--big-font-size);
  text-align: center;

  @media ${device.tablet} {
    font-size: var(--h1-font-size);
  }
`;

export const SectionSubtitle = styled.small`
  display: block;
  color: var(--grey-color);
  font-size: var(--normal-font-size);
  /* margin-bottom: var(--mb-3); */
  text-align: center;

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas: "col1 col2";
  gap: 1.5rem;
`;

export const GridCol1 = styled.div`
  grid-area: col1;
`;
export const GridCol2 = styled.div`
  grid-area: col2;
`;
