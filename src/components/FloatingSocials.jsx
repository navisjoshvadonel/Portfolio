import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col sm:flex-row gap-4 pointer-events-none">
      {/* GitHub Floating Action Button */}
      <a 
        href="https://github.com/navisjoshvadonel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-white hover:bg-primary text-primary hover:text-white rounded-full border border-border-subtle shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group animate-float-slow"
        title="Visit GitHub Profile"
      >
        <Github size={24} className="transition-transform duration-300 group-hover:rotate-12" />
      </a>

      {/* LinkedIn Floating Action Button */}
      <a 
        href="https://www.linkedin.com/in/navis-joshva-donel-j-18a38525b/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="pointer-events-auto flex items-center justify-center w-14 h-14 bg-white hover:bg-[#0077B5] text-[#0077B5] hover:text-white rounded-full border border-border-subtle shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group animate-float-slower"
        title="Visit LinkedIn Profile"
      >
        <Linkedin size={24} className="transition-transform duration-300 group-hover:-rotate-12" />
      </a>
    </div>
  );
};

export default FloatingSocials;
