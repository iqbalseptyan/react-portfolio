import styled from "styled-components";
import { device } from "./MediaQueries";

export const Button = styled.button`
  display: inline-block;
  background-color: ${(props) =>
    props.bgTransparent ? "transparent" : "var(--dark-purple-color)"};
  color: ${(props) =>
    props.bgTransparent ? "var(--dark-purple-color)" : "var(--white-color)"};
  padding: ${(props) => (props.bgTransparent ? 0 : "1rem")};
  border: none;
  border-radius: 10px;
  font-weight: var(--font-medium);
  cursor: pointer;
  width: min-content;

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const ButtonText = styled.span`
  @media ${device.mobileM} {
    width: max-content;
    font-size: var(--smaller-font-size);
  }
`;

export const ButtonIcon = styled.div`
  font-size: 1rem;
  display: flex;
  margin-left: var(--mb-0-5);
  transition: 0.3s;

  @media ${device.mobileM} {
    font-size: var(--smaller-font-size);
  }
`;

export const ButtonFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;
