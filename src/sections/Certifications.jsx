import React, { useState, useEffect } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

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
    { src: "google_ai.png", title: "Google AI Professional Certificate", category: "Google Certification", isGoogle: true, isFavourite: true },
    { src: "google_ai_essentials.png", title: "Google AI Essentials Specialization", category: "Google Certification", isGoogle: true, isFavourite: true },
    { src: "google_ai_fundamentals.png", title: "Google - AI Fundamentals", category: "Google Certification", isGoogle: true, isFavourite: false },
    { src: "google_discover_art_of_prompting.png", title: "Google - Discover the Art of Prompting", category: "Google Certification", isGoogle: true, isFavourite: false },
    { src: "google_ai_for_data_analysis.png", title: "Google - AI for Data Analysis", category: "Google Certification", isGoogle: true, isFavourite: false },
    { src: "google_ai_for_brainstorming_and_planning.png", title: "Google - AI for Brainstorming and Planning", category: "Google Certification", isGoogle: true, isFavourite: false },
    { src: "google_use_ai_responsibly.png", title: "Google - Use AI Responsibly", category: "Google Certification", isGoogle: true, isFavourite: false },
    { src: "cisco_operating_systems_basics.png", title: "Cisco Networking Academy - Operating Systems Basics", category: "Technical Certification", isCisco: true, isFavourite: true },
    { src: "kaashiv_infotech.png", title: "Kaashiv Infotech Practical Industrial Training (Artificial Intelligence)", category: "Technical Certification", isVertical: true, isFavourite: false },
    { src: "sports achievement.jpeg", title: "Annual Sports Day Individual Championship Trophies", category: "Extra Curricular", isFavourite: true },
    { src: "1759327043804.jpeg", title: "Project Presentation - Smart Beneficiary Mapping Platform (Technoinnovate 2025)", category: "Technical Certification", isFavourite: false },
    { src: "1766587337051.jpeg", title: "Python Data Analyst Certification", category: "Technical Certification", isFavourite: false },
    { src: "1767008223118.jpeg", title: "Power BI Data Analyst Certification", category: "Technical Certification", isFavourite: false },
    { src: "1767008223538.jpeg", title: "Tableau Data Analyst Certification", category: "Technical Certification", isFavourite: false },
    { src: "1769795000187.jpeg", title: "Web Development Industrial Visit - CodeBind Technologies", category: "Technical Certification", isVertical: true, isFavourite: false },
    { src: "1772376465846.jpeg", title: "Project Presentation - SCIMIT '26 (Mega Project Contest)", category: "Technical Certification", isFavourite: false },
  ];

  return (
    <section id="certifications" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Verified Excellence</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">My Gallery</h2>
        </div>
        <div className="text-on-surface-variant font-body-md max-w-sm text-left md:text-right mt-4 md:mt-0">
          A curated selection of my professional and extracurricular recognitions. Click any certificate to view in full resolution.
        </div>
      </div>

      {/* Grid of Landscape Cards fitting the screen nicely */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedCert(cert)}
            className={`group relative cursor-pointer overflow-hidden bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 gallery-card reveal-on-scroll flex flex-col ${
              cert.isGoogle 
                ? 'border-blue-500/30 shadow-[0_0_15px_rgba(66,133,244,0.06)] hover:shadow-[0_0_22px_rgba(66,133,244,0.18)] hover:border-blue-500/50' 
                : cert.isCisco
                ? 'border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.06)] hover:shadow-[0_0_22px_rgba(6,182,212,0.18)] hover:border-cyan-500/50'
                : 'border-border-subtle'
            }`}
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
          >
            {cert.isGoogle && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] z-10" />
            )}
            {cert.isCisco && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00b4e5] via-[#049ca3] to-[#0b5a8c] z-10" />
            )}
            
            {/* Aspect box containing the certificate fully */}
            <div className="aspect-[1.414/1] w-full bg-surface-container-low overflow-hidden flex items-center justify-center p-4 border-b border-border-subtle">
              <img 
                src={`/certificates/${cert.src}`} 
                alt={cert.title} 
                className={`transition-all duration-500 ease-out ${
                  cert.isGoogle || cert.isCisco ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                } ${
                  cert.isVertical 
                    ? 'h-[90%] w-auto max-w-full object-contain border border-neutral-200/80 shadow-md bg-white p-1.5 rounded-sm group-hover:scale-[1.04]' 
                    : 'max-w-full max-h-full object-contain group-hover:scale-[1.03]'
                }`}
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Certificate"; }}
              />
            </div>
            
            {/* Certificate Details */}
            <div className="p-5 flex flex-col justify-between flex-grow bg-white">
              <div>
                <h3 className="font-headline-md text-base text-primary group-hover:text-secondary transition-colors duration-200 line-clamp-2">
                  {cert.title}
                </h3>
              </div>
              
              {cert.isFavourite && (
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">star</span>
                  <span>Featured Achievement</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for viewing certificates full screen */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] bg-[#05070e]/95 backdrop-blur-sm flex flex-col justify-center items-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-[#ffffff]/70 hover:text-[#ffffff] transition-colors p-2 rounded-full hover:bg-[#ffffff]/10 flex items-center justify-center"
            onClick={() => setSelectedCert(null)}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Certificate Container */}
          <div 
            className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Stop closing when clicking the image
          >
            <img 
              src={`/certificates/${selectedCert.src}`} 
              alt={selectedCert.title} 
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl border border-[#ffffff]/10"
              onError={(e) => { e.target.src = "https://via.placeholder.com/1000x800?text=Certificate"; }}
            />
          </div>

          {/* Details below image */}
          <div 
            className="text-center mt-6 max-w-xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-headline-md text-xl md:text-2xl text-[#ffffff] mb-2">
              {selectedCert.title}
            </h3>
            <a 
              href={`/certificates/${selectedCert.src}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-[#ffffff]/80 hover:text-[#ffffff] underline underline-offset-4 decoration-[#ffffff]/30"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Open original file
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
