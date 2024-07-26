import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Foot = styled.div`
  background-color: ${({ theme }) => theme.footerbg};
  width: 100%;
  height: 10rem;
  display: flex;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  transition: 0.8s all ease;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FooterLogo = styled(LinkR)`
  scale: 1.1;
  display: flex;
  align-items: center;
  width: 5rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-decoration: none;
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
