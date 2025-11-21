import { Card } from "@/components/ui/card";

interface OSStabilityWidgetProps {
  score: number;
  gender?: "maxima" | "maximo";
}

export const OSStabilityWidget = ({ score, gender = "maximo" }: OSStabilityWidgetProps) => {
  const getStatus = (score: number) => {
    if (score >= 85) return { text: "Stable", color: "text-primary" };
    if (score >= 70) return { text: "Improving", color: "text-amber-400" };
    if (score >= 50) return { text: "Needs Attention", color: "text-orange-400" };
    return { text: "Critical", color: "text-[#FF2A2A]" };
  };

  const status = getStatus(score);
  const circumference = 2 * Math.PI * 100;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const glowColor = gender === "maxima" ? "hsl(330 100% 68%)" : "hsl(186 100% 64%)";

  return (
    <Card className="p-8 bg-card/50 backdrop-blur relative overflow-hidden transition-all duration-[280ms] hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)]">
      <div className="flex flex-col items-center space-y-6">
        <h3 className="text-xl font-bold">OS Stability Score</h3>
        
        {/* Circular Gauge */}
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 220 220">
            {/* Background ring */}
            <circle
              cx="110"
              cy="110"
              r="100"
              stroke="hsl(var(--border))"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress ring */}
            <circle
              cx="110"
              cy="110"
              r="100"
              stroke={glowColor}
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-[650ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                filter: `drop-shadow(0 0 12px ${glowColor})`
              }}
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold animate-os-glow-pulse">{score}</div>
              <div className="text-sm text-muted-foreground">/ 100</div>
            </div>
          </div>

          {/* Glow pulse */}
          <div 
            className="absolute inset-0 rounded-full opacity-20 animate-os-breathing"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
            }}
          />
        </div>

        {/* Status */}
        <div className="text-center space-y-2">
          <div className={`text-lg font-semibold ${status.color}`}>
            Your OS is {status.text}
          </div>
          <p className="text-sm text-muted-foreground">
            Based on biomarkers and protocol adherence
          </p>
        </div>
      </div>
    </Card>
  );
};
