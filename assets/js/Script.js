
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const btn = document.getElementById('mobileMenu');
  const nav = document.getElementById('navMenu');
  btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Vanta.js particle background
  VANTA.NET({
    el: "#particles-bg",
    color: 0x00d9ff,
    backgroundColor: 0x0e0e1c,
    maxDistance: 20.0,
    spacing: 18.0
  });

  // Scroll parallax
  window.addEventListener('scroll', () => {
    const z = window.scrollY;
    document.querySelector('.layer-back').style.transform = \`translateZ(-2px) scale(3) translateY(\${ -z * 0.3 }px)\`;
    document.querySelector('.layer-middle').style.transform = \`translateZ(-1px) scale(2) translateY(\${ -z * 0.2 }px)\`;
    document.querySelector('.layer-front').style.transform = \`translateZ(0) scale(1) translateY(\${ -z * 0.1 }px)\`;
  });

  console.log("ABBONOVA IT Services enriched sci-fi page loaded.");
});
