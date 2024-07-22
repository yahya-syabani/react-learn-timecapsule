import React from "react";
import Button from "./Button";
import Search from "./Search";
import mainLogo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link className="navbar_link" to="/">
          <img className="navbar_logo" src={mainLogo} alt="Time Capsule" />
          <div class Name="navbar_logoname">
            <span className="navbar_logoname1">Time</span>
            <span className="navbar_logoname2">Capsule</span>
          </div>
        </Link>
      </div>
      <div className="navbar_right">
        <Link className="navbar_link" to="/">
          Home
        </Link>
        <Link className="navbar_link" to="/About">
          About
        </Link>
        <Link className="navbar_link" to="/Projects">
          Projects
        </Link>
        <Link className="navbar_link" to="/Contacts">
          Contacts
        </Link>
        <div className="navbar_buttonicon">
          <Button />
        </div>
        <div className="navbar_searchicon">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
