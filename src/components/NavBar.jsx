import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/App.css";
import "../styles/Navbar.css";

function NavBar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleClick = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavLinkClick = () => {
    setIsNavActive(false);
  };

  return (
    <>
      <header>
        <span className="nav-logo">Ian Reeves</span>
        <div className="nav-toggle" onClick={handleClick}>
          <FaBars className="bar" />
        </div>
        <nav className={`nav-bar ${isNavActive ? "active" : ""}`}>
          <div className="nav-items">
            <ul className="links">
              <li>
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  activeClassName="active"
                  exact
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/WebPortfolio"
                  activeClassName="active"
                  exact
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  WebPortfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  activeClassName="active"
                  exact
                  className="nav-link"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
