import "./App.css";
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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
      {/* <Scrolltop /> */}
    </>
  );
}

export default App;
