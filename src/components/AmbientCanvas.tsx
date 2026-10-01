import React, { useEffect, useRef } from 'react';

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Target and current mouse positions for smooth interpolation
    let mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic floating particle network
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      baseAlpha: Math.random() * 0.3 + 0.1,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Primary cursor-following Cobalt Ambient Aura
      const ambientGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width * 0.45, 450)
      );
      ambientGrad.addColorStop(0, 'rgba(0, 56, 255, 0.14)');
      ambientGrad.addColorStop(0.35, 'rgba(0, 56, 255, 0.05)');
      ambientGrad.addColorStop(0.7, 'rgba(10, 10, 12, 0.02)');
      ambientGrad.addColorStop(1, 'rgba(10, 10, 12, 0)');

      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // Secondary floating subtle ambient bloom on top right
      const secondaryX = width * 0.75 + Math.sin(time * 0.8) * 60;
      const secondaryY = height * 0.25 + Math.cos(time * 0.6) * 40;
      const secondaryGrad = ctx.createRadialGradient(
        secondaryX,
        secondaryY,
        0,
        secondaryX,
        secondaryY,
        380
      );
      secondaryGrad.addColorStop(0, 'rgba(0, 56, 255, 0.08)');
      secondaryGrad.addColorStop(1, 'rgba(10, 10, 12, 0)');
      ctx.fillStyle = secondaryGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle particle coordinates
      ctx.fillStyle = 'rgba(245, 243, 239, 0.25)';
      ctx.strokeStyle = 'rgba(0, 56, 255, 0.08)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 243, 239, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
