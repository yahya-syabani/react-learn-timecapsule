import React from "react";
import styled from "styled-components";
import Hero from "./Projects/Hero";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 6rem;
  transition: 0.8s all ease;
`;

export default function Projects() {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
}
