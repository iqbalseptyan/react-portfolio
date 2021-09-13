import React from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  AboutDescription,
  AboutImg,
  AboutInfo,
  AboutInfoSubTitle,
  AboutInfoTitle,
  AboutInfoWrapper,
  AboutWrapper,
  Col1,
  Col2,
  ContainerAbout,
} from "./AboutElements";
import iqbal from "../../images/iqbal.png";

const About = () => {
  return (
    <Section id="about" data-aos="fade-left">
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>Introduction</SectionSubtitle>
      <ContainerAbout>
        <AboutWrapper>
          <Col1>
            <AboutImg src={iqbal} />
          </Col1>
          <Col2>
            <AboutDescription>
              Web and mobile app developer, with extensive knowledge and years
              experience from studying working in web and mobile app
              technologies, delivering quality work
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
          </Col2>
        </AboutWrapper>
      </ContainerAbout>
    </Section>
  );
};

export default About;
