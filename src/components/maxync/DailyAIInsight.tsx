import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DailyAIInsightProps {
  insight: string;
  details?: string;
  className?: string;
}

export const DailyAIInsight = ({ insight, details, className }: DailyAIInsightProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={cn(
      "p-5 bg-gradient-to-br from-card to-background backdrop-blur border border-primary/20 transition-all duration-300 hover:border-primary/30",
      className
    )}>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 rounded-lg bg-primary/10">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs px-2 py-0.5 border-[#FF2A2A]/30 bg-[#FF2A2A]/10">
                  <span className="text-[#FF2A2A] font-semibold">AI</span>
                </Badge>
                <span className="text-xs text-muted-foreground">Daily Insight</span>
              </div>
              <p className="text-sm leading-relaxed">{insight}</p>
            </div>
          </div>

          {details && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded hover:bg-primary/10 transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          )}
        </div>

        {details && isExpanded && (
          <div 
            className="pt-3 border-t border-border animate-fade-in"
            style={{
              animationDuration: "220ms"
            }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">{details}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
