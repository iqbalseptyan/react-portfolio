import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerContact = styled(Container)`
  color: var(--black-color);
  height: 100%;
  max-width: 1024px;
`;

export const ContactWrapper = styled(Grid)`
  align-items: center;
  height: 100%;
  @media ${device.mobileM} {
    row-gap: var(--mb-1-5);
  }
`;

export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactIcon = styled.img`
  color: var(--grey-color);
  margin-right: var(--mb-0-75);
  align-self: center;
  /* width: 100%; */

  @media ${device.tablet} {
    height: 80%;
    width: 60%;
  }

  @media ${device.mobileL} {
    height: 100%;
    width: 70%;
  }
`;

export const ContactForm = styled.form``;

export const ContactWrapperForm = styled(Grid)`
  grid-template-areas:
    "header header header header"
    "name email email email"
    "subject subject subject subject"
    "description description description description"
    "footer footer footer footer";
  gap: var(--mb-0-75);
  /* height: 100%; */
  @media ${device.tablet} {
    justify-self: center;
  }

  @media ${device.mobileL} {
    gap: var(--mb-0-75);
  }

  @media ${device.mobileM} {
    gap: var(--mb-0-5);
  }
`;

export const ContactFormDescription = styled.p`
  grid-area: header;
`;

export const ContactName = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;
  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactEmail = styled.div`
  grid-area: email;
  display: flex;
  flex-direction: column;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactSubject = styled.div`
  grid-area: subject;
  display: flex;
  flex-direction: column;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactDescription = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactFormButton = styled.div`
  grid-area: footer;
`;

export const ContactLabel = styled.label`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  /* width: fit-content; */
  /* background-color: black; */
  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const ContactInput = styled.input`
  /* width: 100%; */
  background-color: var(--light-grey-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  /* padding: 0.75rem 0.25rem 0.75rem 0.25rem; */

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
    width: 100%;
  }

  @media ${device.mobileL} {
    font-size: var(--small-font-size);
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
  resize: none;

  @media ${device.laptop} {
    height: 4em;
  }

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const FormButton = styled.div``;
