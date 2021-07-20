import React from "react";
import styled, { keyframes } from "styled-components";
import { data } from "./../../config";
const Hero = () => {
  return (
    <>
      <SectionWrapper id='home'>
        <Intro>Hi, My Name is</Intro>
        <Name>{data.fullName}.</Name>
        <Title>{data.profession}</Title>
        <AboutMe>{data.introduction}</AboutMe>
        <ContactButton href={"#contact"}>Get in Touch</ContactButton>
      </SectionWrapper>
    </>
  );
};

export default Hero;
const ContactButton = styled.a`
  width: fit-content;
  &:link,
  &:visited {
    text-decoration: none;
  }
  margin-top: 20px;
  padding: 12px 12px 8px;
  border: 2px solid #02d463;
  border-radius: 4px;
  background-color: #02d463;
  color: #fff;
  &:hover {
    border: 2px solid #02d463;
    background-color: transparent;
    color: #02d463;
  }
`;
const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 150px;
`;
const fadeUp = keyframes`
from{ transform:translateY(20px);
opacity:0;}

to{
    transform:translateY(0px);
opacity:1;
}
`;
const AboutMe = styled.p`
  max-width: 600px;
  margin-top: 20px;
  color: #8899a6;
`;
const Title = styled.h3`
  color: #fff;
  font-size: clamp(30px, 8vw, 70px);
  font-style: italic;
  animation: ${fadeUp} 0.5s linear;
  line-height: 0.9;
  animation-delay: 300ms;
`;
const Name = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  color: #b3b3b3;
  line-height: 1.1;
  animation: ${fadeUp} 0.5s linear;
  animation-delay: 200ms;
`;
const Intro = styled.h1`
  color: #fff;
  font-family: SF Mono;
  font-size: clamp(14px, 5vw, 16px);
  color: #02d463;
  font-weight: 400;
  animation: ${fadeUp} 0.5s linear;
  animation-delay: 100ms;
  margin-bottom: 20px;
`;
