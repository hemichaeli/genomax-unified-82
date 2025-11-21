import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CinematicOSHeroProps {
  children: ReactNode;
  className?: string;
}

export const CinematicOSHero = ({ children, className }: CinematicOSHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life = (particle.life + 0.002) % 1;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        const opacity = Math.sin(particle.life * Math.PI) * 0.5;
        ctx.fillStyle = `rgba(77, 228, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(77, 228, 255, ${(1 - distance / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={cn("relative min-h-[90vh] flex items-center overflow-hidden", className)}>
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* OS Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(186 100% 64% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(186 100% 64% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Rotating OS Ring */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.08] animate-os-ring-rotate"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, hsl(213 100% 55%), hsl(330 100% 68%), hsl(213 100% 55%))",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Radial Glow Spotlight */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px]"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(186 100% 64% / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Content Container with Parallax */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="animate-parallax-slow">
          {children}
        </div>
      </div>

      {/* Bottom Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, hsl(225 19% 6%), transparent)",
        }}
      />
    </section>
  );
};
