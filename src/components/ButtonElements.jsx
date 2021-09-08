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

  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonText = styled.span`
  width: max-content;
  font-size: var(--smaller-font-size);

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const ButtonIcon = styled.div`
  font-size: 1rem;
  display: flex;
  margin-left: var(--mb-0-5);
  transition: 0.3s;

  font-size: var(--smaller-font-size);

  @media ${device.tablet} {
    font-size: var(--small-font-size);
  }
  @media ${device.laptop} {
    font-size: var(--normal-font-size);
  }
`;

export const ButtonFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;
