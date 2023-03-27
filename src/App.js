import React from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Resume from './components/resume';
import Footer from './components/footer';
import image from './images/background.jpg';

export default function App() {
  return (
    <main style={{backgroundImage:`url(${image})`,
                  backgroundRepeat:"no-repeat",
                  backgroundSize:"cover"}}
                  className='text-black'>

    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
    <Footer />

    </main>
  );
}

