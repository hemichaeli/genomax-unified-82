import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface VideoPlaceholderProps {
  title: string;
  subtitle?: string;
  duration?: string;
  thumbnail?: string;
  videoSrc?: string;
  className?: string;
  glowColor?: "cyan" | "magenta" | "red" | "primary";
  aspectRatio?: "16/9" | "4/5";
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
}

export const VideoPlaceholder = ({ 
  title, 
  subtitle,
  duration = "0:30", 
  thumbnail,
  videoSrc,
  className = "",
  glowColor = "primary",
  aspectRatio = "16/9",
  controls = false,
  autoPlay = false,
  muted = false
}: VideoPlaceholderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const glowColors = {
    cyan: "hsl(186 100% 64%)",
    magenta: "hsl(330 100% 68%)",
    red: "#FF2D2D",
    primary: "hsl(var(--primary))"
  };

  const borderColor = glowColors[glowColor];

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video play failed", { title, videoSrc, error });
        });
      }
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Video Container */}
      <div
        className="relative group rounded-xl overflow-hidden cursor-pointer transition-all duration-500 animate-fade-in"
        style={{
          aspectRatio: aspectRatio === "16/9" ? "16/9" : "4/5",
          border: `2px solid ${borderColor}`,
          boxShadow: isHovered 
            ? `0 0 40px ${borderColor}40, 0 0 20px ${borderColor}30`
            : `0 0 25px ${borderColor}30, 0 0 12px ${borderColor}20`,
          animation: "reveal-up 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) backwards, glow-pulse 4s ease-in-out 1s 1"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVideoClick}
      >
        {/* Video or Thumbnail */}
        {videoSrc ? (
          <video
            ref={videoRef}
            data-video-id={title}
            className="w-full h-full object-cover"
            playsInline
            poster={thumbnail}
            controls={controls}
            autoPlay={autoPlay}
            muted={muted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={(error) => {
              console.error("Video error", { title, videoSrc, error });
              setIsPlaying(false);
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          </video>
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: thumbnail 
                ? `url(${thumbnail}) center/cover`
                : "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)",
            }}
          />
        )}

        {/* Overlay */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-background/60 backdrop-blur-sm transition-all duration-[280ms]"
            style={{
              background: isHovered 
                ? "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)"
                : "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)"
            }}
          />
        )}

        {/* Play button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-[280ms]"
              style={{
                background: isHovered ? borderColor : `${borderColor}E6`,
                boxShadow: `0 0 30px ${borderColor}66`,
                transform: isHovered ? "scale(1.15)" : "scale(1)"
              }}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </div>
        )}

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>

        {/* Duration badge */}
        <div 
          className="absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-sm text-xs font-medium font-mono"
          style={{
            background: `${borderColor}26`,
            border: `1px solid ${borderColor}40`,
            color: borderColor
          }}
        >
          {duration}
        </div>
      </div>
    </div>
  );
};
