import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Dna, Users, Cpu } from "lucide-react";

export const DataBuildingOSSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* OS Grid Background */}
      <div className="absolute inset-0 os-grid opacity-[0.08]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Blood Biomarkers Beat DNA
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          We analyzed 500,000+ clinical trials. Here's what actually works.
        </p>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - Mass Market Supplements Fail */}
          <div
            className="group relative rounded-3xl p-8 space-y-6 animate-card-snap hover:border-os-cyan/30 transition-all duration-[260ms]"
            style={{
              background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(220 10% 98% / 0.1)",
              boxShadow: "0 8px 32px hsl(220 10% 10% / 0.1), inset 0 1px 0 hsl(220 10% 98% / 0.05)",
              animationDelay: "0ms",
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)"
            }}
          >
            <div className="flex items-center justify-center">
              <div 
                className="w-24 h-24 rounded-2xl flex items-center justify-center relative animate-icon-pop"
                style={{
                  background: "linear-gradient(135deg, hsl(213 100% 55%) 0%, hsl(280 100% 70%) 100%)",
                  animationDelay: "120ms",
                  transition: "transform 120ms cubic-bezier(0.24,0.8,0.44,1)"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <Dna className="w-12 h-12 text-white/30" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">0%</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                DNA tests don't work
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                524,592 people in trials. Zero measurable benefit from DNA-based nutrition beyond standard assessment.
              </p>
              <p className="text-xs text-os-cyan flex items-center gap-2 pt-2">
                <span className="text-os-cyan">→</span>
                Blood markers show what's happening now
              </p>
            </div>
          </div>

          {/* Card 2 - Biomarkers + Gender Matter */}
          <div
            className="group relative rounded-3xl p-8 space-y-6 animate-card-snap hover:border-os-cyan/30 transition-all duration-[260ms]"
            style={{
              background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(220 10% 98% / 0.1)",
              boxShadow: "0 8px 32px hsl(220 10% 10% / 0.1), inset 0 1px 0 hsl(220 10% 98% / 0.05)",
              animationDelay: "100ms",
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)"
            }}
          >
            <div className="flex items-center justify-center gap-6">
              {/* Male Side */}
              <div className="flex flex-col items-center space-y-3">
                <Users className="w-10 h-10 text-maximo" strokeWidth={1.5} />
                <div className="flex flex-col gap-2">
                  <div className="w-3 h-3 rounded-full bg-maximo/60 animate-pulse" style={{ animationDelay: "0ms" }} />
                  <div className="w-3 h-3 rounded-full bg-maximo/60 animate-pulse" style={{ animationDelay: "200ms" }} />
                  <div className="w-3 h-3 rounded-full bg-maximo/60 animate-pulse" style={{ animationDelay: "400ms" }} />
                </div>
              </div>
              
              {/* Female Side */}
              <div className="flex flex-col items-center space-y-3">
                <Users className="w-10 h-10 text-maxima" strokeWidth={1.5} />
                <div className="flex flex-col gap-2">
                  <div className="w-3 h-3 rounded-full bg-maxima/60 animate-pulse" style={{ animationDelay: "0ms" }} />
                  <div className="w-3 h-3 rounded-full bg-maxima/60 animate-pulse" style={{ animationDelay: "200ms" }} />
                  <div className="w-3 h-3 rounded-full bg-maxima/60 animate-pulse" style={{ animationDelay: "400ms" }} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                Gender biology is real
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Male and female biology respond differently. Iron, hormones, metabolism-your gender dictates your protocol.
              </p>
              <p className="text-xs text-os-cyan flex items-center gap-2 pt-2">
                <span className="text-os-cyan">→</span>
                One protocol for everyone fails everyone
              </p>
            </div>
          </div>

          {/* Card 3 - Introducing a New Category */}
          <div
            className="group relative rounded-3xl p-8 space-y-6 transition-all duration-[400ms] animate-fade-in"
            style={{
              background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(220 10% 98% / 0.1)",
              boxShadow: "0 8px 32px hsl(220 10% 10% / 0.1), inset 0 1px 0 hsl(220 10% 98% / 0.05)",
              animationDelay: "300ms",
              transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)"
            }}
          >
            <div className="flex items-center justify-center relative">
              <div 
                className="w-28 h-28 rounded-full flex items-center justify-center relative animate-os-breathing"
                style={{
                  background: "conic-gradient(from 180deg at 50% 50%, hsl(var(--maximo)) 0deg, hsl(var(--maxima)) 180deg, hsl(var(--maximo)) 360deg)",
                  filter: "blur(20px)",
                  opacity: 0.3,
                }}
              />
              <div className="absolute">
                <Cpu className="w-12 h-12 text-accent" strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                A biological operating system
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Not pills-an OS. Modules, updates, sync cycles. Your protocol evolves as your biology changes.
              </p>
              <p className="text-xs text-os-cyan flex items-center gap-2 pt-2">
                <span className="text-os-cyan">→</span>
                Built like software, backed by science
              </p>
            </div>
          </div>
        </div>

        {/* High-Tech OS Scan Video Container */}
        <div className="mt-20 relative">
          <div 
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(225 65% 8% / 0.9) 0%, hsl(222 70% 3% / 0.95) 100%)",
              border: "1px solid hsl(189 100% 60% / 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35), 0 0 24px hsl(189 100% 60% / 0.15)",
            }}
          >
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder-os-scan.jpg"
            >
              <source src="/videos/os-scan-animation.mp4" type="video/mp4" />
              {/* Fallback */}
              <div className="w-full h-64 flex items-center justify-center bg-card/50">
                <Cpu className="w-16 h-16 text-os-cyan animate-os-glow-pulse" />
              </div>
            </video>
            {/* Dark overlay for high-tech feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate("/assessment")}
            className="bg-os-cyan hover:bg-os-cyan/90 text-background font-medium h-14 px-8 transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_24px_hsl(var(--os-cyan)/0.4)]"
            style={{
              boxShadow: "0 4px 16px hsl(var(--os-cyan) / 0.2)",
            }}
          >
            Build My Biological OS
          </Button>
        </div>
      </div>

      {/* Hover effect styles */}
      <style>{`
        @keyframes os-breathing {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
        
        .animate-os-breathing {
          animation: os-breathing 6s ease-in-out infinite;
        }
        
        .group:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px hsl(220 10% 10% / 0.15), 
                      0 0 32px hsl(var(--os-cyan) / 0.2),
                      inset 0 1px 0 hsl(220 10% 98% / 0.08) !important;
        }
        
        .group:hover .lucide {
          filter: drop-shadow(0 0 8px hsl(var(--os-cyan) / 0.6));
        }
      `}</style>
    </section>
  );
};
