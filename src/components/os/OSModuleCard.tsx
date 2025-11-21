import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { OSIcon } from "./OSIcon";

interface OSModuleCardProps {
  icon: LucideIcon;
  title: string;
  purpose: string;
  time: string;
  completed?: boolean;
  gender?: "maxima" | "maximo";
  onAction?: () => void;
  className?: string;
}

export const OSModuleCard = ({
  icon,
  title,
  purpose,
  time,
  completed = false,
  gender,
  onAction,
  className
}: OSModuleCardProps) => {
  const genderGradient = gender === "maxima" 
    ? "from-maxima/5 to-transparent" 
    : gender === "maximo"
    ? "from-maximo/5 to-transparent"
    : "from-primary/5 to-transparent";

  const genderBorder = gender === "maxima"
    ? "border-maxima/20 hover:border-maxima/30"
    : gender === "maximo"
    ? "border-maximo/20 hover:border-maximo/30"
    : "border-primary/20 hover:border-primary/30";

  return (
    <Card className={cn(
      "p-6 space-y-4 transition-all duration-300 hover:scale-[1.02] group",
      "bg-gradient-to-br from-card to-background backdrop-blur relative overflow-hidden border",
      genderBorder,
      completed && "opacity-50",
      className
    )}>
      {/* Subtle Gradient Overlay */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", genderGradient)} />
      
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <OSIcon 
            icon={icon} 
            active={!completed} 
            pulse={!completed}
            gender={gender}
          />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {time}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {purpose}
          </p>
        </div>

        {/* Action */}
        {!completed && (
          <Button
            onClick={onAction}
            className={cn(
              "w-full transition-all duration-300 hover:scale-105",
              gender === "maxima" && "bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 text-white",
              gender === "maximo" && "bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 text-white"
            )}
          >
            Take Now
          </Button>
        )}
        
        {completed && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-5 h-5 rounded-full bg-os-success/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-os-success" />
            </div>
            Completed
          </div>
        )}
      </div>
    </Card>
  );
};
