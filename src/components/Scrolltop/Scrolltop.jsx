import React, { useEffect, useState } from "react";
import { ScrollIcon, ScrollTop } from "./ScrolltopElements";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Scrolltop = () => {
  const [state, setState] = useState(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const showScroll = () => {
    if (window.scrollY >= 70) {
      setState(true);
    } else {
      setState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showScroll);
  }, []);

  return (
    <ScrollTop show={state} onClick={toggleHome}>
      <ScrollIcon>
        <FaArrowUp />
      </ScrollIcon>
    </ScrollTop>
  );
};

export default Scrolltop;
