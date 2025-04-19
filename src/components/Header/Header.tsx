import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import logo from "../../assets/Images/vecteezy_music-note-logo-vector-template_6559143-Picsart-AiImageEnhancer-removebg-preview-Picsart-AiImageEnhancer.png"
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"><img src={logo} /> </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#"> 
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
            </a></li>
          <li><a href="#"><Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
             to="about"
              className="navbar--content"
            >
              About 
            </Link></a></li>
          {/* <li><a href="#">Portfolio</a></li> */}
          <li>
            <a href="#">
          <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Service"
        className="btn btn-outline-primary"
      >
     Services
      </Link>
            </a>
            </li>
          <li><a href="#">  <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Work"
        className="btn btn-outline-primary"
      >
        Contact 
      </Link></a></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
