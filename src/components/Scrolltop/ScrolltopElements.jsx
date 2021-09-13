import styled from "styled-components";
import { device } from "../MediaQueries";

export const ScrollTop = styled.div`
  position: fixed;
  display: none;
  bottom: 4rem;
  right: var(--mb-2-5);
  background-color: var(--purple-color);
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  opacity: 0.5;
  cursor: pointer;

  @media ${device.laptop} {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;

export const ScrollIcon = styled.div`
  cursor: pointer;

  font-size: 1.25rem;
  color: var(--white-color);
`;
