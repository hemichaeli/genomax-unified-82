import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface OSModuleTileProps {
  icon: LucideIcon;
  name: string;
  description: string;
  status: "active" | "recommended" | "pending";
  colorTheme: "gold" | "purple" | "blue" | "mint" | "pink" | "cyan";
  onClick?: () => void;
  className?: string;
}

export const OSModuleTile = ({
  icon: Icon,
  name,
  description,
  status,
  colorTheme,
  onClick,
  className,
}: OSModuleTileProps) => {
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 800);
    onClick?.();
  };

  const statusColors = {
    active: "bg-os-success",
    recommended: "bg-os-warning",
    pending: "bg-muted-foreground",
  };

  const themeGlows = {
    gold: "hover:shadow-[0_0_32px_hsl(44_93%_63%/0.3)]",
    purple: "hover:shadow-[0_0_32px_hsl(262_100%_82%/0.3)]",
    blue: "hover:shadow-[0_0_32px_hsl(213_100%_55%/0.3)]",
    mint: "hover:shadow-[0_0_32px_hsl(151_83%_80%/0.3)]",
    pink: "hover:shadow-[0_0_32px_hsl(330_100%_68%/0.3)]",
    cyan: "hover:shadow-[0_0_32px_hsl(186_100%_64%/0.3)]",
  };

  const themeIcons = {
    gold: "text-biological-gold",
    purple: "text-biological-purple",
    blue: "text-maximo",
    mint: "text-biological-mint",
    pink: "text-maxima",
    cyan: "text-os-cyan",
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        "transition-all duration-[220ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        "hover:translate-y-[-6px]",
        themeGlows[colorTheme],
        className
      )}
      style={{
        background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid hsl(186 100% 64% / 0.1)",
      }}
    >
      {/* Liquid Ripple Effect */}
      {isRippling && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 animate-liquid-ripple rounded-2xl border-2 border-os-cyan" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-card/50", themeIcons[colorTheme])}>
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </div>
          
          {/* Status Indicator */}
          <div className={cn("w-2 h-2 rounded-full", statusColors[status])} />
        </div>

        {/* Module Info */}
        <div>
          <h3 className="font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        {/* Hover Glow Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-os-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[220ms]" />
      </div>
    </div>
  );
};
