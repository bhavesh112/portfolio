import React from "react";
import styled from "styled-components";
import { data } from "../../config";
import headshot from "./../../assets/headshot.png";
const About = () => {
  return (
    <>
      <SectionWrapper id='about'>
        <Heading>About Me</Heading>
        <MainWrapper>
          <ContentWrapper>
            <Content>{data.aboutMe}</Content>
            <SkillsHeader>Technologies and Libraries that i use :</SkillsHeader>
            <SkillsList>
              {data.skills.map((item) => (
                <Skill>{item}</Skill>
              ))}
            </SkillsList>
          </ContentWrapper>
          <ImageWrapper>
            <Img src={headshot} alt='headshot' />
          </ImageWrapper>
        </MainWrapper>
      </SectionWrapper>
    </>
  );
};

export default About;

const SkillsList = styled.ul`
  list-style: none;
  margin: 25px 0px 0px;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
`;
const Skill = styled.li`
  position: relative;
  font-size: 14px;
  color: rgb(189, 189, 189);
  margin-bottom: 10px;
  &:hover {
    color: #02d463;
  }
  &::before {
    content: "▹";
    margin-right: 4px;
    color: #02d463;
  }
`;
const SkillsHeader = styled.div`
  margin-top: 20px;
`;
const ContentWrapper = styled.div`
  width: 50%;
`;
const SectionWrapper = styled.section`
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;
const Img = styled.img`
  transform: translate(-14px, -14px);
  filter: grayscale(1);
  transition: all 0.25s ease-in;
  &:hover {
    transform: translate(-20px, -20px);
    filter: grayscale(0);
  }
`;
const ImageWrapper = styled.div`
  border: 4px dashed #02d463;
  width: 300px;
  height: 300px;
`;
const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  color: #8899a6;
  margin-bottom: 20px;
  & span {
    color: #02d463;
  }
`;
const Heading = styled.h3`
  font-size: clamp(38px, 5vw, 50px);
  line-height: clamp(38px, 5vw, 50px);
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
  }
`;
