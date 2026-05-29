// Subtle reveal-on-scroll + smooth anchor scroll.
// Keep it light — the page is meant to feel quiet.

(function () {
  // Tag elements that should fade-in.
  const targets = document.querySelectorAll(
    '.block, .block-title, .block-body, .block-quote, .room-cell, .philo article, .member-list li, .who-list, .contact-list > div, .foot-logo'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('is-in'));
  }

  // Smooth scroll for in-page anchors (with reduced-motion respect).
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduce ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  });
})();
