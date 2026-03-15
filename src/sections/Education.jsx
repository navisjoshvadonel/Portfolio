import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

const EducationCard = ({ school, degree, period, grade, activities, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
    className="glass-morphism-heavy p-8 rounded-[2rem] relative overflow-hidden group border border-white/5 hover-shine"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10 space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-white/5 rounded-2xl text-primary-light border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
          <GraduationCap size={28} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">{school}</h3>
          <p className="text-[#818cf8] font-medium text-sm">{degree}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted/80 text-[10px] font-bold uppercase tracking-wider">
          <Calendar size={12} className="opacity-60" />
          <span>{period}</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black uppercase tracking-wider">
          <Award size={12} className="opacity-60" />
          <span>Grade: {grade}</span>
        </div>
      </div>

      <div className="pt-2">
        <p className="text-muted/80 leading-relaxed text-sm italic border-l border-white/10 pl-4 font-medium">
          {activities}
        </p>
      </div>

      {skills && (
        <div className="pt-2 flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
            <Sparkles size={12} />
            <span>{skills}</span>
        </div>
      )}
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      school: "Mepco Schlenk Engineering College",
      degree: "Bachelor of Technology - BTech, Artificial Intelligence",
      period: "Sep 2024 – Present",
      grade: "8.4",
      activities: "football & athletics",
      skills: "C (Programming Language) and C++"
    },
    {
      school: "TVS Matriculation Higher Secondary School",
      degree: "Biology, General",
      period: "Jun 2011 – May 2023",
      grade: "83.83 %",
      activities: "1.Football 2.Athletics",
      skills: "Athletics, Football"
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      <div className="ambient-glow glow-secondary w-[400px] h-[400px] -right-24 bottom-24 opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-light text-[10px] font-black tracking-[0.2em] mb-6 uppercase">
            <Sparkles size={12} />
            ACADEMIC FOUNDATION
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            Educational <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
