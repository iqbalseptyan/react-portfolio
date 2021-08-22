import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";

export const ContainerSkills = styled(Container, Grid)`
  row-gap: 0;
`;

export const SkillsContent = styled.div``;

export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`;

export const SkillsIcon = styled.div`
  font-size: 2rem;
  color: var(--dark-purple-color);
  padding: 1rem;
`;

export const SkillArrowIcon = styled(SkillsIcon)`
  margin-left: auto;
`;

export const SkillsTitle = styled.h1`
  font-size: var(--h3-font-size);
`;

export const SkillsSubTitle = styled.p`
  font-size: var(--small-font-size);
  color: var(--grey-color);
`;

export const SkillsList = styled(Grid)`
  margin-bottom: var(--mb-2-5);
  height: ${(props) => (props.open ? 0 : "max-content")};

  overflow: auto;
  transition: width 2s, height 4s;
`;

export const SkillsData = styled.div`
  transition: 2s;
  color: var(--black-color);
`;

export const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
`;

export const SkillsName = styled.h1`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
`;

export const SkillsNumber = styled.h1`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
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
