import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.css";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ian-reeves-3b272b254/"
              className="footer-item"
            >
              Linked In
            </a>
          </li>
          <li>
            <NavLink
              to="/Contact"
              activeClassName="active"
              exact
              className="footer-item"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
