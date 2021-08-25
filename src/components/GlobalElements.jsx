import styled from "styled-components";
import { device } from "./MediaQueries";

export const Container = styled.div`
  /* max-width: 1024px; */
  /* width: 100%; */
  /* margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5); */
  /* align-items: center; */
  align-self: center;
  margin: auto;
  @media ${device.laptop} {
    max-width: 1366px;
    height: max-content;
  }

  @media ${device.tablet} {
    max-width: 768px;
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
`;

export const Section = styled.section`
  padding: 2rem 0;
  /* padding: 2rem 0 4rem; */
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 600px;
`;

export const SectionTitle = styled.h1`
  color: var(--dark-color);
  font-size: var(--big-font-size);
  text-align: center;

  @media (max-width: 1023px) {
    font-size: var(--h1-font-size);
  }
`;

export const SectionSubtitle = styled.small`
  display: block;
  color: var(--grey-color);
  font-size: var(--normal-font-size);
  /* margin-bottom: var(--mb-3); */
  text-align: center;

  @media (max-width: 1023px) {
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
