import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    const colors = ['#3A3F47', '#FFFFFF', '#ABB2BF', '#729CEE'];
    let particles = [];
    const particleCount = 250;
    const connectionDistance = 100;
    const baseSpeed = 0.8;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() * 2 - 1) * baseSpeed;
        this.speedY = (Math.random() * 2 - 1) * baseSpeed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.zOffset = Math.random() * Math.PI * 2;
        this.zSpeed = 0.02 + Math.random() * 0.02;
        this.isIcon = Math.random() < 0.1;
        if (this.isIcon) {
          this.icon = ['</', '{}', '[]', '()'][Math.floor(Math.random() * 4)];
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        this.zOffset += this.zSpeed;
        this.z = (Math.sin(this.zOffset) + 1) / 2 * 3;
      }

      draw() {
        const scale = (this.z + 1) / 4;
        ctx.globalAlpha = scale;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `${particles[i].color}${Math.floor((1 - distance / connectionDistance) * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 hidden md:block" />;
};

export default BackgroundAnimation;