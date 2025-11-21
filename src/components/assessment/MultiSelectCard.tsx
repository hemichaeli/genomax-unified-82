import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MultiSelectCardProps {
  id: string;
  label: string;
  selected: boolean;
  onToggle: (id: string) => void;
  maxReached?: boolean;
}

export const MultiSelectCard = ({ 
  id, 
  label, 
  selected, 
  onToggle,
  maxReached 
}: MultiSelectCardProps) => {
  const isDisabled = maxReached && !selected;
  
  return (
    <Card
      className={cn(
        "p-4 cursor-pointer transition-all hover:scale-[1.02] relative",
        selected && "border-accent bg-accent/5",
        isDisabled && "opacity-50 cursor-not-allowed hover:scale-100"
      )}
      onClick={() => !isDisabled && onToggle(id)}
    >
      <div className="flex items-center justify-between">
        <span className={cn(
          "text-sm font-medium",
          selected && "text-accent"
        )}>
          {label}
        </span>
        {selected && (
          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
            <Check className="h-3 w-3 text-background" />
          </div>
        )}
      </div>
    </Card>
  );
};
