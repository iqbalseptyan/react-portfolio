import React from "react";
import {
  ContainerHero,
  HeroContent,
  HeroImg,
  HeroScroll,
  HeroShadow,
  HeroSubtitle,
  HeroTitle,
  ImgWrapper,
} from "./HeroElements";
import hero from "../../images/hero.png";
import { Section } from "../GlobalElements";
import ReactTyped from "react-typed";
import Particles from "react-particles-js";
import { BiDownArrow, BiMouse } from "react-icons/bi";

const Hero = () => {
  const particleStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    zIndex: "1",
  };

  return (
    <Section id="hero" style={{ height: "auto" }}>
      <ContainerHero>
        <ImgWrapper>
          <Particles
            style={particleStyle}
            params={{
              interactivity: {
                detectsOn: "window",
              },
              particles: {
                color: {
                  value: "#f00",
                  animation: {
                    h: {
                      count: 0,
                      enable: true,
                      offset: 0,
                      speed: 50,
                      sync: false,
                    },
                    s: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                    l: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                  },
                },
                links: {
                  blink: false,
                  color: {
                    value: "random",
                  },
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "triangle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
            }}
          />
          <HeroShadow />
          <HeroImg src={hero} />
          <HeroContent>
            <HeroTitle>Web and Mobile apps developer</HeroTitle>
            <HeroSubtitle>
              <ReactTyped
                strings={["Frontend Developer", "Backend Developer"]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
            </HeroSubtitle>
          </HeroContent>
          <HeroScroll
            to="home"
            spy={true}
            smooth={true}
            offset={-160}
            duration={700}
          >
            <BiMouse size={24} />
            Scroll down
            <BiDownArrow />
          </HeroScroll>
        </ImgWrapper>
      </ContainerHero>
    </Section>
  );
};

export default Hero;
