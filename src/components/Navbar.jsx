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
  MobileMenu,
  MobileLink,
} from "./NavbarStyle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Switch } from "@mui/material";
import { useTheme } from "../utils/ThemeProvider";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
    });
    setIsOpen(!isOpen);
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
          <MenuIcon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
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
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink exact to="/" onClick={handleClick}>
              Home
            </MobileLink>
            <MobileLink exact to="/About" onClick={handleClick}>
              About
            </MobileLink>
            <MobileLink exact to="/Projects" onClick={handleClick}>
              Project
            </MobileLink>
            <MobileLink exact to="/Contacts" onClick={handleClick}>
              Contacts
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
