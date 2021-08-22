import styled from "styled-components";

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
`;

export const ButtonIcon = styled.div`
  font-size: 1rem;
  display: flex;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
`;

export const ButtonFlex = styled.div`
  display: inline-flex;
  align-items: center;
`;
