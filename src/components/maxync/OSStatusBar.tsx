import { cn } from "@/lib/utils";

interface OSStatusBarProps {
  status: "stable" | "improving" | "needs-attention" | "critical";
  score: number;
  className?: string;
}

export const OSStatusBar = ({ status, score, className }: OSStatusBarProps) => {
  const statusConfig = {
    stable: {
      text: "Stable",
      color: "text-os-success",
      ringColor: "hsl(151 83% 80%)"
    },
    improving: {
      text: "Improving",
      color: "text-os-warning",
      ringColor: "hsl(44 93% 63%)"
    },
    "needs-attention": {
      text: "Needs Attention",
      color: "text-orange-400",
      ringColor: "hsl(25 95% 53%)"
    },
    critical: {
      text: "Critical",
      color: "text-[#FF2A2A]",
      ringColor: "hsl(354 100% 62%)"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={cn("p-4 bg-card/50 backdrop-blur border border-border rounded-lg", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke="hsl(var(--border))"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke={config.ringColor}
                strokeWidth="3"
                fill="none"
                strokeDasharray={100.53}
                strokeDashoffset={100.53 - (score / 100) * 100.53}
                strokeLinecap="round"
                className="transition-all duration-[650ms]"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold">{score}</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Today's OS Status:</p>
            <p className={cn("font-semibold", config.color)}>{config.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
