import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

export const HeroContainer = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s all ease;
  z-index: 1;
`;
export const BackgroundContainer = styled.div``;
export const ContentContainer = styled.div`
  margin-top: -100px;
  width: 55%;
  height: 80%;
  background-color: #fffbf8;
  border: 5px solid;
  border-color: #cccccc;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 50px;
  gap: 50px;
`;
export const Title = styled.span`
  width: 100%;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    transition: 0.8s all ease;
  }
`;
export const InformationContainer = styled.div`
  padding-inline-start: 80px;
  justify-content: center;
`;
export const EmailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
`;
export const LocationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
`;
export const EmailLogo = styled(EmailIcon)`
  margin: 40px;
  && {
    width: ${(props) => props.size || "70px"};
    height: ${(props) => props.size || "70px"};
    color: ${(props) => props.color || "#ff9898"};
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
export const MapsLogo = styled(PlaceIcon)`
  margin: 40px;
  && {
    width: ${(props) => props.size || "70px"};
    height: ${(props) => props.size || "70px"};
    color: ${(props) => props.color || "#ff9898"};
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
export const TextContainer = styled.span`
  width: 100%;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: left;
  padding-right: 10%;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    transition: 0.8s all ease;
  }
`;
function Hero() {
  return (
    <HeroContainer>
      <BackgroundContainer />
      <ContentContainer>
        <Title>LETS'S TALK</Title>
        <InformationContainer>
          <EmailContainer>
            <EmailLogo />
            <TextContainer>email@email.com</TextContainer>
          </EmailContainer>
          <LocationContainer>
            <MapsLogo />
            <TextContainer>
              Jl. Taman Sakura I No. 23, Sentul City, Bogor, Jawa Barat,
              Indonesia
            </TextContainer>
          </LocationContainer>
        </InformationContainer>
      </ContentContainer>
    </HeroContainer>
  );
}

export default Hero;
