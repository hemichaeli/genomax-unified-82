import { ReactNode } from "react";
import { OSRingBackground } from "./OSRingBackground";

interface CinematicHeroProps {
  children: ReactNode;
}

export const CinematicHero = ({ children }: CinematicHeroProps) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Multi-layer Parallax Background */}
      <OSRingBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 opacity-40"
        style={{
          background: "linear-gradient(135deg, hsl(190 85% 12%) 0%, hsl(217 28% 4%) 50%, hsl(330 60% 12%) 100%)"
        }}
      />
      
      {/* OS Noise Texture */}
      <div className="os-noise absolute inset-0 opacity-50" />
      
      {/* Dynamic Grid */}
      <div className="absolute inset-0 os-grid opacity-10" />
      
      {/* Node Network Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--maximo))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--maxima))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="90%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="20%" y1="80%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="15%" y1="50%" x2="85%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
        
        {/* Floating Nodes */}
        <div className="absolute top-[15%] left-[12%] w-2 h-2 rounded-full bg-maximo/40 animate-float-slow" />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-maxima/40 animate-float-slow" 
          style={{ animationDelay: "1s" }} 
        />
        <div className="absolute bottom-[20%] left-[18%] w-2 h-2 rounded-full bg-primary/40 animate-float-slow" 
          style={{ animationDelay: "2s" }} 
        />
        <div className="absolute bottom-[30%] right-[20%] w-2 h-2 rounded-full bg-maximo/40 animate-float-slow" 
          style={{ animationDelay: "3s" }} 
        />
      </div>
      
      {/* Radial Glow Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, hsl(var(--maxima) / 0.5) 30%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />
      
      {/* Soft Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, hsl(var(--primary)) 0%, transparent 60%)",
          filter: "blur(60px)"
        }}
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
