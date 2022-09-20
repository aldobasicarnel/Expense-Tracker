import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Money Tracker</h1>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>
          <li className="navbar-li">
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
