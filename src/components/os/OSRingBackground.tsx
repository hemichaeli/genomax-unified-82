import { cn } from "@/lib/utils";

interface OSRingBackgroundProps {
  className?: string;
}

export const OSRingBackground = ({ className }: OSRingBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Large rotating OS ring */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, hsl(var(--maximo)) 0deg, hsl(var(--maxima)) 180deg, hsl(var(--maximo)) 360deg)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "os-ring-rotate 30s linear infinite"
        }}
      />
      
      {/* Floating nodes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float-slow" 
        style={{ animationDelay: "0s" }} 
      />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-maxima/30 animate-float-slow" 
        style={{ animationDelay: "2s" }} 
      />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-maximo/30 animate-float-slow" 
        style={{ animationDelay: "4s" }} 
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 os-grid opacity-20" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0" 
        style={{
          background: "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)"
        }}
      />
    </div>
  );
};
