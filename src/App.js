import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <About />
        <Experience />
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
