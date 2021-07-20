import React from "react";
import styled from "styled-components";
import { data } from "./../../config";
import pdf from "./../../assets/resume.pdf";
const Header = () => {
  const [scroll, setScroll] = React.useState(false);
  const [prevScroll, setPrevScroll] = React.useState(0);

  const handleNav = () => {
    let st = window.scrollY;
    if (!st) {
      setScroll(false);
    } else if (st > prevScroll) {
      setScroll("down");
    } else {
      setScroll("up");
    }
    setPrevScroll(st);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => handleNav(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleNav(e));
    };
  }, [prevScroll]);
  return (
    <>
      <Wrapper scrollDirection={scroll}>
        <MyName href='#home' scrollDirection={scroll}>
          {data.name}
        </MyName>
        <NavList>
          {Object.keys(data.nav)
            .filter((item) => data.nav[item] === true)
            .map((item) => (
              <>
                <NavLink>
                  <a href={"#" + item}>{item}</a>
                </NavLink>
              </>
            ))}
          <NavLink>
            <a href={pdf} download={`${data.name + "_Resume.pdf"}`}>
              Resume
            </a>
          </NavLink>
        </NavList>
      </Wrapper>
    </>
  );
};

export default Header;
const NavList = styled.ul`
  display: inline-block;
  list-style: none;
`;
const NavLink = styled.li`
  display: inline-block;
  color: #fff;
  text-transform: capitalize;
  & a {
    color: #fff;
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
  &:not(:last-child) {
    margin-right: 20px;
    & a {
      &:active {
        outline: 2px dashed #02d463;
        outline-offset: 3px;
      }
    }
  }
  &:last-child {
    & a {
      border: 2px solid #02d463;
      padding: 12px 12px 8px;
      color: #02d463;
      border-radius: 4px;
      &:hover {
        background-color: #02d463;
        color: #fff;
      }
    }
  }
`;
const MyName = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
  color: #02d463;
  font-family: "Satisfy", cursive;
  font-size: 28px;
  display: flex;
`;
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: #121212;
  backdrop-filter: blur(10px);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  height: ${(props) => props.scrollDirection === "up" && "70px"};
  transform: ${(props) =>
    props.scrollDirection === "up"
      ? "translateY(0px)"
      : props.scrollDirection === "down" && "translateY(-80px)"};
  background-color: ${(props) => props.scrollDirection === "up" && "#121212"};
  box-shadow: ${(props) =>
    props.scrollDirection === "up" && "0 10px 30px -10px rgba(64, 64, 64,0.7)"};
`;
