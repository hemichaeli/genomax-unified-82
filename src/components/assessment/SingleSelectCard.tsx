import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SingleSelectCardProps {
  id: string;
  label: string;
  description?: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export const SingleSelectCard = ({ 
  id, 
  label, 
  description,
  selected, 
  onSelect 
}: SingleSelectCardProps) => {
  return (
    <Card
      className={cn(
        "p-6 cursor-pointer transition-all hover:scale-[1.02]",
        selected && "border-accent bg-accent/5"
      )}
      onClick={() => onSelect(id)}
    >
      <div className="space-y-2">
        <h3 className={cn(
          "text-lg font-semibold",
          selected && "text-accent"
        )}>
          {label}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
};
