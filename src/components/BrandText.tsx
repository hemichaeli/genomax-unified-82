interface BrandTextProps {
  variant: "maxima" | "maximo";
  className?: string;
}

export const BrandText = ({ variant, className = "" }: BrandTextProps) => {
  const isMaxima = variant === "maxima";
  
  return (
    <span className={className}>
      <span className="font-bold" style={{ color: '#FF2A2A', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
        MAX
      </span>
      {isMaxima ? "ima" : "imo"}
      <span className="font-bold" style={{ color: '#FF2A2A', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
        ²
      </span>
    </span>
  );
};
