import React from "react";
import styled from "styled-components";
import Hero from "./Home/Hero";
import Partner from "./Home/Partner";
import ScrollByPixelsButton from "./Button";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 10rem;
  transition: 0.8s all ease;
`;

function Home() {
  const scrollAmount = 100; // Scroll down by 100 pixels each click

  return (
    <HomeContainer>
      <ScrollByPixelsButton scrollAmount={scrollAmount} />
      <Hero />
      <Partner />
    </HomeContainer>
  );
}

export default Home;
