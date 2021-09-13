import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
// import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Scrolltop from "./components/Scrolltop/Scrolltop";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import { GlobalStyles } from "./global";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);

  const changeState = () => {
    setToggleTheme((current) => !current);
  };

  const theme = {
    bg: "var(--white-color)",
    txtFirst: "var(--black-color)",
    txtSecond: "var(--grey-color)",
    txtThird: "var(--purple-color)",
  };

  if (toggleTheme)
    var updatedTheme = {
      ...theme,
      bg: "var(--dark-color)",
      txtFirst: "var(--white-color)",
      txtSecond: "var(--light-grey-color)",
      txtThird: "var(--purple-color)",
      darkTheme: true,
    };
  else
    updatedTheme = {
      ...theme,
      bg: "var(--white-color)",
      txtFirst: "var(--black-color)",
      txtSecond: "var(--grey-color)",
      txtThird: "var(--dark-purple-color)",
      darkTheme: false,
    };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <ThemeProvider theme={updatedTheme}>
      <>
        <GlobalStyles />
        <Navbar handler={changeState} toggleTheme={toggleTheme} />
        <Hero />
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        {/* <Scrolltop /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
