import React from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContactContent,
  ContactForm,
  ContactIcon,
  ContactInputs,
  ContactLabel,
  ContactInput,
  ContainerContact,
  ContactTextArea,
  FormButton,
} from "./ContactElements";
import mail from "../../images/mail.svg";
import { Button, ButtonFlex, ButtonIcon } from "../ButtonElements";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>
      <SectionSubtitle>Get in touch</SectionSubtitle>
      <ContainerContact>
        <ContactIcon src={mail} />
        <ContactForm>
          <ContactInputs>
            <ContactContent>
              <ContactLabel>Name</ContactLabel>
              <ContactInput />
            </ContactContent>
            <ContactContent>
              <ContactLabel>Email</ContactLabel>
              <ContactInput />
            </ContactContent>
            <ContactContent>
              <ContactLabel>Subject</ContactLabel>
              <ContactInput />
            </ContactContent>
            <ContactContent>
              <ContactLabel>Description</ContactLabel>
              <ContactTextArea rows="7" cols="0" />
            </ContactContent>
            <div>
              <Button>
                <ButtonFlex>
                  Send Me
                  <ButtonIcon>
                    <FaArrowRight />
                  </ButtonIcon>
                </ButtonFlex>
              </Button>
            </div>
          </ContactInputs>
        </ContactForm>
      </ContainerContact>
    </Section>
  );
};

export default Contact;
