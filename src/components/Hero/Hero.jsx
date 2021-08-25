import React from "react";
import {
  ContainerHero,
  HeroContent,
  HeroImg,
  HeroShadow,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper,
  ImgWrapper,
} from "./HeroElements";
import hero from "../../images/hero.png";

const Hero = () => {
  return (
    <ContainerHero>
      <HeroWrapper>
        <ImgWrapper>
          <HeroImg src={hero} />
          <HeroShadow />
        </ImgWrapper>
        <HeroContent>
          <HeroTitle>Web and Mobile developer</HeroTitle>
          <HeroSubtitle>Frontend Developer</HeroSubtitle>
        </HeroContent>
      </HeroWrapper>
    </ContainerHero>
  );
};

export default Hero;
