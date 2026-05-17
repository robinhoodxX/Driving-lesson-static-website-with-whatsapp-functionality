function updateNavbarScrollState() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function scrolleffect() {
  window.addEventListener('scroll', updateNavbarScrollState, { passive: true });
  updateNavbarScrollState();
}

export function initScrollEffect() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  scrolleffect();
}