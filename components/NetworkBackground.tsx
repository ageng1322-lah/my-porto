import React, { useEffect, useRef } from 'react';

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: -1000, y: -1000, radius: 250 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseHeight: number;
      currentH: number;
      pulse: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.15 + 0.05; // Smooth slow movement
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * 12 + 6;
        this.baseHeight = Math.random() * 50 + 20;
        this.currentH = this.baseHeight;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Smooth wrapping to keep screen perfectly filled
        const padding = 100;
        if (this.x < -padding) this.x = width + padding;
        if (this.x > width + padding) this.x = -padding;
        if (this.y < -padding) this.y = height + padding;
        if (this.y > height + padding) this.y = -padding;

        this.pulse += 0.015;
        
        // Fluid height animation like an ocean of data
        this.currentH = this.baseHeight + Math.sin(this.pulse) * 20;

        // Interactive mouse lift
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.currentH += force * 80; // Blocks rise up when hovered
            // Subtle repel for dynamic feel
            this.x -= (dx/dist) * force * 0.5;
            this.y -= (dy/dist) * force * 0.5;
        }
      }

      drawCube(ctx: CanvasRenderingContext2D) {
        const w = this.size;
        const d = this.size * 0.5; // Iso depth
        const h = this.currentH;
        const glow = Math.sin(this.pulse) * 0.5 + 0.5;
        const x = this.x;
        const y = this.y;

        // Base shadow on floor
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.moveTo(x, y - d);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x, y + d);
        ctx.lineTo(x - w, y);
        ctx.closePath();
        ctx.fill();

        // Left Face
        ctx.fillStyle = `rgba(15, 23, 42, 0.8)`; 
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 + glow * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - w, y);
        ctx.lineTo(x, y + d);
        ctx.lineTo(x, y + d - h);
        ctx.lineTo(x - w, y - h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Right Face
        ctx.fillStyle = `rgba(30, 41, 59, 0.8)`; 
        ctx.beginPath();
        ctx.moveTo(x + w, y);
        ctx.lineTo(x, y + d);
        ctx.lineTo(x, y + d - h);
        ctx.lineTo(x + w, y - h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Top Face (Cyberpunk glow)
        ctx.fillStyle = `rgba(34, 211, 238, ${0.1 + glow * 0.15})`;
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.4 + glow * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y - h - d);
        ctx.lineTo(x + w, y - h);
        ctx.lineTo(x, y - h + d);
        ctx.lineTo(x - w, y - h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Glowing core on top
        if (glow > 0.7) {
            ctx.fillStyle = `rgba(255, 255, 255, ${glow})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(34, 211, 238, 1)';
            ctx.beginPath();
            ctx.arc(x, y - h, Math.max(1, w * 0.15), 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
      }
    }

    let particles: Particle[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const density = Math.floor((canvas.width * canvas.height) / 25000);
      const count = Math.min(Math.max(density, 40), 120); // Scale appropriately
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update all
      particles.forEach(p => p.update(canvas.width, canvas.height));

      // 2. Sort by Y (back to front layering for perfect 3D depth)
      particles.sort((a, b) => a.y - b.y);

      // 3. Draw Chains
      const connectionDist = 250;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.4;
            
            // Floor Chain
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Top-to-Top Data Chain
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y - p1.currentH);
            ctx.lineTo(p2.x, p2.y - p2.currentH);
            ctx.stroke();

            // Traveling Data Packets on floor
            if (opacity > 0.1 && Math.sin(p1.pulse + i) > 0.95) {
                const timeFactor = (p1.pulse * 2) % 1;
                const px = p1.x + (p2.x - p1.x) * timeFactor;
                const py = p1.y + (p2.y - p1.y) * timeFactor;
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
                ctx.shadowBlur = 5;
                ctx.shadowColor = 'rgba(34, 211, 238, 1)';
                ctx.fillRect(px - 1.5, py - 1.5, 3, 3);
                ctx.shadowBlur = 0;
            }
          }
        }
      }

      // 4. Draw Cubes
      particles.forEach(p => p.drawCube(ctx));

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkBackground;
