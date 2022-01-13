import React from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  PortfolioDescription,
  ContainerPortfolio,
  PortfolioData,
  PortfolioImg,
  PortfolioTitle,
  PortfolioWrapper,
  PortfolioLink,
  PortfolioImgWrapper,
} from "./PortfolioElements";
import { Button, ButtonFlex, ButtonIcon } from "../ButtonElements";
import image from "../../images/nukang.png";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

const Portfolio = () => {
  const handleLink = () => {
    window.open("https://www.nukanghub.com", "_blank");
  };
  return (
    <Section
      id="portfolio"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-center"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent work</SectionSubtitle>
      <ContainerPortfolio>
        <Swiper
          loop
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <PortfolioWrapper>
              <PortfolioImgWrapper>
                <PortfolioImg src={image} />
              </PortfolioImgWrapper>
              <PortfolioData>
                <PortfolioTitle>NUKANGHUB</PortfolioTitle>
                <PortfolioDescription>
                  Website adoptable to all devices, with ui components and
                  animated interactions, my first project with company
                </PortfolioDescription>
                <PortfolioLink>
                  <Button onClick={handleLink}>
                    <ButtonFlex>
                      Detail
                      <ButtonIcon>
                        <FaArrowRight />
                      </ButtonIcon>
                    </ButtonFlex>
                  </Button>
                </PortfolioLink>
              </PortfolioData>
            </PortfolioWrapper>
          </SwiperSlide>
        </Swiper>
      </ContainerPortfolio>
    </Section>
  );
};

export default Portfolio;
