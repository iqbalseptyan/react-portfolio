import React from "react";
import { GridCol1, GridCol2, Section } from "../GlobalElements";
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
  HomeBlob,
} from "./HomeElements";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, ButtonFlex, ButtonIcon, ButtonText } from "../ButtonElements";
import {} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Section>
        <ContainerHome>
          <HomeWrapper>
            <HomeSocial>
              <GridCol1>
                <HomeLinks
                  href="https://github.com/iqbalseptyan"
                  target="_blank"
                >
                  <FaGithub />
                </HomeLinks>
              </GridCol1>
              <GridCol2>
                <HomeLinks
                  href="https://www.linkedin.com/in/iqbal-septyan-835073202/"
                  target="_blank"
                >
                  <FaLinkedin />
                </HomeLinks>
              </GridCol2>
            </HomeSocial>
            <HomeBlob>
              <BlobImg />
            </HomeBlob>
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
    </>
  );
};

export default Home;
