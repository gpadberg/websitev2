import React from 'react';
import headshot from '../assets/headshot.png';
import link1 from '../assets/linkedin.png';
import link2 from '../assets/gmail.webp';
import link3 from '../assets/github.png';
import './About.css'; // Ensure you create this CSS file

const About = () => {
  return (
    <section id="about">
    <h2>About</h2>
    <div className="home-container">
        <img src={headshot} alt="Grace's headshot" className="headshot" />
        <p className="intro-text">
          hey! i'm grace, a software engineering student at the university of alberta.
        </p>
      </div>

      <div className="buttons">
      <a href="/resume.pdf" download="GracePadbergResume.pdf">
        <button className="resume-button">My Resume</button>
        </a>
        <div className="logos">
          <a href="https://www.linkedin.com/in/grace-padberg/" target="_blank" rel="noopener noreferrer">
            <img src={link1} alt="Link 1" className="logo" />
          </a>
          <a href="mailto:gpadberg@ualberta.ca" target="_blank" rel="noopener noreferrer">
            <img src={link2} alt="Link 2" className="logo" />
          </a>
          <a href="https://github.com/gpadberg" target="_blank" rel="noopener noreferrer">
            <img src={link3} alt="Link 3" className="logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

