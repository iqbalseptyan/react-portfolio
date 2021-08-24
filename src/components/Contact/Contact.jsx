import React from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContactName,
  ContactForm,
  ContactIcon,
  ContactLabel,
  ContactInput,
  ContainerContact,
  ContactTextArea,
  ContactWrapper,
  ContactWrapperForm,
  ContactIconWrapper,
  ContactEmail,
  ContactSubject,
  ContactDescription,
} from "./ContactElements";
import mail from "../../images/mail.svg";
import { Button, ButtonFlex, ButtonIcon, ButtonText } from "../ButtonElements";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>
      <SectionSubtitle>Get in touch</SectionSubtitle>
      <ContainerContact>
        <ContactWrapper>
          <ContactIconWrapper>
            <ContactIcon src={mail} />
          </ContactIconWrapper>
          <ContactForm>
            <ContactWrapperForm>
              <ContactName>
                <ContactLabel>Name</ContactLabel>
                <ContactInput />
              </ContactName>
              <ContactEmail>
                <ContactLabel>Email</ContactLabel>
                <ContactInput />
              </ContactEmail>
              <ContactSubject>
                <ContactLabel>Subject</ContactLabel>
                <ContactInput />
              </ContactSubject>
              <ContactDescription>
                <ContactLabel>Description</ContactLabel>
                <ContactTextArea rows="7" cols="0" />
              </ContactDescription>
              <Button>
                <ButtonFlex>
                  <ButtonText>Send Me</ButtonText>
                  <ButtonIcon>
                    <FaArrowRight />
                  </ButtonIcon>
                </ButtonFlex>
              </Button>
            </ContactWrapperForm>
          </ContactForm>
        </ContactWrapper>
      </ContainerContact>
    </Section>
  );
};

export default Contact;
