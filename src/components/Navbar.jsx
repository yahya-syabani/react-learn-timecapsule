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
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
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
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="About">
            About
          </NavLink>
          <NavLink exact to="/Projects">
            Project
          </NavLink>
          <NavLink exact to="/Contacts">
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
