// Clock: rotate the bar-spoon (hour) and cocktail-pick (minute) hands
// based on actual wall-clock time. Updates every 30s.
(function () {
  const hourEl = document.getElementById('handHour');
  const minEl = document.getElementById('handMinute');
  if (!hourEl || !minEl) return;
  function tick() {
    const now = new Date();
    const h = now.getHours() % 12;
    const m = now.getMinutes();
    const s = now.getSeconds();
    const minDeg = (m + s / 60) * 6;
    const hourDeg = (h + m / 60) * 30;
    hourEl.setAttribute('transform', `rotate(${hourDeg.toFixed(2)})`);
    minEl.setAttribute('transform', `rotate(${minDeg.toFixed(2)})`);
  }
  tick();
  setInterval(tick, 30000);
})();

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
