import React, { useState } from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContainerSkills,
  SkillArrowIcon,
  SkillsBar,
  SkillsWrapper,
  SkillsData,
  SkillsHeader,
  SkillsIcon,
  SkillsList,
  SkillsName,
  SkillsNumber,
  SkillsSubTitle,
  SkillsTitle,
  SkillsTitles,
} from "./SkillsElements";
import { FaAngleDown, FaCode } from "react-icons/fa";

const Skills = () => {
  const [openFrontEnd, setOpenFrontEnd] = useState(false);
  const [openBackEnd, setOpenBackEnd] = useState(false);

  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>Technical</SectionSubtitle>

      <ContainerSkills>
        {/* Frontend */}
        <SkillsWrapper>
          <SkillsHeader>
            <SkillsIcon>
              <FaCode />
            </SkillsIcon>
            <div>
              <SkillsTitle>Frontend Developer</SkillsTitle>
              <SkillsSubTitle>More than 5 years</SkillsSubTitle>
            </div>
            <SkillArrowIcon onClick={() => setOpenFrontEnd(!openFrontEnd)}>
              <FaAngleDown />
            </SkillArrowIcon>
          </SkillsHeader>
          <SkillsList open={openFrontEnd}>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>HTML</SkillsName>
                <SkillsNumber>90%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="90" />
            </SkillsData>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>CSS</SkillsName>
                <SkillsNumber>85%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="85" />
            </SkillsData>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>Javascript</SkillsName>
                <SkillsNumber>80%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="80" />
            </SkillsData>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>React</SkillsName>
                <SkillsNumber>80%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="80" />
            </SkillsData>
          </SkillsList>
        </SkillsWrapper>

        {/* Backend */}
        <SkillsWrapper>
          <SkillsHeader>
            <SkillsIcon>
              <FaCode />
            </SkillsIcon>
            <div>
              <SkillsTitle>Backend Developer</SkillsTitle>
              <SkillsSubTitle>More than 4 years</SkillsSubTitle>
            </div>
            <SkillArrowIcon onClick={() => setOpenBackEnd(!openBackEnd)}>
              <FaAngleDown />
            </SkillArrowIcon>
          </SkillsHeader>
          <SkillsList open={!openBackEnd}>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>PHP</SkillsName>
                <SkillsNumber>80%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="80"></SkillsBar>
            </SkillsData>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>NodeJS</SkillsName>
                <SkillsNumber>80%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="80"></SkillsBar>
            </SkillsData>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>Firebase</SkillsName>
                <SkillsNumber>80%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar max="100" value="80"></SkillsBar>
            </SkillsData>
          </SkillsList>
        </SkillsWrapper>
      </ContainerSkills>
    </Section>
  );
};

export default Skills;
