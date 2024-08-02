import React from "react";
import styled from "styled-components";
import { theLeader } from "../../utils/Data";
import { motion } from "framer-motion";

export const LeaderContainer = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  gap: 50px;
  transition: 0.8s all ease;
  z-index: 2;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    transition: 0.8s all ease;
  }
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    transition: 0.8s all ease;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  gap: 80px;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 50px;
    transition: 0.8s all ease;
  }
`;

export const LeaderComponent = styled.div`
  width: 90%;
  align-items: center;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  align-items: center;
  text-align: center;
  &:hover {
    scale: 1.02;
  }
  transition: 0.3s all ease;
`;

export const Image = styled.img`
  align-items: center;
  text-align: center;
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 30px;
  position: relative;
  ${ImageContainer}:hover & {
    filter: brightness(50%);
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

export const Name = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    transition: 0.3s all ease;
  }
`;

export const Description = styled.div`
  font-style: italic;
  margin-top: -7px;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0px;
    transition: 0.3s all ease;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  margin-top: 100px;
  z-index: -1;
  justify-content: space-around;
  gap: 40%;
  transition: 0.3s all ease;
  @media screen and (max-width: 768px) {
    display: hidden;
  }
`;

export const Icon1 = styled.div`
  margin-bottom: 300px;
`;

export const Icon2 = styled.div`
  margin-top: 320px;
`;

function Leaders() {
  return (
    <LeaderContainer>
      <Title>The Leaders</Title>
      <ContentContainer>
        {theLeader.map((leader) => (
          <LeaderComponent>
            <ImageContainer>
              <Image src={leader.img} />
              <ImageDescription>{leader.description}</ImageDescription>
            </ImageContainer>
            <Name>{leader.name}</Name>
            <Description>{leader.title}</Description>
          </LeaderComponent>
        ))}
      </ContentContainer>
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
    </LeaderContainer>
  );
}

export default Leaders;
