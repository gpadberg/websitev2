import React from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
