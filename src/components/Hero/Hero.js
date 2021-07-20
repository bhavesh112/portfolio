import React from "react";
import styled from "styled-components";
import { data } from "./../../config";
const Hero = () => {
  return (
    <>
      <SectionWrapper id='home'>
        <Intro data-aos='fade-up'>Hi, My Name is</Intro>
        <Name data-aos='fade-up' data-aos-delay='100'>
          {data.fullName}.
        </Name>
        <Title data-aos='fade-up' data-aos-delay='200'>
          {data.profession}
        </Title>
        <AboutMe data-aos='fade-up' data-aos-delay='300'>
          {data.introduction}
        </AboutMe>
        <ContactButton
          data-aos='fade-up'
          data-aos-delay='400'
          href={"#contact"}
        >
          Get in Touch
        </ContactButton>
      </SectionWrapper>
    </>
  );
};

export default Hero;
const ContactButton = styled.a`
  width: 130px;
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
  @media (max-width: 767px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 40px;
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

  line-height: 0.9;
`;
const Name = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  color: #b3b3b3;
  line-height: 1.1;
`;
const Intro = styled.h1`
  color: #fff;
  font-family: SF Mono;
  font-size: clamp(14px, 5vw, 16px);
  color: #02d463;
  font-weight: 400;

  margin-bottom: 20px;
`;
