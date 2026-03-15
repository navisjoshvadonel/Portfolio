import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Layout } from 'lucide-react';

const ProjectCard = ({ title, description, link, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-3xl glass-morphism-heavy p-8 flex flex-col h-full transition-all duration-500 border border-white/5 hover-shine"
  >
    <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none transform group-hover:scale-125 transition-transform duration-1000">
        <Layout size={100} />
    </div>
    
    <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-white tracking-tight mb-4 group-hover:text-primary transition-colors">{title}</h3>
        
        <p className="text-muted text-sm font-medium mb-8 flex-grow leading-relaxed">
            {description}
        </p>
        
        <div className="flex gap-4">
            <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all transform active:scale-95 text-xs tracking-widest"
            >
                <Github size={16} />
                CODEBASE
            </a>
        </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "AeroRoute",
      description: "AeroRoute is a high-performance system designed to analyze and optimize routes using intelligent algorithms. The project focuses on improving efficiency in route decision-making through complex algorithmic approaches.",
      link: "https://github.com/navisjoshvadonel/Artificial-Intelligence"
    },
    {
      title: "Smart Beneficiary Mapping",
      description: "An advanced platform designed to optimize identification and resource distribution using structured data analysis and mapping strategies. Built for massive transparency and efficiency.",
      link: "https://github.com/navisjoshvadonel/Smart-beneficiary-mappping-system"
    },
    {
      title: "Tech Hangman",
      description: "A futuristic educational experience designed to master programming basics. Combines engaging problem-solving gameplay with a technical syllabus for rapid learning.",
      link: "https://github.com/navisjoshvadonel/tech_hangman"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
        <div className="ambient-glow glow-accent w-[400px] h-[400px] -left-24 top-1/2 -translate-y-1/2 opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
