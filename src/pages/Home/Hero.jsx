import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

export const ContentContainer = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.text};
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 2;
  transition: 0.8s all ease;
`;

export const Home = styled.div`
  font-size: 6rem;
  font-weight: 600;
`;

export const TypewriterContainer = styled.span`
  font-size: 2rem;
  height: 50px;
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
