import styled from "styled-components";

export const Container = styled.section`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
`;

export const Section = styled(Container)`
  padding: 2rem 0 4rem;
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

export const Grid = styled(Container)`
  display: grid;
  gap: 1.5rem;
`;
