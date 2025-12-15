import { initHeader, initHeader2 } from "./components/scripts/headerdomndropdown.js";
import { initClickEffect } from "./components/scripts/clickeffect.js";
import { initVisitorCounter } from "./components/scripts/visitorcounter.js";
import { initWaveParticle } from "./components/scripts/waveparticle.js";
import { initAnimations } from "./components/scripts/animation.js";

// Load header 1
fetch("./components/header.html")
  .then(res => {
    if (!res.ok) throw new Error(`header.html load failed: ${res.status}`);
    return res.text();
  })
  .then(html => {
    document.getElementById("header").innerHTML = html;
    initHeader();
    initWaveParticle();
  })
  .catch(err => console.error("Header1 load failed:", err));

// Load header 2
fetch("./components/header2.html")
  .then(res => {
    if (!res.ok) throw new Error(`header2.html load failed: ${res.status}`);
    return res.text();
  })
  .then(html => {
    document.getElementById("header2").innerHTML = html;
    initHeader2();

    // If animations depend on header2, initialize here
    initAnimations();
  })
  .catch(err => console.error("Header2 load failed:", err));

// Global effects that do NOT depend on header HTML can run immediately
initAnimations();
initClickEffect();
initVisitorCounter();
