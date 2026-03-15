import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Award, Star, Heart, Trophy, Sparkles } from 'lucide-react';

const CertificateCard = ({ src, title, category, isFavourite }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -12, scale: 1.05 }}
    className={`relative min-w-[320px] md:min-w-[450px] aspect-[4/3] rounded-[2.5rem] overflow-hidden glass-morphism-heavy border-2 ${isFavourite ? 'border-accent shadow-[0_0_50px_rgba(236,72,153,0.3)]' : 'border-white/10'} group transition-all duration-500 hover-shine`}
  >
    <img 
      src={`/certificates/${src}`} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/800?text=Certificate";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
    
    {isFavourite && (
      <>
        <div className="absolute top-6 right-6 bg-accent text-white px-5 py-2 rounded-2xl flex items-center gap-2 font-black shadow-2xl animate-pulse z-20 text-xs tracking-tighter">
          <Heart size={14} fill="currentColor" />
          <span>MY FAVOURITE</span>
        </div>
        <div className="absolute bottom-8 left-8 z-20">
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={16} className="text-accent" />
            <p className="text-white font-black tracking-[0.2em] uppercase text-[10px] opacity-90">Memorable Achievement</p>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
        </div>
      </>
    )}
    
    {/* Decorative internal reflection */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
  </motion.div>
);

const Certifications = () => {
    const targetRef = useRef(null);
    const { scrollXProgress } = useScroll({
        target: targetRef,
    });

    const certificates = [
        { src: "sports achievement.jpeg", title: "State Level Sports Achievement", category: "Extra Curricular Achievement", isFavourite: true },
        { src: "1759327043804.jpeg", title: "Technoinnovate 2025 Participation", category: "Technical Certification", isFavourite: false },
        { src: "1766587337051.jpeg", title: "Innovation & Design Thinking", category: "Technical Certification", isFavourite: false },
        { src: "1767008223118.jpeg", title: "AI Development Workshop", category: "Technical Certification", isFavourite: false },
        { src: "1767008223538.jpeg", title: "Engineering Excellence Recognition", category: "Technical Certification", isFavourite: false },
        { src: "1769794999966.jpeg", title: "Sustainable Solution Award", category: "Technical Certification", isFavourite: false },
        { src: "1769795000187.jpeg", title: "Data Analytics Masterclass", category: "Technical Certification", isFavourite: false },
        { src: "1772376465846.jpeg", title: "Future Tech Innovator", category: "Technical Certification", isFavourite: false },
    ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow glow-accent w-[600px] h-[600px] -right-48 top-1/2 -translate-y-1/2 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex items-center justify-between"
        >
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.2em] uppercase">
                    <Sparkles size={12} />
                    Verified Excellence
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                   My <span className="text-gradient">Gallery</span>
                </h2>
                <p className="text-muted text-lg max-w-xl font-medium">A curated selection of my professional and extracurricular recognitions.</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2 text-muted/40 font-bold uppercase tracking-widest text-[10px]">
                <span>Scroll to explore</span>
                <div className="w-32 h-[1px] bg-gradient-to-r from-muted/20 to-transparent" />
            </div>
        </motion.div>
      </div>

      <div 
        ref={targetRef}
        className="flex gap-10 overflow-x-auto pb-16 px-4 md:px-[calc((100vw-1280px)/2)] no-scrollbar snap-x relative z-10"
      >
        <style dangerouslySetInnerHTML={{ __html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        {certificates.map((cert, index) => (
          <div key={index} className="snap-center">
            <CertificateCard {...cert} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Certifications;
