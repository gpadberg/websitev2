import React from 'react';
import headshot from '../assets/headshot.png';
import link1 from '../assets/linkedin.png';
import link2 from '../assets/gmail.webp';
import link3 from '../assets/github.png';
import './About.css'; // Ensure you create this CSS file

const About = () => {
  return (
    <section id="about">
      <div className="home-container">
        <img src={headshot} alt="Grace's headshot" className="headshot" />
        <div className="intro-text">
          <h1>Hi!</h1>
          <p>I'm Grace, a software engineering</p>
          <p>student at the University of Alberta.</p>

        </div>
      </div>
        <div className="logos">
          <a href="https://www.linkedin.com/in/grace-padberg/" target="_blank" rel="noopener noreferrer">
            <img src={link1} alt="LinkedIn" className="logo" />
          </a>
          <a href="mailto:gpadberg@ualberta.ca" target="_blank" rel="noopener noreferrer">
            <img src={link2} alt="Gmail" className="logo" />
          </a>
          <a href="https://github.com/gpadberg" target="_blank" rel="noopener noreferrer">
            <img src={link3} alt="GitHub" className="logo" />
          </a>
          <a href="/resume.pdf" download="GracePadbergResume.pdf">
          <button className="resume-button">My Resume</button>
        </a>
        </div>
    </section>
  );
};

export default About;
