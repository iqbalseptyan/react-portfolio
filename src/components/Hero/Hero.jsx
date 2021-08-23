import React from "react";
import {
  ContainerHero,
  HeroContent,
  HeroImg,
  HeroShadow,
  HeroSubtitle,
  HeroTitle,
  ImgWrapper,
} from "./HeroElements";
import hero from "../../images/hero.png";

const Hero = () => {
  return (
    <ContainerHero>
      <ImgWrapper>
        <HeroShadow />
        <HeroImg src={hero} />
        <HeroContent>
          <HeroTitle>Web and Mobile developer</HeroTitle>
          <HeroSubtitle>Frontend Developer</HeroSubtitle>
        </HeroContent>
      </ImgWrapper>
    </ContainerHero>
  );
};

export default Hero;
