import React from "react";
import styled from "styled-components";

export const HeroContainer = styled.span`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme.text};
  z-index: 2;
  margin-left: 8rem;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
  }
`;
export const AboutUs = styled.span`
  width: 100%;
  font-size: 6rem;
  font-weight: 600;
  text-align: left;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;
export const Paragraph = styled.span`
  width: 70%;
  font-size: 1.5rem;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <AboutUs>About Us</AboutUs>
      <Paragraph>
        Through innovative solutions and a collaborative team approach, Time
        Capsule is committed to making a positive difference in the way people
        explore and engage with the world around them.
      </Paragraph>
    </HeroContainer>
  );
}

export default Hero;
