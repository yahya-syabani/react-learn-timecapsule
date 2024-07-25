import React from "react";
import styled from "styled-components";
import { story } from "../../utils/Data";

export const StoryContainer = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  gap: 50px;
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
    </StoryContainer>
  );
}

export default Story;
