import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;
export const IconContainer = styled.div`
  /* height: 70vh;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 0; */
`;
export const Icon1 = styled.div`
  scale: 4;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid #555;
`;
export const Icon2 = styled.div`
  scale: 4;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #555;
`;
export const ContentContainer = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.text};
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 2;
`;
export const Hero = styled.div`
  font-size: 6rem;
  font-weight: 600;
`;
export const TypewriterContainer = styled.span`
  font-size: 2rem;
  height: 50px;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 600;
`;
export const PartnerContainer = styled.div``;
export const PartnerLogoContainer = styled.div``;

function Home() {
  return (
    <HomeContainer>
      {/* <IconContainer>
        <Icon1 />
        <Icon2 />
      </IconContainer> */}
      <ContentContainer>
        <Hero>What time is it?</Hero>
        <TypewriterContainer>
          <Typewriter words={["It's time to change"]} loop={0} />
        </TypewriterContainer>
      </ContentContainer>
      <PartnerContainer>
        <Title>Our Partner</Title>
        <PartnerLogoContainer></PartnerLogoContainer>
      </PartnerContainer>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
