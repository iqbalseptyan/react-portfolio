import React, { useState } from "react";
import Modal from "react-modal";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContainerServices,
  ServicesCard,
  ServicesCardWrapper,
  ServicesIcon,
  ServicesModal,
  ServicesModalClose,
  ServicesModalWrapper,
  ServicesModalDetail,
  ServicesModalIcon,
  ServicesModalList,
  ServicesModalTitle,
  ServicesTitle,
  ServicesWrapper,
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
    backgroundColor: "var(--white-color)",
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
    <Section>
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
                  View More
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
        <ServicesModal>
          <ServicesModalWrapper>
            <ServicesModalTitle>Frontend Developer</ServicesModalTitle>
            <ServicesModalClose onClick={closeModalFE}>
              <MdClose />
            </ServicesModalClose>
            <ServicesModalDetail>
              <ServicesModalList>
                <ServicesModalIcon>
                  <FaRegCheckCircle />
                </ServicesModalIcon>
                Develop user interface
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
            </ServicesModalDetail>
          </ServicesModalWrapper>
        </ServicesModal>
      </Modal>

      <Modal
        isOpen={isOpenBE}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalBE}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ServicesModal>
          <ServicesModalWrapper>
            <ServicesModalTitle>Backend Developer</ServicesModalTitle>
            <ServicesModalClose onClick={closeModalBE}>
              <MdClose />
            </ServicesModalClose>
            <ServicesModalDetail>
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
            </ServicesModalDetail>
          </ServicesModalWrapper>
        </ServicesModal>
      </Modal>
    </Section>
  );
};

export default Services;
