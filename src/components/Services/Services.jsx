import React, { useState } from "react";
import Modal from "react-modal";
import { Section, SectionSubtitle, SectionTitle } from "../GlobalElements";
import {
  ContainerServices,
  ServicesContent,
  ServicesIcon,
  ServicesModal,
  ServicesModalClose,
  ServicesModalContent,
  ServicesModalDetail,
  ServicesModalIcon,
  ServicesModalList,
  ServicesModalTitle,
  ServicesTitle,
} from "./ServicesElements";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaRegCheckCircle,
} from "react-icons/fa";
import { Button, ButtonFlex, ButtonIcon } from "../ButtonElements";
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
        <ServicesContent>
          <ServicesIcon>
            <FaCode />
          </ServicesIcon>
          <ServicesTitle>Frontend Developer</ServicesTitle>
          <Button bgTransparent onClick={openModalFE}>
            <ButtonFlex>
              View More
              <ButtonIcon>
                <FaArrowRight />
              </ButtonIcon>
            </ButtonFlex>
          </Button>
        </ServicesContent>

        <ServicesContent>
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
        </ServicesContent>
      </ContainerServices>

      <Modal
        isOpen={isOpenFE}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalFE}
        style={customStyles}
        contentLabel="Frontend Modal"
      >
        <ServicesModal>
          <ServicesModalContent>
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
          </ServicesModalContent>
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
          <ServicesModalContent>
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
          </ServicesModalContent>
        </ServicesModal>
      </Modal>
    </Section>
  );
};

export default Services;
