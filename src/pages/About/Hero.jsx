import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.span`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme.text};
  z-index: 2;
  margin-top: -4rem;
  transition: 0.3s all ease;
  gap: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const AboutUs = styled.span`
  margin-left: 8rem;
  font-size: 6rem;
  font-weight: 600;
  text-align: left;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const Paragraph = styled.span`
  margin-left: 8rem;
  width: 50%;
  font-size: 1.5rem;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  z-index: -1;
  justify-content: space-around;
  gap: 40%;
`;

export const Icon1 = styled.div`
  margin-bottom: 300px;
`;

export const Icon2 = styled.div`
  margin-top: 320px;
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
