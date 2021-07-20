import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
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
