import React, { useState } from "react";
import mainLogo from "../assets/Logo.png";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
  Logo,
  Time,
  LogoText,
  ButtonContainer,
  SearchContainer,
} from "./NavbarStyledComponent";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@mui/icons-material/Search";
import { darkTheme, lightTheme } from "../utils/Themes";
import { useTheme } from "styled-components";
import { Switch } from "@mui/material";
// import "./Navbar.css";

function Navbar() {
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="About">About</NavLink>
          <NavLink to="/Projects">Project</NavLink>
          <NavLink to="/Contacts">Contacts</NavLink>
          <NavLink>
            <SearchContainer>
              <SearchIcon />
            </SearchContainer>
          </NavLink>
          <NavLink>
            <ButtonContainer>
              <Switch />
            </ButtonContainer>
          </NavLink>
        </NavItems>
      </NavbarContainer>
    </Nav>

    // <div className="navbar">
    //   <div className="navbar_left">
    //     <Link className="navbar_link" to="/">
    //       <img className="navbar_logo" src={mainLogo} alt="Time Capsule" />
    //       <div class Name="navbar_logoname">
    //         <span className="navbar_logoname1">Time</span>
    //         <span className="navbar_logoname2">Capsule</span>
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="navbar_right">
    //     <Link className="navbar_link" to="/">
    //       Home
    //     </Link>
    //     <Link className="navbar_link" to="/About">
    //       About
    //     </Link>
    //     <Link className="navbar_link" to="/Projects">
    //       Projects
    //     </Link>
    //     <Link className="navbar_link" to="/Contacts">
    //       Contacts
    //     </Link>
    //     <div className="navbar_buttonicon">
    //       <Button />
    //     </div>
    //     <div className="navbar_searchicon">
    //       <Search />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
