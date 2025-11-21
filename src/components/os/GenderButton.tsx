import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GenderButtonProps extends ButtonProps {
  gender: "maxima" | "maximo";
}

export const GenderButton = ({ gender, className, children, ...props }: GenderButtonProps) => {
  const isMaxima = gender === "maxima";
  
  return (
    <Button
      className={cn(
        "transition-all duration-300 hover:scale-105 font-medium",
        isMaxima 
          ? "bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 text-white" 
          : "bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 text-white",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
