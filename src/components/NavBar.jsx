import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// install react-router-dom
//install react-icons
export default function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="nav-container">
      <nav ref={navRef}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeClassName="active" exact>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/WebPortfolio" activeClassName="active" exact>
              WebPortfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeClassName="active" exact>
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}
