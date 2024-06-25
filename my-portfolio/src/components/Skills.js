// src/components/Skills.js
import React from 'react';
import './Skills.css';
import Boop from './Boop';
import python from '../assets/python.png'; 
import html from '../assets/html.png'; 
import css from '../assets/css.png'; 
import javascript from '../assets/javascript.png'; 


const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <Boop rotation={20} timing={150}>
          <img src={python} alt="Python" className="skill-logo" />
        </Boop>
        <Boop rotation={20} timing={150}>
          <img src={html} alt="HTML" className="skill-logo" />
        </Boop>
        <Boop rotation={20} timing={150}>
          <img src={css} alt="CSS" className="skill-logo" />
        </Boop>
        <Boop rotation={20} timing={150}>
          <img src={javascript} alt="JavaScript" className="skill-logo" />
        </Boop>
      </div>
    </section>
  );
};

export default Skills;
