import { cn } from "@/lib/utils";

interface PillButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const PillButton = ({ label, selected, onClick, disabled }: PillButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-3 rounded-full text-sm font-medium transition-all duration-[220ms]",
        "border-2",
        selected
          ? "border-accent bg-accent/10 text-accent shadow-[0_0_16px_hsl(354_100%_62%/0.3)]"
          : "border-border bg-card/50 text-muted-foreground hover:border-accent/50 hover:bg-card hover:scale-[1.02]",
        disabled && "opacity-50 cursor-not-allowed hover:scale-100"
      )}
    >
      {label}
    </button>
  );
};
