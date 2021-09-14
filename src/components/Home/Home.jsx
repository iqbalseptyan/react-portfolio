import React from "react";
import { Section } from "../GlobalElements";
import {
  HomeData,
  HomeDescription,
  HomeLinks,
  HomeSocial,
  HomeSubtitle,
  HomeTitle,
  BlobImg,
  ContainerHome,
  HomeWrapper,
} from "./HomeElements";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, ButtonFlex, ButtonIcon, ButtonText } from "../ButtonElements";
import {} from "react-icons/fa";

const Home = () => {
  return (
    <Section
      id="home"
      data-aos="zoom-in"
      data-aos-offset="150"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-center"
    >
      <ContainerHome>
        <HomeWrapper>
          <HomeSocial>
            <HomeLinks href="https://github.com/iqbalseptyan" target="_blank">
              <FaGithub />
            </HomeLinks>
            <HomeLinks
              href="https://www.linkedin.com/in/iqbal-septyan-835073202/"
              target="_blank"
            >
              <FaLinkedin />
            </HomeLinks>
          </HomeSocial>
          <BlobImg />
          <HomeData>
            <HomeTitle>Hi, I'm Iqbal</HomeTitle>
            <HomeSubtitle>Frontend and Backend developer</HomeSubtitle>
            <HomeDescription>
              High level experience in web design and backend development
              knowledge, producing quality work
            </HomeDescription>
            <Button>
              <ButtonFlex>
                <ButtonText>Contact Me</ButtonText>
                <ButtonIcon>
                  <FaArrowRight />
                </ButtonIcon>
              </ButtonFlex>
            </Button>
          </HomeData>
        </HomeWrapper>
      </ContainerHome>
    </Section>
  );
};

export default Home;
