const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      window.requestAnimationFrame(() => {
        entry.target.classList.add('active');

        const staggerCards = entry.target.querySelectorAll('.service-card');
        staggerCards.forEach((card, index) => {
          card.style.transitionDelay = `${index * 100}ms`;
          card.classList.add('active');
        });
      });

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -80px 0px'
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});