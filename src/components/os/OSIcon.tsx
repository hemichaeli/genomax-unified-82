import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface OSIconProps {
  icon: LucideIcon;
  active?: boolean;
  pulse?: boolean;
  gender?: "maxima" | "maximo";
  className?: string;
}

export const OSIcon = ({ 
  icon: Icon, 
  active = false, 
  pulse = false,
  gender,
  className 
}: OSIconProps) => {
  const glowColor = gender === "maxima" 
    ? "shadow-glow-maxima" 
    : gender === "maximo" 
    ? "shadow-glow-maximo" 
    : "shadow-glow-primary";

  return (
    <div className={cn(
      "relative w-12 h-12 rounded-full flex items-center justify-center",
      "bg-card/80 backdrop-blur-sm border border-border transition-all duration-[140ms]",
      active && "border-primary scale-105",
      pulse && "animate-os-glow-pulse",
      active && glowColor,
      className
    )}>
      {/* OS indicator dot */}
      <div className={cn(
        "absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-[140ms]",
        active ? "bg-primary animate-os-glow-pulse scale-110" : "bg-muted"
      )} />
      
      {/* Icon */}
      <Icon className={cn(
        "w-5 h-5 transition-all duration-[140ms]",
        active ? "text-primary scale-110" : "text-muted-foreground"
      )} />
      
      {/* Inner glow effect */}
      {active && (
        <div className="absolute inset-0 rounded-full" 
          style={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.08)" }} 
        />
      )}
    </div>
  );
};
