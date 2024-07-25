import React from "react";
import styled from "styled-components";
import { theLeader } from "../../utils/Data";

export const LeaderContainer = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  gap: 50px;
  transition: 0.8s all ease;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    transition: 0.8s all ease;
  }
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    transition: 0.8s all ease;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 50px;
    transition: 0.8s all ease;
  }
`;

export const LeaderComponent = styled.div`
  width: 90%;
  align-items: center;
  text-align: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 30px;
  &:hover {
    scale: 1.02;
  }
  transition: 0.3s all ease;
`;

export const Name = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    transition: 0.3s all ease;
  }
`;

export const Description = styled.div`
  font-style: italic;
  margin-top: -7px;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0px;
    transition: 0.3s all ease;
  }
`;

function Leaders() {
  return (
    <LeaderContainer>
      <Title>The Leaders</Title>
      <ContentContainer>
        {theLeader.map((leader) => (
          <LeaderComponent>
            <Image src={leader.img} />
            <Name>{leader.name}</Name>
            <Description>{leader.title}</Description>
          </LeaderComponent>
        ))}
      </ContentContainer>
    </LeaderContainer>
  );
}

export default Leaders;
