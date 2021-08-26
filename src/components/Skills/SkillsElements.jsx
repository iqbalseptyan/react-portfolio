import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerSkills = styled(Container)`
  color: var(--black-color);
  height: min-content;

  @media ${device.tablet} {
    max-width: 600px;
    margin-top: var(--mb-2);
  }
`;

export const SkillsWrapper = styled(Grid)`
  grid-auto-columns: 1fr;
  @media ${device.mobileM} {
    gap: 0;
  }
`;

export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const SkillsIcon = styled.div`
  font-size: var(--h1-font-size);
  color: var(--dark-purple-color);
  padding: 1rem;
  cursor: pointer;

  @media ${device.tablet} {
    font-size: var(--h2-font-size);
  }
`;

export const SkillArrowIcon = styled(SkillsIcon)`
  margin-left: auto;
`;

export const SkillsTitle = styled.h1`
  font-size: var(--h1-font-size);

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
`;

export const SkillsSubTitle = styled.p`
  font-size: var(--normal-font-size);
  color: var(--grey-color);

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
`;

export const SkillsList = styled(Grid)`
  grid-template-areas: "col1";
  margin-bottom: var(--mb-2-5);
  height: ${(props) => (props.open ? 0 : "max-content")};
  overflow: auto;
`;

export const SkillsData = styled.div`
  color: var(--black-color);
`;

export const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-25);
`;

export const SkillsName = styled.h1`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
`;

export const SkillsNumber = styled.h1`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
`;

export const SkillsBar = styled.progress`
  height: 10px;
  width: 100%;
  border-radius: 0.25rem;

  &::-moz-progress-bar {
    background: var(--dark-purple-color);
    border-radius: 10px;
  }

  &::-webkit-progress-bar {
    border-radius: 10px;
    background-color: var(--light-grey-color);
  }

  &::-webkit-progress-value {
    background: var(--dark-purple-color);
    border-radius: 10px;
  }
`;
