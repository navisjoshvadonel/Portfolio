import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingSocials from './components/FloatingSocials';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return 'dark'; // default to premium dark theme
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
        const header = document.querySelector('nav');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary/20 min-h-screen transition-colors duration-300">
      <ParticleBackground />
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-border-subtle transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
          <a href="#" className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
            NJD
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              className="p-2.5 rounded-full hover:bg-surface-container transition-colors duration-200 flex items-center justify-center text-on-surface focus:outline-none"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xl select-none">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            
            <a href="#contact" className="bg-primary text-pure-white px-6 py-2 rounded font-medium hover:opacity-90 active:scale-95 transition-all duration-200 font-label-sm text-label-sm uppercase tracking-wider">
              Connect
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 space-y-40">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <FloatingSocials />
      <Footer />
    </div>
  );
}

export default App;

