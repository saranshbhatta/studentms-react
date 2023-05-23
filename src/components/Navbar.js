import React from "react";
import "./Navbar.css";
import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <ul>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/database">
            <li>Database</li>
          </a>
          <a href="/contacts">
            <li>Contacts</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
