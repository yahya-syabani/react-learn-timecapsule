import React from "react";
import styled from "styled-components";
import { project } from "../../utils/Data";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  transition: 0.3s all ease;
  z-index: 1;
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
  gap: 60px;
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

export const BackgroundContainer = styled.div`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 270px;
  display: flex;
  gap: 10%;
  z-index: -2;
  @media screen and (max-width: 768px) {
    margin-top: -30px;
  }
`;

export const Icon1 = styled.div`
  margin-bottom: 50px;
`;

export const Icon2 = styled.div`
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.iconbg};
  &:hover {
    scale: 1.02;
    background-color: #334366;
    transition: 0.3s all ease;
  }
`;

export const ImageDescription = styled.div`
  display: none;
  transition: 1s all ease;
  ${ImageContainer}:hover & {
    display: block;
    transition: 1s all ease;
    opacity: 1;
    position: absolute;
    text-align: center;
    font-style: italic;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    z-index: 1;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <BackgroundContainer>
        <motion.div
          initial={{ x: "-50vw" }}
          animate={{ x: "0", rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Icon1>
            <svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              transform="scale (0.8)"
            >
              <polygon points="50,25 100,100 0,100" fill={"#ff9a99"} />
            </svg>
          </Icon1>
        </motion.div>
        <motion.div
          initial={{ x: "50vw" }}
          animate={{ x: "0", rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Icon2>
            <svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              transform="scale (0.8) rotate(180, 0, 0)"
            >
              <polygon points="50,25 100,100 0,100" fill="#8cd3f7" />
            </svg>
          </Icon2>
        </motion.div>
      </BackgroundContainer>

      <Home>Current Projects</Home>
      <ProjectContainer>
        {project.map((project) => (
          <ImageContainer>
            <ProjectComponent src={project.img} />
            <ImageDescription>{project.description}</ImageDescription>
          </ImageContainer>
        ))}
      </ProjectContainer>
    </HeroContainer>
  );
}

export default Hero;
