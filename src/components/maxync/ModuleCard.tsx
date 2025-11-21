import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  icon: LucideIcon;
  name: string;
  purpose: string;
  dose: string;
  timeWindow: string;
  completed: boolean;
  onToggle: () => void;
  staggerDelay?: number;
  className?: string;
}

export const ModuleCard = ({
  icon: Icon,
  name,
  purpose,
  dose,
  timeWindow,
  completed,
  onToggle,
  staggerDelay = 0,
  className
}: ModuleCardProps) => {
  return (
    <Card 
      className={cn(
        "p-4 bg-card/50 backdrop-blur border border-border transition-all duration-[200ms] cursor-pointer group hover:scale-[1.02] hover:shadow-lg",
        completed && "border-os-success/30 bg-os-success/5",
        className
      )}
      style={{
        animationDelay: `${staggerDelay}ms`,
        opacity: 0,
        animation: "fade-in 300ms ease-out forwards"
      }}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={cn(
          "p-3 rounded-lg border-2 transition-all duration-[200ms]",
          completed 
            ? "bg-os-success/10 border-os-success/30" 
            : "bg-background/50 border-border group-hover:border-primary/30"
        )}>
          <Icon className={cn(
            "w-5 h-5 transition-colors duration-[200ms]",
            completed ? "text-os-success" : "text-muted-foreground group-hover:text-primary"
          )} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-base mb-1">{name}</h4>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{purpose}</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">{dose}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground capitalize">{timeWindow}</span>
          </div>
        </div>

        {/* Checkbox */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-[200ms] flex-shrink-0",
            completed 
              ? "bg-os-success border-os-success animate-module-check" 
              : "border-muted group-hover:border-primary/50"
          )}
        >
          {completed && (
            <svg
              className="w-4 h-4 text-background"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Completion glow */}
      {completed && (
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow: "inset 0 0 20px hsl(151 83% 80% / 0.1)"
          }}
        />
      )}
    </Card>
  );
};
