import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.png";

const NavBar = () => {
  // this state for toggle button clicked
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg p-3 shadow">
      <div className="container-fluid">
        {/* Brand Logo */}
        <NavLink className="navbar-brand" to="#">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <span className="heading">CryptoPulse</span>
        </NavLink>

        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          {/* Navigation Items (centered on small screens) */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-lg-flex justify-content-lg-start text-lg-start text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/markets">
                Markets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/*Get Started Button (centered only on small screens) */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-flex justify-content-lg-end text-lg-end text-center">
            <li className="nav-item">
              <NavLink
                className="n-login rounded"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
