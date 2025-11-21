import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakTrackerProps {
  currentStreak: number;
  graceUsed?: boolean;
  className?: string;
}

export const StreakTracker = ({ currentStreak, graceUsed, className }: StreakTrackerProps) => {
  return (
    <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-os-cyan/10 to-primary/10 border border-os-cyan/20 rounded-lg backdrop-blur", className)}>
      <Flame className={cn(
        "w-5 h-5 transition-all duration-300",
        currentStreak >= 7 ? "text-os-cyan animate-os-glow-pulse" : "text-muted-foreground"
      )} />
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold animate-streak-bounce">{currentStreak}</span>
        <span className="text-sm text-muted-foreground">day{currentStreak !== 1 ? "s" : ""}</span>
      </div>
      {graceUsed && (
        <span className="text-xs text-muted-foreground ml-2 px-2 py-0.5 bg-background/50 rounded">
          grace used
        </span>
      )}
    </div>
  );
};
