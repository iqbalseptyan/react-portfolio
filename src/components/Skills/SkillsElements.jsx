import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerSkills = styled(Container)`
  color: var(--black-color);
  height: min-content;
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
  /* margin-bottom: var(--mb-2-5); */
`;

export const SkillsIcon = styled.div`
  font-size: 2rem;
  color: var(--dark-purple-color);
  padding: 1rem;
  cursor: pointer;
`;

export const SkillArrowIcon = styled(SkillsIcon)`
  margin-left: auto;
`;

export const SkillsTitle = styled.h1`
  font-size: var(--h1-font-size);

  @media ${device.tablet} {
    font-size: var(--h2-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--h3-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--normal-font-size);
  }
`;

export const SkillsSubTitle = styled.p`
  font-size: var(--normal-font-size);
  color: var(--grey-color);

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const SkillsList = styled(Grid)`
  grid-template-areas: "col1";
  margin-bottom: var(--mb-2-5);
  height: ${(props) => (props.open ? 0 : "max-content")};
  overflow: auto;

  @media ${device.mobileL} {
    margin-bottom: 0;
  }
`;

export const SkillsData = styled.div`
  color: var(--black-color);
`;

export const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
`;

export const SkillsName = styled.h1`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const SkillsNumber = styled.h1`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
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
