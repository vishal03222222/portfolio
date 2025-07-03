
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a[href^='#']");
  const sections = document.querySelectorAll(".section");

  function showSection(id) {
    sections.forEach(section => section.classList.remove("active"));
    const target = document.querySelector(id);
    if (target) target.classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      showSection(link.getAttribute("href"));
    });
  });

  // Show first section by default
  const firstSection = document.querySelector(".section");
  if (firstSection) firstSection.classList.add("active");
});
