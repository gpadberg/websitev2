import React from 'react';
import logo from '../assets/logo.png'; // Update the path to your logo
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <Link to="home" smooth={true} duration={500}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
