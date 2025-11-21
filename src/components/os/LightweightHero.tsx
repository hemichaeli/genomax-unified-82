import { ReactNode } from "react";

interface LightweightHeroProps {
  children: ReactNode;
}

export const LightweightHero = ({ children }: LightweightHeroProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* OS Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="os-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(240 8% 12%)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#os-grid)" />
        </svg>
      </div>
      
      {/* Rotating OS Rings - Very Slow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Ring */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 animate-spin"
          style={{ animationDuration: '60s' }}
        />
        
        {/* Middle Ring */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full border border-maximo/15 animate-spin"
          style={{ animationDuration: '40s', animationDirection: 'reverse' }}
        />
        
        {/* Inner Ring */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full border border-maxima/15 animate-spin"
          style={{ animationDuration: '30s' }}
        />
        
        {/* Center Glow */}
        <div 
          className="absolute w-[200px] h-[200px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(217 100% 50% / 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </div>
      
      {/* Warm Spotlight Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, hsl(0 100% 57% / 0.06), transparent 60%)'
        }}
      />
      
      {/* Ultra-thin Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: "screen" }}>
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 50%)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(0 100% 57%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(330 100% 58%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="25%" stroke="url(#line-grad)" strokeWidth="0.5" />
        <line x1="15%" y1="75%" x2="85%" y2="70%" stroke="url(#line-grad)" strokeWidth="0.5" />
      </svg>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
