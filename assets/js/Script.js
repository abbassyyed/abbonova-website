document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobileMenu'),
        nav = document.getElementById('navMenu');

  btn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });

  VANTA.NET({
    el: "#particles-bg",
    color: 0x00d9ff,
    backgroundColor: 0x0e0e1c,
    maxDistance: 20.0,
    spacing: 18.0
  });

  window.addEventListener('scroll', () => {
    const z = window.scrollY;
    document.querySelector('.layer-back')?.style.transform = `translateY(${ -z * 0.3 }px)`;
    document.querySelector('.layer-middle')?.style.transform = `translateY(${ -z * 0.2 }px)`;
    document.querySelector('.layer-front')?.style.transform = `translateY(${ -z * 0.1 }px)`;
  });

  console.log("ABBONOVA IT Services sci-fi homepage initialized.");
});
