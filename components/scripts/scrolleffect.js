let isTicking = false;

function updateNavbarScrollState() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) {
    isTicking = false;
    return;
  }

  if (window.scrollY > 50) {
    // Only touch the DOM if the class isn't already there
    if (!navbar.classList.contains('scrolled')) {
      navbar.classList.add('scrolled');
    }
  } else {
    // Only touch the DOM if the class is actually there
    if (navbar.classList.contains('scrolled')) {
      navbar.classList.remove('scrolled');
    }
  }

  // Allow the next scroll event to schedule an update
  isTicking = false;
}

function scrolleffect() {
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      // Schedule the updates to line up perfectly with the browser's screen refresh rate
      window.requestAnimationFrame(updateNavbarScrollState);
      isTicking = true;
    }
  }, { passive: true });

  // Initial check on page load
  updateNavbarScrollState();
}

export function initScrollEffect() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  scrolleffect();
}