import { initHeader } from "./components/scripts/headerdomndropdown.js";
import { initClickEffect } from "./components/scripts/clickeffect.js";
import { initAnimations } from "./components/scripts/animation.js";
import { initScrollEffect } from "./components/scripts/scrolleffect.js";
import { initWindowPopup } from "./components/scripts/windowpopupa.js";

// Version control for cache / reload
const version = '2.5';  // update version when making changes
const storedVersion = localStorage.getItem('site_version');

if (storedVersion !== version) {
  localStorage.setItem('site_version', version);
  window.location.reload(true);  // force reload to get new files
}

// Initialize headers directly since HTML is already in index.html
initHeader();

initWindowPopup();  

// Run animations after DOM is ready
initAnimations();

// Global effects
initClickEffect();
initScrollEffect();
