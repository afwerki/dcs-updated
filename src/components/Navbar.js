import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "./images/dcsLogo.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="header">
      {/* <div className="Moto">
        <h4>Clean Data Safe Patient</h4>
        <input className="search" placeholder="search"></input>
      </div> */}
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#26a69a" }} />
          ) : (
            <FaBars size={30} style={{ color: "#26a69a" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="SmartTools"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Smart Tools
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Resources"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
