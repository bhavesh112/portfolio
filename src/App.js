import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "./config";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, anchorPlacement: "top-bottom" });
  }, []);
  return (
    <>
      <Container>
        <Header />
        <Hero />
        {data.nav.about && <About />}
        {data.nav.experience && <Experience />}
        {data.nav.project && <Projects />}
        {data.nav.contact && <Contact />}
        <Footer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
