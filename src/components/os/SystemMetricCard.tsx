import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SystemMetricCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  unit?: string;
  color?: string;
  className?: string;
}

export const SystemMetricCard = ({
  icon: Icon,
  label,
  value,
  unit = "%",
  color = "from-primary to-primary",
  className
}: SystemMetricCardProps) => {
  return (
    <Card className={cn(
      "p-6 bg-card/50 backdrop-blur relative overflow-hidden os-hover-scale transition-all duration-300",
      "border-border hover:border-primary/40",
      className
    )}>
      <div className="os-noise absolute inset-0" />
      
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{value}{unit}</div>
          </div>
        </div>
        
        {/* Label */}
        <div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
              style={{ width: `${Math.min(value, 100)}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 60%)`
        }}
      />
    </Card>
  );
};
