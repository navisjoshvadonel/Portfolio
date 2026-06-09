import React, { useEffect } from 'react';
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

function App() {
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
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary/20 min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-border-subtle transition-colors duration-200">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16">
          <a href="#" className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
            NAVIS_JOSHVA
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
            <a href="#contact" className="bg-primary text-pure-white px-6 py-2 rounded font-medium hover:opacity-90 active:scale-95 transition-transform duration-200 font-label-sm text-label-sm uppercase tracking-wider">
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
      
      <Footer />
    </div>
  );
}

export default App;
