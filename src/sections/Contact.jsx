import React, { useEffect } from 'react';

const Contact = () => {
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
    <section id="contact" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-4">Collaborate</span>
          <h2 className="font-headline-xl text-headline-xl mb-8 text-primary">Let's build something significant.</h2>
          <p className="text-on-surface-variant font-body-lg mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Email Inquiries</div>
                <a href="mailto:navis.donel@gmail.com" className="font-body-lg text-primary hover:underline underline-offset-4">
                  navis.donel@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">phone_iphone</span>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:+919342288709" className="font-body-lg text-primary hover:underline underline-offset-4">
                  +91 9342288709
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Location</div>
                <p className="font-body-lg text-primary">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-10"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="group">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-2 group-focus-within:text-primary transition-colors">Full Identity</label>
              <input 
                name="name"
                className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary focus:ring-0 px-0 py-3 font-body-lg placeholder:text-surface-dim transition-all outline-none" 
                placeholder="Your name or company" 
                type="text"
                required
              />
            </div>
            <div className="group">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-2 group-focus-within:text-primary transition-colors">Digital Address</label>
              <input 
                name="email"
                className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary focus:ring-0 px-0 py-3 font-body-lg placeholder:text-surface-dim transition-all outline-none" 
                placeholder="email@example.com" 
                type="email"
                required
              />
            </div>
            <div className="group">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block mb-2 group-focus-within:text-primary transition-colors">The Brief</label>
              <textarea 
                name="message"
                className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary focus:ring-0 px-0 py-3 font-body-lg placeholder:text-surface-dim transition-all outline-none resize-none" 
                placeholder="Your ideas..." 
                rows="4"
                required
              ></textarea>
            </div>
            <button 
              className="w-full bg-primary text-pure-white font-label-sm text-label-sm uppercase tracking-[0.2em] py-5 hover:opacity-90 active:scale-[0.98] transition-all duration-200" 
              type="submit"
            >
                Transmit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
