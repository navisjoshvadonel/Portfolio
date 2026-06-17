import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-subtle mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-headline-md text-headline-md text-primary font-bold">NJD</span>
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">© 2026 Navis Joshva Donel J. All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#about" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline uppercase tracking-wider">About</a>
          <a href="#projects" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline uppercase tracking-wider">Projects</a>
          <a href="#experience" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline uppercase tracking-wider">Experience</a>
          <a href="#contact" className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline uppercase tracking-wider">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
