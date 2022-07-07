import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />      
        <Link className="links" to="/">HOME</Link>
      </nav>
    </header>
  );
};

export default Header;