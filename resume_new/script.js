// script.js

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  // Observe all elements with class 'animate'
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  