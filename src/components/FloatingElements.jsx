import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50 shadow-lg shadow-primary/20"
        style={{ scaleX }}
      />

      {/* Floating Social Icons */}
      <div className="fixed left-8 bottom-10 flex flex-col gap-6 z-40 hidden lg:flex">
        <SocialFloatingIcon icon={Github} href="https://github.com/navisjoshvadonel" />
        <SocialFloatingIcon icon={Linkedin} href="https://www.linkedin.com/in/navis-joshva-donel-j-892bb1294" />
        <SocialFloatingIcon icon={Mail} href="mailto:navis.donel@gmail.com" />
        <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-[2px] bg-gradient-to-t from-primary to-transparent mx-auto mt-2" 
        />
      </div>
    </>
  );
};

const SocialFloatingIcon = ({ icon: Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    whileHover={{ 
        y: -8, 
        scale: 1.25,
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 0.5)"
    }}
    whileTap={{ scale: 0.9 }}
    className="w-14 h-14 flex items-center justify-center glass-morphism rounded-2xl text-white hover:text-primary transition-all border-white/5 shadow-xl"
  >
    <Icon size={28} />
  </motion.a>
);

export default FloatingElements;
