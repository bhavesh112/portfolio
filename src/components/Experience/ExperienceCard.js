import React from "react";
import styled from "styled-components";
const ExperienceCard = ({ item }) => {
  return (
    <>
      <Tenure>{item.tenure}</Tenure>
      <Company>{item.companyName}</Company>
      <Position>{item.position}</Position>
      <Description>{item.description}</Description>
    </>
  );
};

export default ExperienceCard;

const Tenure = styled.div`
  font-size: 18px;
  color: #02d463;
`;
const Position = styled.div`
  font-size: 16px;
  margin-top: 12px;
  color: #8899a6;
`;
const Description = styled.div`
  font-size: 12px;
  font-family: SF Mono;
  font-weight: 400;
  color: rgb(190, 199, 213);
  white-space: pre-line;
`;
const Company = styled.div`
  font-size: 22px;
  color: #fff;
  font-family: SF Mono;
  font-weight: 600;
`;
