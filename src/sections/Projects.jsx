import React, { useEffect } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: "AeroRoute",
      description: "AeroRoute is a high-performance system designed to analyze and optimize routes using intelligent algorithms. The project focuses on improving efficiency in route decision-making through complex algorithmic approaches.",
      link: "https://github.com/navisjoshvadonel/Artificial-Intelligence",
      category: "AI • ALGORITHMS",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Placeholder representing routing/networks
      tall: true
    },
    {
      title: "Smart Beneficiary Mapping",
      description: "An advanced platform designed to optimize identification and resource distribution using structured data analysis and mapping strategies. Built for massive transparency and efficiency.",
      link: "https://github.com/navisjoshvadonel/Smart-beneficiary-mappping-system",
      category: "DATA • PLATFORM",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder representing data mapping
      tall: false
    },
    {
      title: "Tech Hangman",
      description: "A futuristic educational experience designed to master programming basics. Combines engaging problem-solving gameplay with a technical syllabus for rapid learning.",
      link: "https://github.com/navisjoshvadonel/tech_hangman.",
      category: "EDUCATION • GAMING",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Placeholder representing code/games
      tall: false
    }
  ];

  return (
    <section id="projects" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase mb-4 block">Selected Works</span>
          <h2 className="font-headline-xl text-headline-xl md:text-headline-xl leading-tight text-primary">Featured Projects.</h2>
        </div>
      </header>

      <div className="masonry-grid gap-gutter">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`masonry-item ${project.tall ? 'tall' : 'short'} group relative overflow-hidden bg-surface-container-low rounded-lg gallery-card reveal-on-scroll`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale hover:grayscale-0"
            />
            <div className="hover-reveal absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-0 flex flex-col justify-end p-8 translate-y-4">
              <span className="font-label-sm text-label-sm text-secondary-fixed mb-2">{project.category}</span>
              <h3 className="font-headline-md text-headline-md text-pure-white mb-2">{project.title}</h3>
              <p className="font-body-md text-on-primary-container line-clamp-3 mb-6">{project.description}</p>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-max items-center gap-2 px-5 py-2 rounded border border-white/20 text-white font-label-sm text-label-sm uppercase hover:bg-white hover:text-primary transition-colors"
              >
                View Codebase
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
