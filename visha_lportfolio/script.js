
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
  }

  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  