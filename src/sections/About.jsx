import React, { useEffect, useRef } from 'react';

const About = () => {
  const revealRef = useRef(null);
  
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

  return (
    <section id="about" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-8">
        <div>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-2">Discovery</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Mission & Vision</h2>
        </div>
        <div className="text-on-surface-variant font-body-md max-w-md text-left md:text-right mt-4 md:mt-0">
          Building intelligent systems isn't just a technical pursuit—it's about creating impactful technology responsibly and ethically for the next generation.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento Item 1 */}
        <div className="group p-8 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll">
          <span className="material-symbols-outlined text-primary mb-6 block text-4xl">sports_soccer</span>
          <h3 className="font-headline-md text-headline-md mb-4">Semi-pro Athlete</h3>
          <p className="text-on-surface-variant font-body-md">State level football & athletics representation, instilling a sports-driven focus on leadership, teamwork, and discipline first.</p>
        </div>

        {/* Bento Item 2 */}
        <div className="group p-8 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          <span className="material-symbols-outlined text-primary mb-6 block text-4xl">psychology</span>
          <h3 className="font-headline-md text-headline-md mb-4">Agentic Mindset</h3>
          <p className="text-on-surface-variant font-body-md">I don't just build tools; I engineer systems that learn, adapt, and evolve. Bridging theoretical models with real-world intelligence.</p>
        </div>

        {/* Bento Item 3 */}
        <div className="group p-8 border border-border-subtle bg-pure-white rounded-lg hover:border-primary transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <span className="material-symbols-outlined text-primary mb-6 block text-4xl">insights</span>
          <h3 className="font-headline-md text-headline-md mb-4">Power BI Specialist</h3>
          <p className="text-on-surface-variant font-body-md">I specialize in using Power BI to translate complex datasets into strategic, high-impact visual stories. Passionate about rapid learning.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
