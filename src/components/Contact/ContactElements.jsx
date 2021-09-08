import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerContact = styled(Container)`
  color: var(--black-color);
`;

export const ContactWrapper = styled(Grid)`
  @media ${device.laptop} {
    grid-template-areas: "Col1 Col2";
  }
`;

export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.laptop} {
    grid-area: Col1;
  }
`;

export const ContactIcon = styled.img`
  color: var(--grey-color);
  margin-right: var(--mb-0-75);
  align-self: center;
  width: 70%;

  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  display: inline-grid;
  @media ${device.laptop} {
    grid-area: Col2;
  }
`;

export const ContactWrapperForm = styled(Grid)`
  grid-template-areas:
    "name email email email"
    "subject subject subject subject"
    "description description description description";

  gap: var(--mb-0-5);
`;

export const ContactBox = styled.div`
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;
`;

export const ContactName = styled(ContactBox)`
  grid-area: name;
`;

export const ContactEmail = styled(ContactBox)`
  grid-area: email;
`;

export const ContactSubject = styled(ContactBox)`
  grid-area: subject;
`;

export const ContactDescription = styled(ContactBox)`
  grid-area: description;
`;

export const ContactLabel = styled.label`
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--smaller-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--smaller-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
  resize: none;

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const FormButton = styled.div``;
