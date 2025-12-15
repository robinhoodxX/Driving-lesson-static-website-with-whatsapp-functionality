import { animate } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// Initialize page-level animations. Call this after the DOM is ready.
export function initAnimations() {
  // slide/ fade in the nav container
  animate(".container", { y: [-80, 0], opacity: [0, 1] }, { duration: 1.5 });

  // slide/ fade in header content
  animate(".header", { y: [-50, 0], opacity: [0, 1] }, { delay: 0.5, duration: 1 });

  animate(".headericon", { y: [-50, 0], opacity: [0, 1] }, { delay: 1, duration: 1 });

  animate(".chatwithus", { y: [50, 0], opacity: [0, 1] }, { delay: 0.5, duration: 1.5 });

  // slide/ fade in whatsapp chat div
  animate(".whatsapp-chatdiv", { x: [100, 0], opacity: [0, 1] }, { delay: 1, duration: 1.5 });
}