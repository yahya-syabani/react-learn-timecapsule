import React from "react";
import Hero from "../pages/About/Hero.jsx";
import Leaders from "./About/Leaders";
import Story from "./About/Story";
import styled from "styled-components";
import ScrollByPixelsButton from "./Button";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 8.1rem;
  transition: 0.8s all ease;
`;

function About() {
  const scrollAmount = 100; // Scroll down by 100 pixels each click

  return (
    <AboutContainer>
      <ScrollByPixelsButton scrollAmount={scrollAmount} />
      <Hero />
      <Story />
      <Leaders />
    </AboutContainer>
  );
}

export default About;
