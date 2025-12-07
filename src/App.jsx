import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications'; // 1. Import
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Certifications /> 
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;