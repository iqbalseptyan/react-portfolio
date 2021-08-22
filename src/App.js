import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
    </>
  );
}

export default App;
