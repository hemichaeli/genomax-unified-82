import { Card } from "@/components/ui/card";
import { OSRingBackground } from "@/components/os/OSRingBackground";

interface GenderSelectionProps {
  onSelect: (gender: "maxima" | "maximo") => void;
}

export const GenderSelection = ({ onSelect }: GenderSelectionProps) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <OSRingBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-up-reveal">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Select Your Biological OS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gender-specific optimization pathways designed for your unique physiology.
            </p>
          </div>

          {/* Gender Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* MAXima² */}
            <Card
              onClick={() => onSelect("maxima")}
              className="group relative p-10 space-y-6 cursor-pointer transition-all duration-[280ms] hover:translate-y-[-8px] hover:shadow-[0_0_48px_hsl(330_100%_68%/0.5)] animate-card-snap bg-card/50 backdrop-blur border-2 border-maxima/30 hover:border-maxima/60"
              style={{ animationDelay: "0ms" }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-maxima/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]" />
              
              <div className="relative space-y-6">
                {/* Status indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 rounded-full bg-maxima animate-os-breathing" />
                  <div className="text-xs font-semibold text-maxima">Female-Optimized</div>
                </div>

                {/* Title */}
                <h2 className="text-5xl font-bold">
                  <span className="text-[#FF2A2A] group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.6)] transition-all duration-[280ms]">MAX</span>
                  <span className="bg-gradient-to-r from-maxima to-maxima-light bg-clip-text text-transparent">
                    ima²
                  </span>
                </h2>

                {/* Description */}
                <p className="text-lg text-muted-foreground">
                  Optimized for female hormone cycles, iron metabolism, thyroid function, and reproductive health.
                </p>

                {/* Features */}
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maxima" />
                    <span>Cycle-aware optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maxima" />
                    <span>Iron & ferritin protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maxima" />
                    <span>Thyroid support systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maxima" />
                    <span>Hormonal balance tracking</span>
                  </li>
                </ul>

                {/* Mini OS ring */}
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-maxima/30 animate-os-ring-rotate" />
                  <div className="absolute inset-2 rounded-full border-2 border-maxima/60 animate-os-ring-rotate" style={{ animationDirection: "reverse" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-maxima animate-os-glow-pulse" />
                  </div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maxima to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]" />
            </Card>

            {/* MAXimo² */}
            <Card
              onClick={() => onSelect("maximo")}
              className="group relative p-10 space-y-6 cursor-pointer transition-all duration-[280ms] hover:translate-y-[-8px] hover:shadow-[0_0_48px_hsl(186_100%_64%/0.5)] animate-card-snap bg-card/50 backdrop-blur border-2 border-maximo/30 hover:border-maximo/60"
              style={{ animationDelay: "100ms" }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-maximo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]" />
              
              <div className="relative space-y-6">
                {/* Status indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-3 h-3 rounded-full bg-maximo animate-os-breathing" />
                  <div className="text-xs font-semibold text-maximo">Male-Optimized</div>
                </div>

                {/* Title */}
                <h2 className="text-5xl font-bold">
                  <span className="text-[#FF2A2A] group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.6)] transition-all duration-[280ms]">MAX</span>
                  <span className="bg-gradient-to-r from-maximo to-maximo-light bg-clip-text text-transparent">
                    imo²
                  </span>
                </h2>

                {/* Description */}
                <p className="text-lg text-muted-foreground">
                  Optimized for testosterone, strength, performance metrics, and male-specific metabolic pathways.
                </p>

                {/* Features */}
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maximo" />
                    <span>Testosterone optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maximo" />
                    <span>Performance enhancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maximo" />
                    <span>Strength & recovery systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-maximo" />
                    <span>Energy & endurance protocols</span>
                  </li>
                </ul>

                {/* Mini OS ring */}
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-maximo/30 animate-os-ring-rotate" />
                  <div className="absolute inset-2 rounded-full border-2 border-maximo/60 animate-os-ring-rotate" style={{ animationDirection: "reverse" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-maximo animate-os-glow-pulse" />
                  </div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maximo to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
