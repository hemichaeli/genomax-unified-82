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
      "bg-card border border-border transition-all duration-300",
      active && "border-primary",
      pulse && "animate-os-glow-pulse",
      active && glowColor,
      className
    )}>
      {/* OS indicator dot */}
      <div className={cn(
        "absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all",
        active ? "bg-primary animate-os-glow-pulse" : "bg-muted"
      )} />
      
      {/* Icon */}
      <Icon className={cn(
        "w-5 h-5 transition-colors",
        active ? "text-primary" : "text-muted-foreground"
      )} />
      
      {/* Inner glow effect */}
      {active && (
        <div className="absolute inset-0 rounded-full" 
          style={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.1)" }} 
        />
      )}
    </div>
  );
};
