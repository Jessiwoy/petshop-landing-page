const backToTopButton = document.querySelector('#backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

function smoothScrollToTop(duration = 1200) {
  const start = window.scrollY;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(
      0,
      start * (1 - easedProgress)
    );

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

backToTopButton.addEventListener('click', () => {
  smoothScrollToTop();
});