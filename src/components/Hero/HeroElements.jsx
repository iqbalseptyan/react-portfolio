import styled from "styled-components";
import { Container } from "../GlobalElements";
import { device } from "../MediaQueries";

export const ContainerHero = styled(Container)`
  padding: 2rem;
`;

export const ImgWrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

export const HeroShadow = styled.div`
  border-radius: 10px;
  background-color: #000;
  border: 2px solid black;
  width: 100%;
  height: 98.5%;
  opacity: 0.75;
  position: absolute;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 250%);
  transition: 0.3s;

  @media screen and (${device.tablet}) {
    transition: 0.3s;
    transform: translate(-50%, 70%);
  }

  @media ${device.mobileL} {
    transition: 0.3s;
    transform: translate(-50%, 10%);
  }
`;

export const HeroTitle = styled.h1`
  font-size: var(--h1-font-size);
  color: var(--dark-purple-color);
`;

export const HeroSubtitle = styled.small`
  font-size: var(--small-font-size);

  /* left: 50%; */
  /* transform: translate(-50%, -100%); */
`;

export const HeroImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const HeroScroll = styled.div`
  /* display:none */
`;

export const HeroButtonScroll = styled.a`
  color: var(--dark-purple-color);
  transition: 0.3s;

  &:hover {
    transform: translateY(0.25rem);
  }
`;

export const HeroMouse = styled.div`
  font-size: 2rem;
`;

export const HeroName = styled.div`
  font-size: var(--small-font-size);
  color: var(--black-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
`;

export const HeroArrow = styled.div`
  font-size: 1.25rem;
`;

export const ButtonFlex = styled.div``;
