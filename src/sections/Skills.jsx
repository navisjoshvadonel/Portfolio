import React, { useEffect } from 'react';

const SkillCard = ({ title, icon, skills, index }) => (
  <div 
    className="group p-8 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <span className="material-symbols-outlined text-primary mb-6 block text-4xl">{icon}</span>
    <h3 className="font-headline-md text-headline-md mb-6">{title}</h3>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {skills.map((skill, i) => (
        <span 
          key={i} 
          className="px-4 py-2 bg-surface-container-low text-on-surface font-label-sm text-label-sm rounded uppercase tracking-wider group-hover:bg-primary group-hover:text-pure-white transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    const els = document.querySelectorAll('.reveal-on-scroll');
    els.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Programming",
      icon: "code",
      skills: ["Python"]
    },
    {
      title: "AI & Technology",
      icon: "memory",
      skills: ["Artificial Intelligence", "AI-assisted development", "Agentic workflows"]
    },
    {
      title: "Data Analytics",
      icon: "bar_chart",
      skills: ["Power BI", "Data Visualization", "Data Interpretation"]
    },
    {
      title: "Web Development",
      icon: "language",
      skills: ["AI-assisted web development workflows"]
    }
  ];

  return (
    <section id="skills" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Capabilities</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Technical Arsenal</h2>
        </div>
        <div className="text-on-surface-variant font-body-md max-w-sm text-left md:text-right mt-4 md:mt-0">
          Expertise in leveraging cutting-edge AI tools and data analytics to solve complex problems.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <SkillCard key={index} {...group} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
