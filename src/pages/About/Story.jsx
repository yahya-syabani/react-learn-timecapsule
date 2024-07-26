import React from "react";
import styled from "styled-components";
import { story } from "../../utils/Data";
import { motion } from "framer-motion";

export const StoryContainer = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  gap: 50px;
  width: 100%;
  z-index: 2;
`;

export const Title = styled.span`
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  transition: 0.8s all ease;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    transition: 0.8s all ease;
    margin-bottom: 40px;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  transition: 0.8s all ease;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 70px;
    transition: 0.8s all ease;
  }
`;

export const TimelineComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Timeline = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
    transition: 0.8s all ease;
  }
`;

export const TimelineDate = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: -14px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: -8px;
    transition: 0.8s all ease;
  }
`;

export const TimelineTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
    margin-bottom: 4px;
    transition: 0.8s all ease;
  }
`;

export const TimelineDescription = styled.span`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    transition: 0.8s all ease;
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
    margin-left: -10px;
    scale: 0.8;
    align-items: flex-end;
    margin-top: 50px;
  }
`;

export const Icon1 = styled.div`
  margin-bottom: 400px;
`;

export const Icon2 = styled.div`
  margin-top: 350px;
`;

function Story() {
  return (
    <StoryContainer>
      <Title>Our Story</Title>
      <Timeline>___________</Timeline>
      <TimelineContainer>
        {story.map((story) => (
          <TimelineComponent>
            <TimelineDate>{story.date}</TimelineDate>
            <TimelineTitle>{story.title}</TimelineTitle>
            <TimelineDescription>{story.description}</TimelineDescription>
          </TimelineComponent>
        ))}
      </TimelineContainer>
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
    </StoryContainer>
  );
}

export default Story;
