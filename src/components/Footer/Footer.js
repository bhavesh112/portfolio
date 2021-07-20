import React from "react";
import styled from "styled-components";
import { data } from "../../config";
const Footer = () => {
  const date = new Date();

  return (
    <FooterWrapper>
      <CopyRight>Copyright {date.getFullYear()} © Bhavesh Wadhwani</CopyRight>
      <SocialWrapper>
        {Object.keys(data.social).map((item) => {
          if (item === "email")
            return (
              <Icon href={`mailto:${data.social.email}`}>
                <i className={`fas fa-envelope`}></i>
              </Icon>
            );
          return (
            <Icon target='_blank' href={data.social[item]}>
              <i className={`fab fa-${item}`}></i>
            </Icon>
          );
        })}
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding: 100px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.a`
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover {
    color: #02d463;
  }
`;
const CopyRight = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: SF Mono;
  color: #fff;
  margin-bottom: 12px;
  &:hover {
    color: #02d463;
  }
`;
