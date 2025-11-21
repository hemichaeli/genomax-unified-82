import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Biomarker {
  name: string;
  value: number;
  unit: string;
  zone: "optimal" | "suboptimal" | "low" | "high";
  trend: "up" | "down" | "stable";
  refRange?: string;
}

interface BiomarkerSummaryPanelProps {
  biomarkers: Biomarker[];
  gender?: "maxima" | "maximo";
}

export const BiomarkerSummaryPanel = ({ biomarkers, gender = "maximo" }: BiomarkerSummaryPanelProps) => {
  const getZoneColor = (zone: string) => {
    switch (zone) {
      case "optimal":
        return gender === "maxima" ? "text-maxima" : "text-maximo";
      case "suboptimal":
        return "text-yellow-400";
      case "low":
        return "text-orange-400";
      case "high":
        return "text-[#FF2A2A]";
      default:
        return "text-muted-foreground";
    }
  };

  const getZoneRingColor = (zone: string) => {
    switch (zone) {
      case "optimal":
        return gender === "maxima" ? "hsl(330 100% 68%)" : "hsl(186 100% 64%)";
      case "suboptimal":
        return "hsl(45 100% 60%)";
      case "low":
        return "hsl(25 100% 60%)";
      case "high":
        return "hsl(0 100% 60%)";
      default:
        return "hsl(var(--border))";
    }
  };

  const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <Card className="p-6 bg-card/50 backdrop-blur space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Biomarker Summary</h3>
        <div className="text-sm text-muted-foreground">Top Priority Markers</div>
      </div>

      <div className="space-y-4">
        {biomarkers.map((marker, index) => (
          <div
            key={marker.name}
            className="group p-4 rounded-2xl bg-background/40 border border-border/50 transition-all duration-[200ms] hover:border-primary/30 hover:translate-x-1 animate-card-snap"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              {/* Left: Mini ring + name */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="hsl(var(--border))"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke={getZoneRingColor(marker.zone)}
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${(marker.value / 100) * 125.6} 125.6`}
                      strokeLinecap="round"
                      className="transition-all duration-[260ms]"
                      style={{
                        filter: `drop-shadow(0 0 6px ${getZoneRingColor(marker.zone)})`
                      }}
                    />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold">{marker.name}</div>
                  <div className="text-sm text-muted-foreground">{marker.refRange}</div>
                </div>
              </div>

              {/* Right: Value + Zone + Trend */}
              <div className="text-right space-y-1">
                <div className="text-lg font-bold">
                  {marker.value} {marker.unit}
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span className={`text-xs font-medium uppercase ${getZoneColor(marker.zone)}`}>
                    {marker.zone}
                  </span>
                  <TrendIcon trend={marker.trend} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
