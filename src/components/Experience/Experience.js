import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { data } from "../../config";
import ExperienceCard from "./ExperienceCard";
function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}
const Experience = () => {
  const ref = React.useRef();
  const [inView, setInView] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setInView(elementInViewport(ref.current))
    );
  }, []);

  return (
    <Section id='experience'>
      <Heading>Experience</Heading>
      <ProgressWrapper>
        <AbsoluteWrapper>
          <Line inView={inView} width={data.experience.length * 200}></Line>
          {data.experience.map((item, index) =>
            data.experience[index + 1] ? (
              <>
                <Beads top={(0 + index) * 200}></Beads>
                <Beads top={(1 + index) * 200}></Beads>
              </>
            ) : (
              <>
                <Beads top={(0 + index) * 200}></Beads>
                <Beads top={(1 + index) * 200} ref={ref}></Beads>
              </>
            )
          )}
        </AbsoluteWrapper>
        {data.experience.map((item, index) => (
          <ExperienceWrapper
            data-aos={(index + 1) % 2 === 0 ? "fade-up-left" : "fade-up-right"}
            even={(index + 1) % 2 === 0}
          >
            <ExperienceCard item={item} />
          </ExperienceWrapper>
        ))}
      </ProgressWrapper>
    </Section>
  );
};

export default Experience;

const ExperienceWrapper = styled.div`
  max-height: 200px;
  height: 200px;
  margin-top: 20px;
  width: 300px;
  display: inline-block;
  overflow: hidden;
  text-align: ${(props) => !props.even && "right"};
  align-self: ${(props) => props.even && "flex-end"};
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

const ProgressWrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const AbsoluteWrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 20px;
`;
const Section = styled.div`
  width: 100%;
  padding: 100px 150px;
`;
const Line = styled.div`
  width: ${(props) => (props.inView ? props.width + "px" : "0")};
  transform: rotate(90deg);
  transform-origin: left 1px;
  position: absolute;
  left: calc(50% + 1px);
  transition: width 1s;
  height: 3px;
  background-color: #02d463;
`;

const Beads = styled.div`
  width: 20px;
  height: 20px;
  background-color: #02d463;
  position: absolute;
  border-radius: 50%;
  top: ${(props) => props.top + "px"};
`;
