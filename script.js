document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing after the first reveal
      }
    });
  }, { threshold: 0.1 });

  const fadeInElements = document.querySelectorAll('.fade-in-text');
  fadeInElements.forEach(el => observer.observe(el));
});