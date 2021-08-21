import React from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  AboutData,
  AboutDescription,
  AboutImg,
  AboutInfo,
  AboutInfoSubTitle,
  AboutInfoTitle,
  AboutInfoWrapper,
  ContainerAbout,
} from "./AboutElements";
import iqbal from "../../images/iqbal.png";

const About = () => {
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>Introduction</SectionSubtitle>
      <ContainerAbout>
        <AboutImg src={iqbal} />
        <AboutData>
          <AboutDescription>
            Web and mobile app developer, with extensive knowledge and years
            experience from studying working in web and mobile app technologies,
            delivering quality work
          </AboutDescription>
          <AboutInfo>
            <AboutInfoWrapper>
              <AboutInfoTitle>4+</AboutInfoTitle>
              <AboutInfoSubTitle>Years experience </AboutInfoSubTitle>
            </AboutInfoWrapper>
            <AboutInfoWrapper>
              <AboutInfoTitle>10+</AboutInfoTitle>
              <AboutInfoSubTitle>Completed project</AboutInfoSubTitle>
            </AboutInfoWrapper>
            <AboutInfoWrapper>
              <AboutInfoTitle>1+</AboutInfoTitle>
              <AboutInfoSubTitle>Companies project worked</AboutInfoSubTitle>
            </AboutInfoWrapper>
          </AboutInfo>
        </AboutData>
      </ContainerAbout>
    </Section>
  );
};

export default About;
