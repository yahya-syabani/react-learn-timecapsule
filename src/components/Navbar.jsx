import React from "react";
import mainLogo from "../assets/Logo.png";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  NavItems,
  MobileIcon,
  Logo,
  Time,
  LogoText,
  ButtonContainer,
  SearchContainer,
} from "./NavbarStyle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Switch } from "@mui/material";
import { useTheme } from "../utils/ThemeProvider";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo onClick={scrollToTop} exact to="/">
          <Logo src={mainLogo} />
          <LogoText>
            <Time>Time</Time>
            Capsule
          </LogoText>
        </NavLogo>
        <MobileIcon>
          <MenuIcon />
        </MobileIcon>
        <NavItems>
          <NavLink onClick={scrollToTop} exact to="/">
            Home
          </NavLink>
          <NavLink onClick={scrollToTop} exact to="About">
            About
          </NavLink>
          <NavLink onClick={scrollToTop} exact to="/Projects">
            Project
          </NavLink>
          <NavLink onClick={scrollToTop} exact to="/Contacts">
            Contacts
          </NavLink>
          <SearchContainer>
            <SearchIcon />
          </SearchContainer>
          <ButtonContainer>
            <Switch onClick={toggleTheme} />
          </ButtonContainer>
        </NavItems>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
