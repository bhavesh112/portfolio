import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <Section id='projects'>
        <Heading>Projects</Heading>
      </Section>
    </>
  );
};

export default Projects;

const Section = styled.section`
  width: 100%;
  padding: 100px 150px;
  @media (max-width: 767px) {
    padding: 50px 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 80px 40px;
  }
`;
const Heading = styled.h3`
  font-size: clamp(32px, 5vw, 50px);
  line-height: clamp(32px, 5vw, 50px);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    position: relative;
    display: inline-block;
    margin-left: 20px;
    top: -50%;
    width: 300px;
    height: 1px;
    background: linear-gradient(to right, #02d463, #fff);
    @media (max-width: 767px) {
      min-width: 120px;
      max-width: 180px;
    }
  }
`;
