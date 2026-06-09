import React, { useEffect } from 'react';

const EducationCard = ({ school, degree, period, grade, activities, skills, index }) => (
  <div 
    className="group p-8 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex items-center gap-4 mb-6 border-b border-border-subtle pb-6">
        <span className="material-symbols-outlined text-primary text-4xl">school</span>
        <div>
            <h3 className="font-headline-md text-headline-md text-primary">{school}</h3>
            <p className="font-body-md text-on-surface-variant mt-1">{degree}</p>
        </div>
    </div>

    <div className="flex gap-8 mb-6">
        <div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Period</div>
            <div className="font-body-md text-primary">{period}</div>
        </div>
        <div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Grade</div>
            <div className="font-body-md text-primary">{grade}</div>
        </div>
    </div>

    {activities && (
        <div className="mb-4">
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Activities</div>
            <p className="font-body-md text-on-surface">{activities}</p>
        </div>
    )}

    {skills && (
        <div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Skills</div>
            <p className="font-body-md text-on-surface">{skills}</p>
        </div>
    )}
  </div>
);

const Education = () => {
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

  const educationData = [
    {
      school: "Mepco Schlenk Engineering College",
      degree: "Bachelor of Technology - BTech, Artificial Intelligence",
      period: "Sep 2024 – Present",
      grade: "8.4",
      activities: "",
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
    <section id="education" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Academic Foundation</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Educational Journey</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
