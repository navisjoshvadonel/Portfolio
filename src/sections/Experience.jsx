import React, { useEffect } from 'react';

const ExperienceCard = ({ role, organization, period, location, description, index }) => (
  <div 
    className="group p-8 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border-subtle">
        <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">work</span>
            <div>
                <h3 className="font-headline-md text-headline-md text-primary">{role}</h3>
                <p className="font-body-md text-on-surface-variant mt-1">{organization}</p>
            </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            <span>{period}</span>
            <span>{location}</span>
        </div>
    </div>
    {description && (
        <ul className="space-y-4">
            {description.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg mt-0.5">check_circle</span>
                    <p className="font-body-md text-on-surface">{item}</p>
                </li>
            ))}
        </ul>
    )}
  </div>
);

const Experience = () => {
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
    <section id="experience" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Leadership</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Professional Experience</h2>
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
