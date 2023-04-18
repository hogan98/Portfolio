import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../App.css";
// install react-router-dom
//install react-icons
export default function NavBar() {
  return (
    <header>
      <div className="nav-container">
        <nav>
          <ul>
            <h2>Ian Hogan</h2>
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
          <button className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn">
          <FaBars />
        </button>
      </div>
    </header>
  );
}
