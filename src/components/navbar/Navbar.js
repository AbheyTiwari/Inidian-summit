import React, { useState } from "react";
import { LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <nav id="nav" className={isNavOpen ? "show" : ""}>
        <ul>
          <li>
            <Link id="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/committee-agenda">Committees and Agendas</Link>
          </li>
          {/* <li>
            <a href="#">Our Organisation
              <i className='fas fa-angle-down'></i>
            </a>
            <ul id="Our_Organisation">
              <li><a href="#">Secretariat</a></li>
              <li><a href="#">Memories</a></li>
              <li><a href="src/Pages/MRN.html">Mahila Sashaktikaran Avam Rastra Nirmarn</a></li>
            </ul>
          </li>
          <li><a href="#">Collabrations and Sponsors </a></li>
          <li><a href="#">Events</a></li> */}
          <li>
            <Link to="/MRN">Mahila Sashaktikaran Avam Rastra Nirmarn</Link>
          </li>
          <li>
            <Link to="/">
              About Us
              <i className="fas fa-angle-down"></i>
            </Link>
            <ul id="about">
              <li>
                <Link to="/about/introduction">
                  Introduction to The Indian Summit
                </Link>
              </li>
              <li>
                <Link to="/about/theme">Theme of The Indian Summit 24</Link>
              </li>
              <li>
                <Link to="/about/profile">Meet the Secretariat</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Link to="/register">
        <button id="Register_button">Register Now</button>
      </Link>
      <div id="hamburger" onClick={toggleNav}>
        &#9776;
      </div>
      <div id="cross" onClick={toggleNav}>
        &times;
      </div>
    </header>
  );
};

export default Navbar;
