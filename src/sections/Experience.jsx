import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const ExperienceCard = ({ role, organization, period, location, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
    className="glass-morphism p-8 rounded-3xl relative overflow-hidden group border border-white/5"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-secondary/20 rounded-2xl text-secondary group-hover:scale-110 transition-transform shadow-lg shadow-secondary/10">
            <Briefcase size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{role}</h3>
            <p className="text-secondary font-semibold text-lg">{organization}</p>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 text-muted/60 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {description && (
        <div className="pt-4 border-t border-white/5">
          <ul className="space-y-3">
            {description.map((item, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <CheckCircle2 size={18} className="text-primary mt-1 shrink-0 transition-transform group-hover/item:scale-125" />
                <p className="text-muted/80 leading-relaxed font-medium">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Joint Secretary",
      organization: "AMIEE Association",
      period: "Oct 2025 – Present · 6 mos",
      location: "India",
      description: [
        "Serving as a key leadership figure, coordinating between departmental activities and student initiatives.",
        "Strategic planning and execution of association goals to foster technical excellence."
      ]
    },
    {
      role: "Office Bearer",
      organization: "Indian Society for Technical Education",
      period: "Aug 2025 – Present · 8 mos",
      location: "India",
      description: [
        "Organizer for the \"Enigma\" event at Gyan Mithra '26.",
        "Active involvement in technical education advocacy and campus event management."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-white/[0.01] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 -ml-32 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <p className="text-muted/70 max-w-2xl mx-auto text-lg">
            Leadership roles and organizational contributions in technical associations.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
