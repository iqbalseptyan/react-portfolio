import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerContact = styled(Container)`
  color: var(--black-color);
`;

export const ContactWrapper = styled(Grid)`
  @media ${device.mobileM} {
    row-gap: var(--mb-1-5);
  }
`;

export const ContactIcon = styled.img`
  color: var(--grey-color);
  margin-right: var(--mb-0-75);
  align-self: center;
  justify-self: center;
  width: 100%;

  @media ${device.mobileM} {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }
`;

export const ContactForm = styled.form``;

export const ContactWrapperForm = styled(Grid)`
  @media ${device.mobileM} {
    row-gap: var(--mb-1-5);
  }
`;

export const ContactInputs = styled.div`
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;
`;

export const ContactLabel = styled.label`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: var(--light-grey-color);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.75rem 0.25rem 0.75rem 0.25rem;

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

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const FormButton = styled.div``;
