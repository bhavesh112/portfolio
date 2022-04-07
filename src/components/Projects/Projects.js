import React from "react";
import styled from "styled-components";
import { data } from "../../config";
const isEven = (number) => {
  return (number + 1) % 2 === 0;
};
const Projects = () => {
  return (
    <>
      <Section id='project'>
        <Heading>Projects</Heading>
        <MainWrapper>
          {data.projects.map((item, index) => {
            return (
              <ProjectWrapper
                data-aos={(index + 1) % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <ImageWrapper isEven={isEven(index)}>
                  <img
                    src={
                      require(`../../assets/Project${index + 1}.png`).default
                    }
                    alt='project-img'
                  ></img>
                </ImageWrapper>
                <Name isEven={isEven(index)}>{item.name}</Name>
                <ContentWrapper isEven={isEven(index)}>
                  {item.description}
                </ContentWrapper>
                {item.stack && (
                  <Stack isEven={isEven(index)}>
                    {item.stack.map((innerItem) => (
                      <Item>{innerItem}</Item>
                    ))}
                  </Stack>
                )}
                <LinkWrapper isEven={isEven(index)}>
                  {item.github && (
                    <Link target='_blank' href={item.github}>
                      <i className='fab fa-github'></i>
                    </Link>
                  )}
                  {item.live && (
                    <Link href={item.live} target='_blank'>
                      <i className='fas fa-external-link-alt'></i>
                    </Link>
                  )}
                </LinkWrapper>
              </ProjectWrapper>
            );
          })}
        </MainWrapper>
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
const Name = styled.div`
  font-family: SF Mono;
  font-size: 22px;
  grid-area: overlap;
  align-self: top;
  position: relative;
  justify-self: ${(props) => (props.isEven ? "start" : "end")};
  @media (max-width: 767px) {
    justify-self: center;
    margin-top: 12px;
    font-weight: 600;
  }
`;
const LinkWrapper = styled.div`
  justify-self: ${(props) => (props.isEven ? "end" : "start")};
  padding: 8px;
  @media (max-width: 767px) {
    justify-self: end;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: #8899a6;
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover {
    color: #02d463;
  }
`;
const Stack = styled.ul`
  align-self: end;
  justify-self: ${(props) => (props.isEven ? "start" : "end")};
  list-style: none;
  grid-area: overlap;
  display: inline-block;
  position: relative;
  max-width: 50%;
  @media (max-width: 767px) {
    grid-area: unset;
    justify-self: start;
    max-width: 100%;
  }
`;
const Item = styled.li`
  display: inline-block;
  font-size: clamp(12px, 2vw, 18px);
  color: #8899a6;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:before {
    content: "▹";
    margin-right: 4px;
    color: #02d463;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const ProjectWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "overlap";
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
const ImageWrapper = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
  // aspect-ratio: 16 / 9;
  width: 50%;
  position: relative;
  grid-area: overlap;
  align-self: ${(props) => props.isEven && "center"};
  justify-self: ${(props) => props.isEven && "end"};
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #02d463;
    left: 0;

    opacity: 0.2;
  }
  @media (max-width: 767px) {
    width: 100%;
    &:after {
      content: "";
      background-color: #111111;
      opacity: 0.8;
    }
    box-shadow: 0 10px 30px -10px rgba(64, 64, 64, 0.7);
  }
`;
const ContentWrapper = styled.div`
  width: 60%;
  background-color: #2a2526;
  border-radius: 6px;
  position: relative;
  grid-area: overlap;
  align-self: center;
  justify-self: ${(props) => (props.isEven ? "start" : "end")};
  text-align: ${(props) => props.isEven && "right"};
  font-family: SF Mono;
  font-weight: 400;
  font-size: 14px;
  padding: 12px;
  @media (max-width: 767px) {
    width: 100%;
    background-color: transparent;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    align-self: center;
    text-align: left;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
