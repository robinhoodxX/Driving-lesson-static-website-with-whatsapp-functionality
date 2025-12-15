// Initialize click ripple effect on elements with class .select-button
export function initClickEffect() {
  // ensure keyframes exist once
  if (!document.getElementById('ripple-keyframes')) {
    const style = document.createElement('style');
    style.id = 'ripple-keyframes';
    style.textContent = `@keyframes ripple { to { width: 200px; height: 200px; opacity: 0; } }`;
    document.head.appendChild(style);
  }

  document.querySelectorAll('.select-button').forEach((button) => {
    // avoid double-binding
    if (button.dataset.rippleBound === '1') return;
    button.dataset.rippleBound = '1';

    // ensure the target can host absolute children
    const pos = window.getComputedStyle(button).position;
    if (pos === 'static' || !pos) {
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
    }

    button.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        width:20px;
        height:20px;
        background:rgba(255,255,255,0.6);
        border-radius:50%;
        left:${x}px;
        top:${y}px;
        transform:translate(-50%,-50%);
        animation:ripple 0.6s ease-out;
        pointer-events:none;
      `;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}