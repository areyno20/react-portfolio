import React from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Resume from './components/resume';

export default function App() {
  return (
    <main className='text-black bg-stone-700'>

    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />

    </main>
  );
}

