import React, { useState } from "react";
import Modal from "react-modal";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContainerServices,
  ServicesCard,
  ServicesCardWrapper,
  ServicesIcon,
  ServicesModalClose,
  ServicesModalWrapper,
  ServicesModalIcon,
  ServicesModalList,
  ServicesModalTitle,
  ServicesTitle,
  ServicesWrapper,
  ServicesModalText,
} from "./ServicesElements";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaRegCheckCircle,
} from "react-icons/fa";
import { Button, ButtonFlex, ButtonIcon, ButtonText } from "../ButtonElements";
import { MdClose } from "react-icons/md";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    width: "max-content",
    border: "2px solid rgb(204, 204, 204)",
  },
};

Modal.setAppElement("#root");
const Services = () => {
  const [isOpenFE, setIsOpenFE] = useState(false);
  const [isOpenBE, setIsOpenBE] = useState(false);

  function openModalFE() {
    setIsOpenFE(true);
  }
  function openModalBE() {
    setIsOpenBE(true);
  }

  function afterOpenModal() {}

  function closeModalFE() {
    setIsOpenFE(false);
  }
  function closeModalBE() {
    setIsOpenBE(false);
  }

  return (
    <Section id="services" data-aos="fade-left">
      <SectionTitle>Services</SectionTitle>
      <SectionSubtitle>Offer</SectionSubtitle>

      <ContainerServices>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesCardWrapper>
              <ServicesIcon>
                <FaCode />
              </ServicesIcon>
              <ServicesTitle>Frontend Developer</ServicesTitle>
              <Button bgTransparent onClick={openModalFE}>
                <ButtonFlex>
                  <ButtonText>View More</ButtonText>
                  <ButtonIcon>
                    <FaArrowRight />
                  </ButtonIcon>
                </ButtonFlex>
              </Button>
            </ServicesCardWrapper>
          </ServicesCard>

          <ServicesCard>
            <ServicesCardWrapper>
              <ServicesIcon>
                <FaDatabase />
              </ServicesIcon>
              <ServicesTitle>Backend Developer</ServicesTitle>
              <Button bgTransparent onClick={openModalBE}>
                <ButtonFlex>
                  <ButtonText>View More</ButtonText>
                  <ButtonIcon>
                    <FaArrowRight />
                  </ButtonIcon>
                </ButtonFlex>
              </Button>
            </ServicesCardWrapper>
          </ServicesCard>
        </ServicesWrapper>
      </ContainerServices>

      <Modal
        isOpen={isOpenFE}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalFE}
        style={customStyles}
        contentLabel="Frontend Modal"
      >
        <ServicesModalWrapper>
          <ServicesModalTitle>Frontend Developer</ServicesModalTitle>
          <ServicesModalClose onClick={closeModalFE}>
            <MdClose />
          </ServicesModalClose>
          <ServicesModalList>
            <ServicesModalIcon>
              <FaRegCheckCircle />
            </ServicesModalIcon>
            <ServicesModalText>Develop user interface</ServicesModalText>
          </ServicesModalList>
          <ServicesModalList>
            <ServicesModalIcon>
              <FaRegCheckCircle />
            </ServicesModalIcon>
            Create ux element interactions
          </ServicesModalList>
          <ServicesModalList>
            <ServicesModalIcon>
              <FaRegCheckCircle />
            </ServicesModalIcon>
            Web page development
          </ServicesModalList>
        </ServicesModalWrapper>
      </Modal>

      <Modal
        isOpen={isOpenBE}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalBE}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ServicesModalWrapper>
          <ServicesModalTitle>Backend Developer</ServicesModalTitle>
          <ServicesModalClose onClick={closeModalBE}>
            <MdClose />
          </ServicesModalClose>
          <ServicesModalList>
            <ServicesModalIcon>
              <FaRegCheckCircle />
            </ServicesModalIcon>
            Development server, application and database
          </ServicesModalList>
          <ServicesModalList>
            <ServicesModalIcon>
              <FaRegCheckCircle />
            </ServicesModalIcon>
            Create API
          </ServicesModalList>
          <ServicesModalList>
            <ServicesModalIcon>
              <FaRegCheckCircle />
            </ServicesModalIcon>
            Web page development
          </ServicesModalList>
        </ServicesModalWrapper>
      </Modal>
    </Section>
  );
};

export default Services;
