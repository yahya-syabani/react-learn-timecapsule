import React from "react";
import Hero from "../pages/About/Hero.jsx";
import Leaders from "./About/Leaders";
import Story from "./About/Story";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 8rem;
  transition: 0.8s all ease;
`;

function About() {
  return (
    <AboutContainer>
      <Hero />
      <Story />
      <Leaders />
    </AboutContainer>
  );
}

export default About;
