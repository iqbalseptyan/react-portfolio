import styled, { keyframes } from "styled-components";
import { Container } from "../GlobalElements";
import { device } from "../MediaQueries";
import { Link as scroll } from "react-scroll";

export const ContainerHero = styled(Container)`
  color: var(--white-color);
  margin-top: var(--header-height);
  @media ${device.laptop} {
    padding-top: 1rem;
  }
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
  height: 98.8%;
  opacity: 0.75;
  position: absolute;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transition: 0.3s;
  transform: translate(-50%, 50%);

  @media ${device.tablet} {
    transform: translate(-50%, 100%);
  }

  @media ${device.laptop} {
    transform: translate(-50%, 150%);
  }
`;

export const HeroTitle = styled.h1`
  font-size: var(--h3-font-size);
  color: var(--purple-color);
  font-weight: var(--font-semi-bold);

  @media ${device.tablet} {
    font-size: var(--h2-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--big-font-size);
  }
`;

export const HeroSubtitle = styled.p`
  font-size: var(--small-font-size);

  @media ${device.tablet} {
    font-size: var(--normal-font-size);
  }

  @media ${device.tablet} {
    font-size: var(--h3-font-size);
  }
`;

export const HeroImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const mouseAnimate = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

export const HeroScroll = styled(scroll)`
  display: none;
  @media ${device.laptop} {
    animation: ${mouseAnimate} 2s infinite;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: var(--mb-1-5);
    left: var(--mb-2-5);
    color: var(--purple-color);
    cursor: pointer;
  }
`;
