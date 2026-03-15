import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow glow-primary w-[400px] h-[400px] -left-48 top-48 opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black tracking-[0.2em] mb-4 uppercase">
            Discovery
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            <span className="text-gradient">Mission</span> & Vision
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Box - The Identity */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="glass-morphism-heavy p-10 md:p-14 rounded-[3rem] flex flex-col justify-center space-y-8 relative overflow-hidden group border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 space-y-8 text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
              <p>
                I am <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8">Navis Joshva Donel J</span>, an AI student bridging the gap between theoretical models and real-world intelligence.
              </p>
              <p>
                My approach is defined by an <span className="text-primary-light font-bold">agentic development mindset</span>. I don't just build tools; I engineer systems that learn, adapt, and evolve.
              </p>
              <p className="text-lg text-muted font-normal">
                Building intelligent systems isn't just a technical pursuit—it's about creating impactful technology responsibly and ethically for the next generation.
              </p>
            </div>
          </motion.div>

          {/* Right Box - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="glass-morphism-heavy p-10 md:p-14 rounded-[3rem] space-y-10 relative overflow-hidden group border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-3xl font-black text-white tracking-tight relative z-10">Personal Edge</h3>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex items-center space-x-6 group/item">
                <div className="bg-primary/20 p-4 rounded-2xl text-primary transition-all group-hover/item:scale-110 group-hover/item:rotate-6 shadow-lg shadow-primary/20 border border-primary/20">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Semi-pro Athlete</h4>
                  <p className="text-muted text-sm">State level football & athletics representation.</p>
                </div>
              </li>
              <li className="flex items-center space-x-6 group/item">
                <div className="bg-secondary/20 p-4 rounded-2xl text-secondary transition-all group-hover/item:scale-110 group-hover/item:rotate-6 shadow-lg shadow-secondary/20 border border-secondary/20">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Discipline First</h4>
                  <p className="text-muted text-sm">Sports-driven focus on leadership and teamwork.</p>
                </div>
              </li>
              <li className="flex items-center space-x-6 group/item">
                <div className="bg-accent/20 p-4 rounded-2xl text-accent transition-all group-hover/item:scale-110 group-hover/item:rotate-6 shadow-lg shadow-accent/20 border border-accent/20">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Continuous Evolution</h4>
                  <p className="text-muted text-sm">Passionate about rapid learning and AI integration.</p>
                </div>
              </li>
            </ul>
            
            <div className="pt-10 border-t border-white/10 relative z-10">
              <p className="text-muted italic text-lg leading-relaxed font-serif">
                "I specialize in using <span className="text-secondary-light font-semibold">Power BI</span> to translate complex datasets into strategic, high-impact visual stories."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
