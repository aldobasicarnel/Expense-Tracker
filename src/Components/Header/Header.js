import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Money Tracker</h1>
        <ul className="navbar-ul">
          <li className="navbar-li">Home</li>
          <li className="navbar-li">About</li>
          <li className="navbar-li">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
