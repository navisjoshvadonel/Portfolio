import React from 'react';
import { Github, Linkedin, Heart, Sparkles, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-4 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-black text-white tracking-tighter flex items-center justify-center md:justify-start gap-3">
                <span className="text-gradient">Navis Joshva</span> Donel J
            </h2>
            <p className="text-muted font-medium flex items-center justify-center md:justify-start gap-2 italic">
              Empowering the future through Agentic AI and Intelligent Design.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a 
                href="https://github.com/navisjoshvadonel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-2xl border border-white/10 text-muted hover:text-primary hover:border-primary/50 transition-all shadow-xl hover:scale-110 active:scale-90"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/navis-joshva-donel-j-892bb1294" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-2xl border border-white/10 text-muted hover:text-primary hover:border-primary/50 transition-all shadow-xl hover:scale-110 active:scale-90"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-2xl text-primary font-black text-xs tracking-widest transition-all hover:scale-105 active:scale-95"
            >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                BACK TO TOP
            </button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted/40 text-[10px] font-black tracking-[0.3em] uppercase">
            © 2026 navisjoshvadonel
          </p>
          <div className="flex items-center gap-2 text-muted/30 text-[10px] font-black tracking-widest uppercase">
            Yours NJD
          </div>
        </div>
      </div>
      
      {/* Background reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default Footer;
