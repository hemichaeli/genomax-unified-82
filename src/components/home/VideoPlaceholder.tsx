import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
  thumbnail?: string;
  className?: string;
}

export const VideoPlaceholder = ({ 
  title, 
  duration = "0:30", 
  thumbnail,
  className = "" 
}: VideoPlaceholderProps) => {
  return (
    <div
      className={`relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-[280ms] hover:scale-[1.02] ${className}`}
      style={{
        background: thumbnail 
          ? `url(${thumbnail}) center/cover`
          : "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)",
        border: "1px solid hsl(var(--border))",
        aspectRatio: "16/9",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm transition-all duration-[280ms] group-hover:bg-background/40" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-[280ms] group-hover:scale-110 group-hover:bg-primary"
          style={{
            boxShadow: "0 0 30px hsl(var(--primary) / 0.4)",
          }}
        >
          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{duration}</p>
      </div>

      {/* Duration badge */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
        {duration}
      </div>
    </div>
  );
};
