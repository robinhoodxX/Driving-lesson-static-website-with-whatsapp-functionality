import { initHeader, initHeader2 } from "./components/scripts/headerdomndropdown.js";
import { initClickEffect } from "./components/scripts/clickeffect.js";
import { initVisitorCounter } from "./components/scripts/visitorcounter.js";
import { initWaveParticle } from "./components/scripts/waveparticle.js";
import { initAnimations } from "./components/scripts/animation.js";

// Version control for cache / reload
const version = '2.5';  // update version when making changes
const storedVersion = localStorage.getItem('site_version');

if (storedVersion !== version) {
  localStorage.setItem('site_version', version);
  window.location.reload(true);  // force reload to get new files
}

// Initialize headers directly since HTML is already in index.html
initHeader();
initHeader2();

// Run animations after DOM is ready
initAnimations();

// Global effects
initClickEffect();
initVisitorCounter();
initWaveParticle();
