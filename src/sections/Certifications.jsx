import React, { useEffect } from 'react';

const Certifications = () => {
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

  const certificates = [
    { src: "sports achievement.jpeg", title: "State Level Sports Achievement", category: "Extra Curricular", isFavourite: true, tall: true },
    { src: "1759327043804.jpeg", title: "Technoinnovate 2025 Participation", category: "Technical Certification", isFavourite: false, tall: false },
    { src: "1766587337051.jpeg", title: "Innovation & Design Thinking", category: "Technical Certification", isFavourite: false, tall: true },
    { src: "1767008223118.jpeg", title: "AI Development Workshop", category: "Technical Certification", isFavourite: false, tall: false },
    { src: "1767008223538.jpeg", title: "Engineering Excellence Recognition", category: "Technical Certification", isFavourite: false, tall: false },
    { src: "1769794999966.jpeg", title: "Sustainable Solution Award", category: "Technical Certification", isFavourite: false, tall: true },
    { src: "1769795000187.jpeg", title: "Data Analytics Masterclass", category: "Technical Certification", isFavourite: false, tall: false },
    { src: "1772376465846.jpeg", title: "Future Tech Innovator", category: "Technical Certification", isFavourite: false, tall: false },
  ];

  return (
    <section id="certifications" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Verified Excellence</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">My Gallery</h2>
        </div>
        <div className="text-on-surface-variant font-body-md max-w-sm text-left md:text-right mt-4 md:mt-0">
          A curated selection of my professional and extracurricular recognitions.
        </div>
      </div>

      <div className="masonry-grid gap-gutter">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className={`masonry-item ${cert.tall ? 'tall' : 'short'} group relative overflow-hidden bg-surface-container-low rounded-lg gallery-card reveal-on-scroll`}
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
          >
            <img 
              src={`/certificates/${cert.src}`} 
              alt={cert.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale hover:grayscale-0"
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Certificate"; }}
            />
            <div className="hover-reveal absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 flex flex-col justify-end p-8 translate-y-4">
              <span className="font-label-sm text-label-sm text-secondary-fixed mb-2 uppercase">{cert.category}</span>
              <h3 className="font-headline-md text-headline-md text-pure-white">{cert.title}</h3>
              {cert.isFavourite && (
                  <div className="mt-4 inline-block bg-accent px-3 py-1 text-xs font-bold text-white uppercase tracking-wider rounded w-max">
                      My Favourite
                  </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
