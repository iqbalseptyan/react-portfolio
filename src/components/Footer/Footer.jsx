import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
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
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterSection>
      <ContainerFooter>
        <FooterWrapper>
          <FooterTitle>Iqbal Septyan</FooterTitle>
          <FooterSubtitle>Web & Mobile apps developer</FooterSubtitle>

          <FooterLinkMenu>
            <FooterLinks>
              <FooterLink>Services</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>Portfolio</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLink>Contact Me</FooterLink>
            </FooterLinks>
          </FooterLinkMenu>

          <FooterSocials>
            <FooterSocial>
              <FooterIcon href="https://www.facebook.com">
                <FaFacebook />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon href="https://www.instagram.com">
                <FaInstagram />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon href="https://www.whatsapp.com">
                <FaWhatsapp />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon href="https://www.github.com">
                <FaGithub />
              </FooterIcon>
            </FooterSocial>
            <FooterSocial>
              <FooterIcon href="https://www.linkedin.com">
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
