import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    if (revealRef.current) {
        observer.observe(revealRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 reveal-on-scroll" ref={revealRef}>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary mb-6 block">The Narrative</span>
          <h1 className="font-headline-xl text-headline-xl mb-8 text-primary">
            Navis Joshva Donel J.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            I am exploring the frontiers of Artificial Intelligence, data analytics, and intelligent systems to build impactful technology that solves real-world problems.
          </p>
          <div className="flex flex-wrap gap-12 mt-12">
            <div>
              <div className="font-headline-md text-headline-md mb-1">AI</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Student & Explorer</div>
            </div>
            <div>
              <div className="font-headline-md text-headline-md mb-1">Data</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Analytics Specialist</div>
            </div>
          </div>
          <div className="mt-12 flex gap-4">
            <a href="#projects" className="bg-primary text-pure-white px-8 py-4 rounded-lg font-label-sm text-label-sm uppercase tracking-wider hover:opacity-90 transition-opacity">
              Explore My Work
            </a>
            <a href="#contact" className="bg-surface-container-low text-primary border border-border-subtle px-8 py-4 rounded-lg font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="md:col-span-5 reveal-on-scroll active" style={{ transitionDelay: '200ms' }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container shadow-sm border border-border-subtle group">
            <img 
              src={profileImg} 
              alt="Navis Joshva Donel J" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
              onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x800?text=Navis+Joshva";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
