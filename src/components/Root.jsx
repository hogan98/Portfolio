import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import NavBar from "./NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WebPortfolio from "./Pages/WebPortfolio";

export default function Root() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/WebPortfolio" element={<WebPortfolio />} />
            {/* <Route exact path="*" element={<NoMatch />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
