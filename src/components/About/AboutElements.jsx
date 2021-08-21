import styled from "styled-components";
import { Container, Grid } from "../GlobalElements";

export const ContainerAbout = styled(Container, Grid)``;
export const AboutImg = styled.img`
  display: flex;
  border-radius: 0.5rem;
  width: 200px;
  margin: auto;
  alt: "Iqbal Septyan";
  margin-bottom: var(--mb-1);
`;
export const AboutData = styled.div`
  margin-bottom: var(--mb-2-5);
`;
export const AboutDescription = styled.p`
  color: var(--grey-color);
  text-align: center;
  margin-bottom: var(--mb-2-5);
`;
export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const AboutInfoWrapper = styled.div`
  text-align: center;
`;
export const AboutInfoTitle = styled.h1`
  font-size: var(--h1-font-size);
  font-weight: var(--font-semi-bold);
`;
export const AboutInfoSubTitle = styled.p`
  color: var(--grey-color);
  font-size: var(--smaller-font-size);
  width: 100px;
  word-wrap: break-word;
`;
