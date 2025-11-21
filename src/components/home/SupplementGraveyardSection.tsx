import { cn } from "@/lib/utils";

interface SupplementBottle {
  name: string;
  percentUsed: string;
  opacity: number;
}

const bottles: SupplementBottle[] = [
  { name: "Generic Multi", percentUsed: "45%", opacity: 0.3 },
  { name: "Random B12", percentUsed: "62%", opacity: 0.35 },
  { name: "One-size Omega", percentUsed: "28%", opacity: 0.25 },
  { name: "Mystery Stack", percentUsed: "71%", opacity: 0.4 },
];

export const SupplementGraveyardSection = () => {
  return (
    <section className="py-24 px-6 relative bg-card/20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your cabinet of forgotten bottles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            People waste hundreds yearly on random supplement stacks. You've tried "personalized supplements" — but still have half-full bottles you never finished.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-os-error/10 border border-os-error/20 rounded-lg backdrop-blur mt-4">
            <span className="text-2xl font-bold text-os-error">$300-800</span>
            <span className="text-muted-foreground">wasted per year on average</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          {bottles.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "p-6 rounded-2xl transition-all duration-[280ms] hover:opacity-70",
                "bg-gradient-to-b from-card/50 to-card/20",
                "border border-border/30"
              )}
              style={{
                opacity: item.opacity,
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div className="space-y-3">
                <div className="h-24 bg-muted/20 rounded-xl relative overflow-hidden">
                  {/* Pill bottle visual */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-muted/40 transition-all duration-[650ms]"
                    style={{ height: item.percentUsed }}
                  />
                </div>
                <p className="font-medium text-muted-foreground">{item.name}</p>
                <p className="text-sm text-os-error">{item.percentUsed} used</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <p className="text-lg text-os-cyan font-medium">
            Smart OS Supply eliminates waste → perfectly timed refills based on YOUR protocol
          </p>
        </div>
      </div>
    </section>
  );
};
