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

export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContactIcon = styled.img`
  color: var(--grey-color);
  margin-right: var(--mb-0-75);
  align-self: center;
  width: 100%;

  @media ${device.tablet} {
    height: 80%;
    width: 60%;
  }

  @media ${device.mobileL} {
    height: 100%;
    width: 70%;
  }
`;

export const ContactForm = styled.form`
  display: inline-grid;
`;

export const ContactWrapperForm = styled(Grid)`
  grid-template-areas:
    "name email email email"
    "subject subject subject subject"
    "description description description description";

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

export const ContactName = styled.div`
  grid-area: name;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactEmail = styled.div`
  grid-area: email;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactSubject = styled.div`
  grid-area: subject;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;
export const ContactDescription = styled.div`
  grid-area: description;
  background-color: var(--light-grey-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem;

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }
`;

export const ContactLabel = styled.label`
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

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

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
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

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const FormButton = styled.div``;
