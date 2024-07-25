import React from "react";
import styled from "styled-components";
import { project } from "../../utils/Data";

export const HeroContainer = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  transition: 0.3s all ease;
`;

export const Home = styled.span`
  width: 100%;
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
  margin: 60px;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    transition: 0.8s all ease;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 60px;
  object-position: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    transition: 0.8s all ease;
  }
`;

export const ProjectComponent = styled.img`
  width: 400px;
  height: 250px;
  object-fit: contain;
  object-position: center;
`;

function Hero() {
  return (
    <HeroContainer>
      <Home>Current Projects</Home>
      <ProjectContainer>
        {project.map((project) => (
          <ProjectComponent src={project.img} />
        ))}
      </ProjectContainer>
    </HeroContainer>
  );
}

export default Hero;
