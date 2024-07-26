import React from "react";
import { partners } from "../../utils/Data";
import styled from "styled-components";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import PartnerBackground from "./PartnerBackground";

export const PartnerContainer = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.8s all ease;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
  transition: 0.3s all ease;
  z-index: 1;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const PartnerLogoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
`;

export const PartnerLogo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 60px;
  &:hover {
    scale: 1.3;
    cursor: pointer;
  }
  transition: 0.3s all ease;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
function Partner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 360,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <PartnerContainer>
      <PartnerBackground />
      <Title>Our Partner</Title>
      <PartnerLogoContainer>
        {partners.map((partner) => (
          <PartnerLogo
            src={partner.img}
            onClick={() => {
              window.open(partner.link, "_blank");
            }}
          />
        ))}
      </PartnerLogoContainer>
    </PartnerContainer>
  );
}

export default Partner;
