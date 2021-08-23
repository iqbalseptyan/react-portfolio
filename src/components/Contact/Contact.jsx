import React from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContactInputs,
  ContactForm,
  ContactIcon,
  ContactLabel,
  ContactInput,
  ContainerContact,
  ContactTextArea,
  ContactWrapper,
  ContactWrapperForm,
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
          <ContactIcon src={mail} />
          <ContactForm>
            <ContactWrapperForm>
              <ContactInputs>
                <ContactLabel>Name</ContactLabel>
                <ContactInput />
              </ContactInputs>
              <ContactInputs>
                <ContactLabel>Email</ContactLabel>
                <ContactInput />
              </ContactInputs>
              <ContactInputs>
                <ContactLabel>Subject</ContactLabel>
                <ContactInput />
              </ContactInputs>
              <ContactInputs>
                <ContactLabel>Description</ContactLabel>
                <ContactTextArea rows="7" cols="0" />
              </ContactInputs>
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
