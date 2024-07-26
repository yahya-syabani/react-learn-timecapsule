import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

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
`;

export const BackgroundContainer = styled.div`
  margin-top: -60px;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  display: flex;
  gap: 60%;
`;

export const Icon1 = styled.div``;

export const Icon2 = styled.div``;

function Hero() {
  return (
    <ContentContainer>
      <Home>What time is it?</Home>
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
              transform="scale(1.18)"
            >
              <polygon points="50,10 100,100 0,100" fill={"#ff9a99"} />
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
              transform="scale(1.18) rotate(180, 0, 0)"
            >
              <polygon points="50,10 100,100 0,100" fill="#8cd3f7" />
            </svg>
          </Icon2>
        </motion.div>
      </BackgroundContainer>
      <TypewriterContainer>
        <Typewriter words={["It's time to change"]} loop={0} />
      </TypewriterContainer>
    </ContentContainer>
  );
}

export default Hero;
