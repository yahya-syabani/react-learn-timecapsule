import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/Logo.png";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

export const Foot = styled.div`
  background-color: ${({ theme }) => theme.footerbg};
  width: 100%;
  height: 10rem;
  display: flex;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FooterLogo = styled.span`
  scale: 1.1;
  display: flex;
  align-items: center;
  width: 5rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.text};
`;
export const Logo = styled.img`
  object-fit: contain;
  height: 60px;
  width: 180px;
  display: flex;
  flex-direction: column;
`;
export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: -2px;
`;

export const Time = styled.span`
  font-weight: 700;
  text-decoration: none;
`;
export const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-right: 2rem;
  width: 20rem;
`;
export const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 300;
  :hover {
    color: ${({ theme }) => theme.icon};
  }
`;

export const EmailLogo = styled(EmailIcon)`
  color: ${({ theme }) => theme.icon};
`;

export const EmailInformation = styled.div`
  color: ${({ theme }) => theme.text};
`;

export const Maps = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 300;
  :hover {
    color: ${({ theme }) => theme.icon};
  }
`;

export const MapsLogo = styled(PlaceIcon)`
  color: ${({ theme }) => theme.icon};
`;

export const MapsInformation = styled.div`
  color: ${({ theme }) => theme.text};
`;

function Footer() {
  return (
    <Foot>
      <FooterContainer>
        <FooterLogo>
          <Logo src={mainLogo}></Logo>
          <LogoText>
            <Time>Time</Time>
            Capsule
          </LogoText>
        </FooterLogo>
        <FooterInformation>
          <Email>
            <EmailLogo />
            <EmailInformation> email@email.com</EmailInformation>
          </Email>
          <Maps>
            <MapsLogo />
            <MapsInformation>
              Jl. Taman Sakura I No. 23, Sentul City, Bogor, Jawa Barat,
              Indonesia
            </MapsInformation>
          </Maps>
        </FooterInformation>
      </FooterContainer>
    </Foot>
  );
}

export default Footer;
