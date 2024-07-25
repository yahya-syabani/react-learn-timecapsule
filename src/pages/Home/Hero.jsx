import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

export const ContentContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.text};
  z-index: 2;
  transition: 0.8s all ease;
`;

export const Home = styled.div`
  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const TypewriterContainer = styled.span`
  font-size: 2rem;
  height: 50px;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

function Hero() {
  return (
    <ContentContainer>
      <Home>What time is it?</Home>
      <TypewriterContainer>
        <Typewriter words={["It's time to change"]} loop={0} />
      </TypewriterContainer>
    </ContentContainer>
  );
}

export default Hero;
