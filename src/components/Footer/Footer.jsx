import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterSection,
  ContainerFooter,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinks,
  FooterSocial,
  FooterSocials,
  FooterSubtitle,
  FooterTitle,
  FooterLinkMenu,
  FooterWrapper,
  FooterTitles,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterSection>
      <ContainerFooter>
        <FooterWrapper>
          <FooterTitles>
            <FooterTitle>Iqbal Septyan</FooterTitle>
            <FooterSubtitle>Web & Mobile apps developer</FooterSubtitle>
          </FooterTitles>
          <FooterLinkMenu>
            <FooterLinks>
              <FooterLink
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                Home
              </FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                About
              </FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                Skills
              </FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink
                to="services"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                Services
              </FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                Portfolio
              </FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                Contact Me
              </FooterLink>
            </FooterLinks>
          </FooterLinkMenu>

          <FooterSocials>
            <FooterSocial>
              <FooterIcon
                href="https://www.facebook.com/miiqbals"
                target="_blank"
              >
                <FaFacebook />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon
                href="https://www.instagram.com/ismboi"
                target="_blank"
              >
                <FaInstagram />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon
                href="https://www.github.com/iqbalseptyan"
                target="_blank"
              >
                <FaGithub />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon
                href="https://www.linkedin.com/in/iqbal-septyan-835073202/"
                target="_blank"
              >
                <FaLinkedin />
              </FooterIcon>
            </FooterSocial>
          </FooterSocials>

          <FooterCopyright>
            © Copyright 2021 Iqbal Septyan. All rights reserve
          </FooterCopyright>
        </FooterWrapper>
      </ContainerFooter>
    </FooterSection>
  );
};

export default Footer;
