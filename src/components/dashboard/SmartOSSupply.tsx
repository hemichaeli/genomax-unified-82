import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Calendar } from "lucide-react";

interface Supplement {
  name: string;
  daysRemaining: number;
  icon: string;
}

interface SmartOSSupplyProps {
  supplements: Supplement[];
}

export const SmartOSSupply = ({ supplements }: SmartOSSupplyProps) => {
  const nextToRunOut = supplements.reduce((prev, curr) => 
    prev.daysRemaining < curr.daysRemaining ? prev : curr
  );

  const isLowSupply = nextToRunOut.daysRemaining < 7;

  return (
    <Card className={`p-6 bg-card/50 backdrop-blur space-y-6 transition-all duration-[280ms] ${
      isLowSupply ? "border-[#FF2A2A]/40 animate-low-inventory-pulse" : ""
    }`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Smart OS Supply</h3>
        {isLowSupply && (
          <span className="text-xs font-semibold text-[#FF2A2A] px-2 py-1 rounded-full bg-[#FF2A2A]/10">
            Low Supply
          </span>
        )}
      </div>

      {/* Timeline Bar */}
      <div className="relative">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Day 0</span>
          <span>Day 30</span>
          <span>Day 45</span>
          <span>Day 60</span>
        </div>
        
        <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
          {/* Progress fill */}
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-maximo to-maximo-light transition-all duration-[450ms]"
            style={{ width: `${(30 / 60) * 100}%` }}
          />
        </div>

        {/* Markers */}
        <div className="relative h-8 mt-2">
          {supplements.map((supp, index) => {
            const position = (supp.daysRemaining / 60) * 100;
            return (
              <div
                key={supp.name}
                className="absolute flex flex-col items-center -translate-x-1/2 animate-icon-pop"
                style={{ 
                  left: `${position}%`,
                  animationDelay: `${index * 120}ms`
                }}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-[180ms] ${
                  supp.daysRemaining < 7 
                    ? "bg-[#FF2A2A] shadow-[0_0_12px_#FF2A2A] animate-pulse" 
                    : "bg-primary"
                }`} />
                <div className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                  {supp.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* First to Run Out */}
      <div className="p-4 rounded-2xl bg-background/40 border border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isLowSupply ? "bg-[#FF2A2A]/10" : "bg-primary/10"
            }`}>
              <Pill className={`w-5 h-5 ${isLowSupply ? "text-[#FF2A2A]" : "text-primary"}`} />
            </div>
            <div>
              <div className="font-semibold">{nextToRunOut.name}</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {nextToRunOut.daysRemaining} days remaining
              </div>
            </div>
          </div>
          {isLowSupply && (
            <div className="text-[#FF2A2A] font-semibold text-sm">
              Refill Soon
            </div>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <Button 
          className="flex-1 bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90"
        >
          Sync My OS Supply
        </Button>
        <Button variant="outline" className="flex-1">
          Adjust Dosage
        </Button>
      </div>
    </Card>
  );
};
