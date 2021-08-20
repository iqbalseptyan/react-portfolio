import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 0 4rem;
`;

export const SectionTitle = styled.h1`
  font-size: var(--h1-font-size);
`;

export const SectionSubtitle = styled.small`
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);

  &.SectionTitle {
    text-align: center;
  }
`;

export const Container = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;
