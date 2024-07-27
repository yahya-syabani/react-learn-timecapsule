import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import Background from "./HeroBackground";

export const ContentContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.text};
  z-index: 0;
  transition: 0.8s all ease;
  @media screen and (max-width: 430px) {
    height: 600px;
  }
`;

export const Home = styled.div`
  font-size: 6rem;
  font-weight: 600;
  text-align: center;
  transition: 0.3s all ease;
  z-index: 2;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 3rem;
  }
`;

export const TypewriterContainer = styled.span`
  font-size: 2rem;
  font-style: italic;
  height: 50px;
  transition: 0.3s all ease;
  z-index: 2;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 1.3rem;
  }
`;

function Hero() {
  return (
    <ContentContainer>
      <Background />
      <Home>What time is it?</Home>
      <TypewriterContainer>
        <Typewriter words={["It's time to change"]} loop={0} />
      </TypewriterContainer>
    </ContentContainer>
  );
}

export default Hero;
