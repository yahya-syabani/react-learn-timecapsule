import React from "react";
import { partners } from "../../utils/Data";
import styled from "styled-components";

export const PartnerContainer = styled.div`
  color: ${({ theme }) => theme.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.8s all ease;
`;

export const Title = styled.div`
  font-size: 5rem;
  font-weight: 600;
  text-align: center;
`;

export const PartnerLogoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PartnerLogo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 60px;
`;

function Partner() {
  return (
    <div>
      <PartnerContainer>
        <Title>Our Partner</Title>
        <PartnerLogoContainer>
          {partners.map((partner) => (
            <PartnerLogo src={partner.img} />
          ))}
        </PartnerLogoContainer>
      </PartnerContainer>
    </div>
  );
}

export default Partner;
