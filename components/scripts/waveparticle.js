document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("waveCanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const particles = [];
  const particleCount = 80;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = this.randomColor();
    }

    randomColor() {
      const colors = [
        "rgba(99, 102, 241, 0.6)",
        "rgba(139, 92, 246, 0.6)",
        "rgba(236, 72, 153, 0.6)",
        "rgba(245, 158, 11, 0.6)",
        "rgba(16, 185, 129, 0.6)",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
  }

  init();
  animate();

  // Button ripple effect
  document.querySelectorAll(".select-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        transform: translate(-50%, -50%);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
      `;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  const style = document.createElement("style");
  style.textContent = `
    @keyframes rippleEffect {
      to {
        width: 200px;
        height: 200px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
