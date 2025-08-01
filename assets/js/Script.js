document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobileMenu'),
        nav = document.getElementById('nav-links');
  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Particle background
  VANTA.NET({
    el: "#particles-bg",
    color: 0x00d9ff,
    backgroundColor: 0x0e0e1c,
    maxDistance: 20.0,
    spacing: 18.0
  });
});
