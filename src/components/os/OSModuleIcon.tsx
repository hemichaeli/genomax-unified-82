import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface OSModuleIconProps {
  icon: LucideIcon;
  category: string;
  active?: boolean;
  gender?: "maxima" | "maximo";
  className?: string;
}

export const OSModuleIcon = ({ 
  icon: Icon, 
  category,
  active = false,
  gender,
  className 
}: OSModuleIconProps) => {
  const glowColor = gender === "maxima" 
    ? "shadow-glow-maxima" 
    : gender === "maximo" 
    ? "shadow-glow-maximo" 
    : "shadow-glow-primary";

  return (
    <div className={cn(
      "relative w-16 h-16 rounded-2xl flex items-center justify-center",
      "bg-card/80 backdrop-blur-sm border-2 transition-all duration-[140ms]",
      active ? "border-primary scale-105" : "border-border",
      active && glowColor,
      active && "hover:scale-110 hover:translate-y-[-8px]",
      className
    )}>
      {/* Background Glow */}
      {active && (
        <div className="absolute inset-0 rounded-2xl bg-primary/5" />
      )}
      
      {/* OS Indicator Dot */}
      <div className={cn(
        "absolute -top-1 -right-1 w-4 h-4 rounded-full transition-all duration-[140ms] border-2 border-background",
        active ? "bg-primary animate-os-glow-pulse scale-110" : "bg-muted"
      )} />
      
      {/* Icon */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <Icon className={cn(
          "w-7 h-7 transition-all duration-[140ms]",
          active ? "text-primary scale-110" : "text-muted-foreground"
        )} />
      </div>
      
      {/* Inner Glow Effect */}
      {active && (
        <div className="absolute inset-0 rounded-2xl" 
          style={{ boxShadow: "inset 0 0 24px hsl(var(--primary) / 0.08)" }} 
        />
      )}
      
      {/* Pulse Ring */}
      {active && (
        <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-ping"
          style={{ animationDuration: "4s" }}
        />
      )}
    </div>
  );
};
