import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Zap, BrainCircuit, BarChart3, Medal, ExternalLink } from 'lucide-react';

const AchievementCard = ({ text, icon: Icon, index, link }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-center gap-6 p-6 glass-morphism rounded-3xl hover:bg-white/10 transition-all group relative overflow-hidden"
  >
    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 group-hover:scale-110">
      <Icon size={28} />
    </div>
    <div className="flex-grow">
      <p className="text-lg text-muted/90 group-hover:text-white transition-colors leading-snug">
        {text}
      </p>
    </div>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-white/5 rounded-xl text-muted/40 hover:text-primary hover:bg-white/10 transition-all transform group-hover:scale-110"
      >
        <ExternalLink size={20} />
      </a>
    )}
  </motion.div>
);

const Achievements = () => {
  const achievements = [
    { 
        text: "IEEE technical english", 
        icon: BrainCircuit,
        link: "https://www.credential.net/37f6f632-5692-44dd-a421-86589bec2620#acc.YAnE8kIQ"
    },
    { 
        text: "Experience using Power BI for data analysis and visualization", 
        icon: BarChart3,
        link: "https://skillsoft.digitalbadges.skillsoft.com/d9df8b3e-8c9a-43c8-99ca-506dc1ce1d24#acc.UWgm6T1L" 
    },
    { text: "State representation in athletics", icon: Medal }
  ];

  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Achievements</h2>
          <p className="text-muted/70">A track record of excellence in both technology and sports.</p>
        </motion.div>

        <div className="space-y-4">
          {achievements.map((item, index) => (
            <AchievementCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
