import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Pill, AlertTriangle } from "lucide-react";

export const SupplementGraveyardSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(354 100% 62% / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        {/* Messy Cabinet Visual */}
        <div 
          className="relative rounded-3xl p-12 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(222 17% 11% / 0.8) 0%, hsl(225 19% 6% / 0.9) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid hsl(var(--border))",
          }}
        >
          {/* Scattered pill bottles */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4 opacity-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-16 bg-muted/20 rounded-lg flex items-center justify-center"
                style={{
                  transform: `rotate(${(i % 3) * 5 - 5}deg)`,
                  opacity: 0.3 + (i % 4) * 0.1,
                }}
              >
                <Pill className="w-6 h-6 text-muted-foreground/40" />
              </div>
            ))}
          </div>

          {/* Warning badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm border border-os-error/30 rounded-2xl px-8 py-6 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-os-error" />
              <span className="text-3xl md:text-4xl font-bold text-os-error">$600/year</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Most people waste this much on supplements they don't need
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button
            size="lg"
            onClick={() => navigate('/assessment')}
            className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-os-cyan hover:opacity-90 transition-all duration-[280ms]"
          >
            Fix My Protocol
          </Button>
        </div>
      </div>
    </section>
  );
};
