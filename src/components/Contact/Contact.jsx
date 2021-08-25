import React from "react";
import {
  GridCol1,
  GridCol2,
  Section,
  SectionSubtitle,
  SectionTitle,
} from "../GlobalElements";
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
  ContactFormDescription,
  ContactFormButton,
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
          <GridCol1>
            <ContactIconWrapper>
              <ContactIcon src={mail} />
            </ContactIconWrapper>
          </GridCol1>
          <GridCol2>
            <ContactForm>
              <ContactWrapperForm>
                <ContactFormDescription>
                  Please fill out the form and describe your project needs and
                  i'll contact you as soon as possible
                </ContactFormDescription>
                <ContactName>
                  <ContactLabel>Name</ContactLabel>
                  <ContactInput />
                </ContactName>
                <ContactEmail>
                  <ContactLabel>Email</ContactLabel>
                  <ContactInput />
                </ContactEmail>
                <ContactSubject>
                  <ContactLabel>Email</ContactLabel>
                  <ContactInput />
                </ContactSubject>
                <ContactDescription>
                  <ContactLabel>Description</ContactLabel>
                  <ContactTextArea rows="7" cols="0" />
                </ContactDescription>
                <ContactFormButton>
                  <Button>
                    <ButtonFlex>
                      <ButtonText>Send Me</ButtonText>
                      <ButtonIcon>
                        <FaArrowRight />
                      </ButtonIcon>
                    </ButtonFlex>
                  </Button>
                </ContactFormButton>
              </ContactWrapperForm>
            </ContactForm>
          </GridCol2>
        </ContactWrapper>
      </ContainerContact>
    </Section>
  );
};

export default Contact;
