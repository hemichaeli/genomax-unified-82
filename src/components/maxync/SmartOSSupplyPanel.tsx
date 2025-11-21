import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartOSSupplyPanelProps {
  module: string;
  daysRemaining: number;
  isLow: boolean;
  className?: string;
}

export const SmartOSSupplyPanel = ({ module, daysRemaining, isLow, className }: SmartOSSupplyPanelProps) => {
  return (
    <Card className={cn(
      "p-5 bg-card/50 backdrop-blur border transition-all duration-300",
      isLow ? "border-[#FF2A2A]/30 bg-[#FF2A2A]/5" : "border-border",
      className
    )}>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className={cn(
            "p-2 rounded-lg transition-all duration-300",
            isLow ? "bg-[#FF2A2A]/10 animate-supply-pulse" : "bg-primary/10"
          )}>
            <Package className={cn(
              "w-5 h-5",
              isLow ? "text-[#FF2A2A]" : "text-primary"
            )} />
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold mb-1 flex items-center gap-2">
              Smart OS Supply
              {isLow && <AlertCircle className="w-4 h-4 text-[#FF2A2A]" />}
            </h4>
            <p className={cn(
              "text-sm",
              isLow ? "text-[#FF2A2A] font-medium" : "text-muted-foreground"
            )}>
              {module} will run out in {daysRemaining} days
            </p>
            {isLow && (
              <p className="text-xs text-muted-foreground mt-1">
                Smart OS Supply can sync refills automatically
              </p>
            )}
          </div>
        </div>

        <Button
          variant="outline"
          className={cn(
            "w-full transition-all duration-[220ms] hover:scale-[1.02]",
            isLow && "border-[#FF2A2A]/30 hover:border-[#FF2A2A]/50 hover:bg-[#FF2A2A]/5"
          )}
        >
          Sync My Refills
        </Button>
      </div>
    </Card>
  );
};
