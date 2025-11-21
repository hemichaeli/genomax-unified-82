import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MatrixBiomarker {
  name: string;
  system: string;
  value: number;
  unit: string;
  zone: "optimal" | "suboptimal" | "low" | "high";
  trend: "up" | "down" | "stable";
  score: number; // 0-100
}

interface OSDiagnosticMatrixProps {
  biomarkers: MatrixBiomarker[];
  gender?: "maxima" | "maximo";
}

export const OSDiagnosticMatrix = ({ biomarkers, gender = "maximo" }: OSDiagnosticMatrixProps) => {
  const [selectedMarker, setSelectedMarker] = useState<MatrixBiomarker | null>(null);

  const systems = Array.from(new Set(biomarkers.map(b => b.system)));

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case "optimal":
        return gender === "maxima" ? "border-maxima" : "border-maximo";
      case "suboptimal":
        return "border-yellow-400";
      case "low":
        return "border-orange-400";
      case "high":
        return "border-[#FF2A2A]";
      default:
        return "border-border";
    }
  };

  const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === "up") return <TrendingUp className="w-3 h-3" />;
    if (trend === "down") return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  return (
    <Card className="p-8 bg-card/50 backdrop-blur space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">OS Diagnostic Matrix</h3>
          <p className="text-sm text-muted-foreground">Pro Mode — Biological Systems Overview</p>
        </div>
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {biomarkers.map((marker, index) => {
          const circumference = 2 * Math.PI * 16;
          const strokeDashoffset = circumference - (marker.score / 100) * circumference;
          
          return (
            <button
              key={marker.name}
              onClick={() => setSelectedMarker(marker)}
              className={`group relative p-4 rounded-2xl border-2 transition-all duration-[200ms] animate-card-snap
                hover:scale-105 hover:shadow-[0_0_24px_hsl(var(--primary)/0.3)]
                ${getZoneColor(marker.zone)} bg-background/40`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Neon glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[200ms]" />
              
              <div className="relative space-y-3">
                {/* Mini Ring */}
                <div className="relative w-10 h-10 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-[260ms]"
                    />
                  </svg>
                </div>

                {/* Name */}
                <div className="text-center">
                  <div className="text-sm font-semibold truncate">{marker.name}</div>
                  <div className="text-xs text-muted-foreground">{marker.system}</div>
                </div>

                {/* Value + Trend */}
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="font-medium">{marker.value}{marker.unit}</span>
                  <TrendIcon trend={marker.trend} />
                </div>

                {/* Zone Tag */}
                <div className={`text-[10px] font-semibold uppercase text-center ${
                  marker.zone === "optimal" 
                    ? gender === "maxima" ? "text-maxima" : "text-maximo"
                    : marker.zone === "suboptimal" ? "text-yellow-400"
                    : marker.zone === "low" ? "text-orange-400"
                    : "text-[#FF2A2A]"
                }`}>
                  {marker.zone}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Card */}
      {selectedMarker && (
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">{selectedMarker.name}</h4>
            <button
              onClick={() => setSelectedMarker(null)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">System:</span>
              <span className="ml-2 font-medium">{selectedMarker.system}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Current Value:</span>
              <span className="ml-2 font-medium">{selectedMarker.value} {selectedMarker.unit}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Zone:</span>
              <span className="ml-2 font-medium capitalize">{selectedMarker.zone}</span>
            </div>
            <div>
              <span className="text-muted-foreground">OS Score:</span>
              <span className="ml-2 font-medium">{selectedMarker.score}/100</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
