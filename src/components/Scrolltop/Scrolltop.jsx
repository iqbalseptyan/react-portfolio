import React from "react";
import { ScrollIcon, ScrollTop } from "./ScrolltopElements";
import { FaArrowUp } from "react-icons/fa";
const Scrolltop = () => {
  return (
    <ScrollTop>
      <ScrollIcon>
        <FaArrowUp />
      </ScrollIcon>
    </ScrollTop>
  );
};

export default Scrolltop;
