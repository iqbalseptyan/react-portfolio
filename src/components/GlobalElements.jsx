import styled from "styled-components";
import { device } from "./MediaQueries";

export const Container = styled.div`
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
  transition: 0.2s;
  color: ${(props) => props.theme.txtFirst};
  @media ${device.laptop} {
    max-width: 1024px;
    margin: auto;
    width: 95vw;
  }
  @media ${device.desktop} {
    max-width: 1366px;
    margin: auto;
  }
`;

export const Section = styled.section`
  padding: 2rem 0 4rem;
  &.active {
    background-color: red;
  }
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.txtFirst};

  @media ${device.laptop} {
    height: 600px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: var(--h1-font-size);
  text-align: center;

  @media ${device.laptop} {
    font-size: var(--big-font-size);
  }
`;

export const SectionSubtitle = styled.small`
  display: block;
  color: ${(props) => props.theme.txtSecond};
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
  text-align: center;

  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;
