import React from "react";
import mainLogo from "../assets/Logo.png";
import {
  Email,
  EmailInformation,
  EmailLogo,
  Foot,
  FooterContainer,
  FooterInformation,
  FooterLogo,
  Maps,
  MapsInformation,
  MapsLogo,
} from "./FooterStyle";
import { Logo, LogoText, Time } from "./NavbarStyle";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Foot>
      <FooterContainer>
        <FooterLogo onClick={scrollToTop} exact to="/">
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
