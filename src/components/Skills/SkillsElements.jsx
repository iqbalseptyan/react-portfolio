import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerSkills = styled(Container)`
  color: var(--black-color);
`;

export const SkillsWrapper = styled(Grid)`
  gap: var(--mb-1);

  @media ${device.laptop} {
    grid-template-areas: "Col1 Col2";
  }
`;

export const Col1 = styled.div`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.txtFirst};
  @media ${device.laptop} {
    grid-area: Col1;
  }
`;

export const Col2 = styled.div`
  color: ${(props) => props.theme.txtFirst};
  @media ${device.laptop} {
    grid-area: Col2;
  }
`;

export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const SkillsIcon = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.txtThird};
  padding: 1rem;
  cursor: pointer;
`;

export const SkillArrowIcon = styled(SkillsIcon)`
  margin-left: auto;
`;

export const SkillsTitle = styled.h1`
  font-size: var(--normal-font-size);

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h1-font-size);
  }
`;

export const SkillsSubTitle = styled.p`
  font-size: var(--smaller-font-size);
  color: ${(props) => props.theme.txtSecond};

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h3-font-size);
  }
`;

export const SkillsList = styled(Grid)`
  height: ${(props) => (props.open ? 0 : "100%")};
  overflow: hidden;
  transition: 0.3s;
  gap: 0;
`;

export const SkillsData = styled.div`
  color: ${(props) => props.theme.txtFirst};
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
`;

export const SkillsName = styled.p`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h3-font-size);
  }
`;

export const SkillsLevel = styled.small`
  color: ${(props) => props.theme.txtSecond};
  font-size: var(--small-font-size);
`;

export const SkillsNumber = styled.p`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--h3-font-size);
  }
`;

export const SkillsBar = styled.progress`
  height: 10px;
  width: 100%;
  border-radius: 0.25rem;

  &::-moz-progress-bar {
    background-color: ${(props) => props.theme.txtThird};
    border-radius: 10px;
  }

  &::-webkit-progress-bar {
    border-radius: 10px;
    background-color: ${(props) => props.theme.txtSecond};
  }

  &::-webkit-progress-value {
    background-color: ${(props) => props.theme.txtThird};
    border-radius: 10px;
  }
`;
