import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerContact = styled(Container)`
  color: var(--black-color);
`;

export const ContactWrapper = styled(Grid)``;

export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactIcon = styled.img`
  color: var(--grey-color);
  margin-right: var(--mb-0-75);
  align-self: center;
  width: 70%;
`;

export const ContactForm = styled.form`
  display: inline-grid;
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
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--smaller-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--smaller-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
  resize: none;
`;

export const FormButton = styled.div``;
