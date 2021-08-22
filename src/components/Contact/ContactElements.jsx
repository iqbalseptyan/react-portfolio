import styled from "styled-components";
import { Grid } from "../GlobalElements";

export const ContainerContact = styled(Grid)`
  row-gap: 2rem;
`;

export const ContactIcon = styled.img`
  color: var(--grey-color);
  margin-right: var(--mb-0-75);
  align-self: center;
  justify-self: center;
`;

export const ContactForm = styled.form`
  /* display: grid; */
  /* gap: 1.5rem; */
`;

export const ContactInputs = styled(Grid)``;

export const ContactContent = styled.div`
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;
`;

export const ContactLabel = styled.label`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;
  resize: none;
`;

export const FormButton = styled.div``;
