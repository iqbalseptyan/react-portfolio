import React from "react";
import { Section } from "../GlobalElements";
import {
  HomeContainer,
  HomeContent,
  HomeData,
  HomeDescription,
  HomeLinks,
  HomeSocial,
  HomeSubtitle,
  HomeTitle,
  BlobImg,
} from "./HomeElements";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, ButtonFlex, ButtonIcon, ButtonText } from "../ButtonElements";
import {} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Section>
        <HomeContainer>
          <HomeContent>
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
          </HomeContent>
        </HomeContainer>
      </Section>
    </>
  );
};

export default Home;
