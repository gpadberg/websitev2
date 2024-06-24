import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
