import { useEffect, useState } from "react";
import { OSRingBackground } from "@/components/os/OSRingBackground";

interface OSBootScreenProps {
  onComplete: () => void;
}

export const OSBootScreen = ({ onComplete }: OSBootScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <OSRingBackground />
      
      <div className="relative z-10 text-center space-y-8 max-w-2xl px-6">
        {/* OS Core */}
        <div className="relative w-48 h-48 mx-auto">
          {/* Rotating rings */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-os-ring-rotate" />
          <div 
            className="absolute inset-4 rounded-full border-2 border-primary/40 animate-os-ring-rotate" 
            style={{ animationDirection: "reverse", animationDuration: "12s" }} 
          />
          <div 
            className="absolute inset-8 rounded-full border-2 border-primary/60 animate-os-ring-rotate" 
            style={{ animationDuration: "8s" }} 
          />
          
          {/* Center core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary animate-os-glow-pulse" />
            </div>
          </div>

          {/* Diagnostic sweep */}
          <div 
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from ${progress * 3.6}deg at 50% 50%, transparent 0deg, rgba(77, 228, 255, 0.3) 30deg, transparent 60deg)`,
              borderRadius: "50%",
              transition: "background 50ms linear"
            }}
          />
        </div>

        {/* Text */}
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Booting Your Biological OS<span className="animate-pulse">...</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            <span className="text-[#FF2A2A]">MAX²</span> is preparing your personal optimization environment.
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative max-w-md mx-auto">
          <div className="h-1 bg-border/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-maximo to-maximo-light transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground mt-2">{progress}%</div>
        </div>
      </div>
    </div>
  );
};
