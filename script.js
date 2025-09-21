// WhatsApp link (replace number/message as needed)
    document.getElementById('sendBtn').addEventListener('click', () => {
      const name = document.querySelector('#consult input[placeholder="Full Name"]').value.trim();
      const phone = document.querySelector('#consult input[placeholder="Phone / WhatsApp"]').value.trim();
      const goal = document.querySelector('#consult input[placeholder="Your Goal"]').value.trim();
      const msg = document.querySelector('#consult textarea').value.trim();
      const text = encodeURIComponent(`Hello! I want a free consultation.\nName: ${name}\nPhone: ${phone}\nGoal: ${goal}\nMessage: ${msg}`);
      const wa = `https://wa.me/919319045476?text=${text}`; // change number if needed
      window.open(wa, '_blank');
      document.getElementById('sentNote').classList.remove('hidden');
    });

    window.addEventListener('load', () => {
      if (!window.gsap) return;
      const { gsap } = window;
      if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      document.getElementById('year').textContent = new Date().getFullYear();

      // HERO
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.from('[data-hero="eyebrow"]', { y: 16, opacity: 0, duration: 0.35 })
        .from('[data-hero="title"]', { y: 24, opacity: 0, duration: 0.6 }, '-=0.05')
        .from('[data-hero="bullets"] li', { y: 14, opacity: 0, duration: 0.3, stagger: 0.08 }, '-=0.2')
        .from('[data-hero="cta"]', { y: 16, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('[data-hero="badges"]', { y: 10, opacity: 0, duration: 0.3 }, '-=0.2')
        .from('[data-hero="visual"]', { scale: 0.92, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('[data-hero="trust"]', { y: 10, opacity: 0, duration: 0.3 }, '-=0.5');

      // Section reveals
      const reveal = (selector) => {
        gsap.utils.toArray(selector).forEach((el, i) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
            y: 24, opacity: 0, duration: 0.6, delay: (i % 3) * 0.05
          });
        });
      };
      reveal('.why-card');
      reveal('.how-card');
      reveal('.ing-card');
      reveal('.price-card');
      reveal('.t-card');

      // Parallax blobs
      gsap.to('#hero > div.pointer-events-none:nth-child(1)', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', scrub: true } });
      gsap.to('#hero > div.pointer-events-none:nth-child(2)', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', scrub: true } });
    });


    

