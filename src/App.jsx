import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
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
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="noise-overlay" />
      <ParticleBackground />
      <FloatingElements />
      
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center pointer-events-none">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter pointer-events-auto cursor-default"
        >
            <span className="text-gradient">NJ</span>D
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-8 pointer-events-auto"
        >
            {['About', 'Education', 'Skills', 'Certificates', 'Projects'].map((item) => (
                <a 
                    href={`#${item.toLowerCase() === 'certificates' ? 'certifications' : item.toLowerCase()}`}
                    className="text-sm font-medium text-muted/60 hover:text-white transition-colors"
                >
                    {item}
                </a>
            ))}
            <a 
                href="#contact"
                className="px-5 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-bold border border-primary/20"
            >
                Connect
            </a>
        </motion.div>
      </nav>

      <main className="relative z-10">
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
