import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const particles: Particle[] = [];

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.8 + 0.3,
        life: 1,
        maxLife: 1,
        size: Math.random() * 2 + 1,
      });
    };

    const animate = () => {
      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.003;

        // Fade out effect
        const alpha = p.life * 0.4;

        // Draw particle
        ctx.fillStyle = `rgba(237, 139, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional: add subtle glow
        ctx.strokeStyle = `rgba(237, 139, 0, ${alpha * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Randomly create new particles
      if (Math.random() < 0.6) {
        createParticle();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      particles.length = 0;
    };
  }, []);

  return (
    <>
      <canvas
        ref={particlesRef}
        className="matrix-canvas"
      />
      <div ref={containerRef} className="matrix-bg" />
    </>
  );
};

export default MatrixRain;
