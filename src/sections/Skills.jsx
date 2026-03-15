import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, BarChart3, Globe, Sparkles } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
    className="glass-morphism-heavy p-10 rounded-[3rem] group transition-all duration-500 border border-white/5 hover:border-primary/50 relative overflow-hidden group hover-shine"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-6 mb-8">
        <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/10 border border-primary/20">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-black text-white tracking-tight">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-auto">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-muted group-hover:text-white/90 group-hover:border-primary/30 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python"]
    },
    {
      title: "AI & Technology",
      icon: BrainCircuit,
      skills: ["Artificial Intelligence", "AI-assisted development", "Agentic workflows"]
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      skills: ["Power BI", "Data Visualization", "Data Interpretation"]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["AI-assisted web development workflows"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="ambient-glow glow-primary w-[500px] h-[500px] -right-48 bottom-0 opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted text-lg font-medium mt-4 max-w-2xl mx-auto">Expertise in leveraging cutting-edge AI tools and data analytics to solve complex problems.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <SkillCard key={index} {...group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
