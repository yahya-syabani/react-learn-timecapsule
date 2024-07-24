import React from "react";
import styled from "styled-components";
import Hero from "./Home/Hero";
import Partner from "./Home/Partner";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 1rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Partner />
    </HomeContainer>
  );
}

export default Home;
