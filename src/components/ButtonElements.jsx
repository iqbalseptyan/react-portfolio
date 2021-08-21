import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: var(--dark-purple-color);
  color: var(--white-color);
  padding: 1rem;
  border-radius: 10px;
  font-weight: var(--font-medium);

  &:hover {
    background-color: var(--purple-color);
  }
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
