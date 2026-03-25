import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react';

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('mailto') || href.startsWith('tel') ? '_self' : '_blank'}
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="flex items-center gap-6 p-8 glass-morphism-heavy rounded-[2rem] hover:bg-white/10 transition-all group border border-white/5 shadow-2xl overflow-hidden hover-shine"
  >
    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/10 border border-primary/20">
      <Icon size={30} />
    </div>
    <div>
      <p className="text-[10px] font-black text-primary mb-1 uppercase tracking-[0.2em]">{label}</p>
      <p className="text-xl font-bold text-white group-hover:text-primary-light transition-colors tracking-tight">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="ambient-glow glow-primary w-[500px] h-[500px] left-1/4 -bottom-48 opacity-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted text-lg font-medium mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <ContactInfo 
                icon={Mail} 
                label="My Mail" 
                value="navis.donel@gmail.com" 
                href="mailto:navis.donel@gmail.com" 
              />
              <ContactInfo 
                icon={Phone} 
                label="Phone" 
                value="+91 9342288709" 
                href="tel:+919342288709" 
              />
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-8 glass-morphism-heavy rounded-[2rem] border border-white/5 shadow-2xl"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-2xl text-secondary border border-secondary/20 shadow-lg shadow-secondary/10">
                  <MapPin size={30} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-secondary mb-1 uppercase tracking-[0.2em]">Place</p>
                  <p className="text-xl font-bold text-white tracking-tight">Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-morphism-heavy p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-all duration-1000 group-hover:scale-125" />
            
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-10 relative z-10"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-black text-primary/60 ml-4 tracking-widest uppercase">Name</label>
                  <input 
                    name="name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all shadow-inner font-medium placeholder:text-white/20"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-primary/60 ml-4 tracking-widest uppercase">Your Mail</label>
                  <input 
                    name="email"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] px-8 py-5 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all shadow-inner font-medium placeholder:text-white/20"
                    placeholder="Your mail"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-primary/60 ml-4 tracking-widest uppercase">Your Ideas</label>
                <textarea 
                  name="message"
                  rows="4"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all resize-none shadow-inner font-medium placeholder:text-white/20"
                  placeholder="Your ideas"
                  required
                />
              </div>
              <button 
                type="submit"
                className="group relative w-full py-6 rounded-[2rem] bg-primary text-white font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(99,102,241,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -left-[100%] group-hover:left-[100%] transition-all duration-700" />
                <div className="relative z-10 flex items-center justify-center gap-3">
                    SEND MESSAGE
                    <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
