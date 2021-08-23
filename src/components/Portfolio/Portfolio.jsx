import React, { useRef } from "react";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  PortfolioDescription,
  ContainerPortfolio,
  PortfolioData,
  PortfolioImg,
  PortfolioTitle,
  PortfolioWrapper,
  SwiperButtonNext,
  SwiperIcon,
  SwiperButtonPrev,
  SwiperNavigation,
  PortfolioLink,
} from "./PortfolioElements";
import { Button, ButtonFlex, ButtonIcon } from "../ButtonElements";
import image from "../../images/Image.png";
import { FaArrowRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

const Portfolio = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Section>
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent work</SectionSubtitle>
      <ContainerPortfolio>
        <Swiper
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <PortfolioWrapper>
              <PortfolioImg src={image} />
              <PortfolioData>
                <PortfolioTitle>Modern Website</PortfolioTitle>
                <PortfolioDescription>
                  Website adoptable to all devices, with ui components and
                  animated interactions
                </PortfolioDescription>
                <PortfolioLink>
                  <Button>
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
          <SwiperSlide>
            <PortfolioWrapper>
              <PortfolioImg src={image} />
              <PortfolioData>
                <PortfolioTitle>Modern Website</PortfolioTitle>
                <PortfolioDescription>
                  Website adoptable to all devices, with ui components and
                  animated interactions
                </PortfolioDescription>
                <Button>
                  <ButtonFlex>
                    Detail
                    <ButtonIcon>
                      <FaArrowRight />
                    </ButtonIcon>
                  </ButtonFlex>
                </Button>
              </PortfolioData>
            </PortfolioWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioWrapper>
              <PortfolioImg src={image} />
              <PortfolioData>
                <PortfolioTitle>Modern Website</PortfolioTitle>
                <PortfolioDescription>
                  Website adoptable to all devices, with ui components and
                  animated interactions
                </PortfolioDescription>
                <Button>
                  <ButtonFlex>
                    Detail
                    <ButtonIcon>
                      <FaArrowRight />
                    </ButtonIcon>
                  </ButtonFlex>
                </Button>
              </PortfolioData>
            </PortfolioWrapper>
          </SwiperSlide>

          <SwiperNavigation>
            <SwiperButtonPrev ref={prevRef}>
              <SwiperIcon>
                <MdKeyboardArrowLeft />
              </SwiperIcon>
            </SwiperButtonPrev>
            <SwiperButtonNext ref={nextRef}>
              <SwiperIcon>
                <MdKeyboardArrowRight />
              </SwiperIcon>
            </SwiperButtonNext>
          </SwiperNavigation>
        </Swiper>
      </ContainerPortfolio>
    </Section>
  );
};

export default Portfolio;
