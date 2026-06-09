import React, { useEffect } from 'react';

const AchievementCard = ({ text, icon, index, link }) => (
  <div 
    className="group flex items-center justify-between p-6 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        <p className="font-body-md text-on-surface">{text}</p>
    </div>
    {link && (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
        >
            <span className="material-symbols-outlined">open_in_new</span>
        </a>
    )}
  </div>
);

const Achievements = () => {
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

  const achievements = [
    { 
        text: "IEEE technical english", 
        icon: "psychology",
        link: "https://www.credential.net/37f6f632-5692-44dd-a421-86589bec2620#acc.YAnE8kIQ"
    },
    { 
        text: "Experience using Power BI for data analysis and visualization", 
        icon: "bar_chart",
        link: "https://skillsoft.digitalbadges.skillsoft.com/d9df8b3e-8c9a-43c8-99ca-506dc1ce1d24#acc.UWgm6T1L" 
    },
    { 
        text: "State representation in athletics", 
        icon: "military_tech" 
    }
  ];

  return (
    <section id="achievements" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Excellence</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Achievements</h2>
        </div>
        <div className="text-on-surface-variant font-body-md max-w-sm text-left md:text-right mt-4 md:mt-0">
          A track record of excellence in both technology and sports.
        </div>
      </div>

      <div className="space-y-4">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
