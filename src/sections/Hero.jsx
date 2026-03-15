import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Zap, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden py-24 md:py-0">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-primary w-[500px] h-[500px] -top-24 -left-24 opacity-10" />
      <div className="ambient-glow glow-secondary w-[400px] h-[400px] bottom-0 -right-24 opacity-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10 text-center md:text-left"
      >
        {/* Profile Photo Container (Floating/Premium) */}
        <motion.div 
            className="relative group animate-float shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            {/* Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-[30px] opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-500"></div>
            
            <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full p-[2px] bg-gradient-to-tr from-white/20 via-transparent to-white/20">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 glass-morphism shadow-2xl relative">
                    <img 
                        src={profileImg} 
                        alt="Navis Joshva Donel J" 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400?text=Navis+Joshva";
                        }}
                    />
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>
            </div>
        </motion.div>

        <div className="flex flex-col items-center md:items-start max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-gradient">Navis Joshva</span> Donel J
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-2xl font-semibold text-white/70 mb-8 tracking-tight flex items-center gap-3 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Artificial Intelligence Student <span className="w-1.5 h-1.5 rounded-full bg-primary" /> AI Explorer
          </motion.h2>

          <motion.p 
            className="text-base md:text-xl text-muted font-medium mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            "I am exploring the frontiers of Artificial Intelligence, data analytics, and intelligent systems to build impactful technology that solves real-world problems."
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <a 
              href="#projects"
              className="group relative px-10 py-4 rounded-2xl bg-primary text-white font-black hover:scale-105 active:scale-95 transition-all overflow-hidden shadow-[0_20px_50px_rgba(99,102,241,0.3)] text-sm uppercase tracking-widest text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -left-[100%] group-hover:left-[100%] transition-all duration-700" />
              <span className="relative z-10">Explore My Work</span>
            </a>
            <a 
              href="#contact"
              className="px-10 py-4 rounded-2xl glass-morphism-heavy text-white font-black hover:scale-105 active:scale-95 transition-all border border-white/10 hover:border-white/20 shadow-xl text-sm uppercase tracking-widest text-center"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-muted/50 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
