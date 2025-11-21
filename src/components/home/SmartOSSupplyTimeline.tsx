import { Package, CheckCircle2, AlertCircle, Pill } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  day: number;
  label: string;
  type: "start" | "refill" | "alert" | "complete";
  module?: string;
}

const timelineEvents: TimelineEvent[] = [
  { day: 0, label: "Protocol Start", type: "start" },
  { day: 30, label: "First month complete", type: "complete" },
  { day: 32, label: "Iron Module Refill", type: "refill", module: "Iron" },
  { day: 45, label: "Supply Check", type: "alert" },
  { day: 58, label: "Omega-3 Refill", type: "refill", module: "Omega-3" },
  { day: 60, label: "2-Month Milestone", type: "complete" },
];

export const SmartOSSupplyTimeline = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Smart OS Supply
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No more wasted supplements. Perfectly timed refills synchronized with your protocol.
          </p>
        </div>

        {/* Capsule Icons Row - Staggered Animation */}
        <div className="flex justify-center gap-4 mb-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(189 100% 60% / 0.2) 0%, hsl(323 100% 42% / 0.1) 100%)",
                border: "1px solid hsl(189 100% 60% / 0.3)",
                animation: `supply-pulse 4s ease-in-out infinite`,
                animationDelay: `${i * 200}ms`,
              }}
            >
              <Pill className="w-8 h-8 text-os-cyan" />
            </div>
          ))}
        </div>

        {/* Timeline Container */}
        <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
          <div className="relative">
            {/* Timeline line with gradient glow */}
            <div 
              className="absolute top-8 left-0 right-0 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(189 100% 60% / 0.3) 0%, hsl(213 100% 55% / 0.5) 50%, hsl(189 100% 60% / 0.3) 100%)",
                boxShadow: "0 0 12px hsl(189 100% 60% / 0.4)",
              }}
            />
            
            {/* Timeline events */}
            <div className="relative flex justify-between items-start">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center space-y-3 relative animate-fade-up-reveal"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  {/* Event marker with enhanced glow */}
                  <div 
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-[280ms] relative group",
                      "border-2 backdrop-blur cursor-pointer",
                      event.type === "start" && "bg-os-cyan/20 border-os-cyan",
                      event.type === "refill" && "bg-primary/20 border-primary hover:scale-110",
                      event.type === "alert" && "bg-os-warning/20 border-os-warning",
                      event.type === "complete" && "bg-os-success/20 border-os-success"
                    )}
                    style={{
                      boxShadow: event.type === "start" 
                        ? "0 0 24px hsl(189 100% 60% / 0.6)"
                        : event.type === "refill"
                        ? "0 0 16px hsl(213 100% 55% / 0.4)"
                        : undefined,
                    }}
                  >
                    {event.type === "start" && <Package className="w-6 h-6 text-os-cyan" />}
                    {event.type === "refill" && <Pill className="w-6 h-6 text-primary" />}
                    {event.type === "alert" && <AlertCircle className="w-6 h-6 text-os-warning" />}
                    {event.type === "complete" && <CheckCircle2 className="w-6 h-6 text-os-success" />}
                    
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-current opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500" />
                  </div>

                  {/* Day label */}
                  <div className="text-center space-y-1">
                    <p className="text-xl font-bold font-mono text-os-cyan">Day {event.day}</p>
                    <p className="text-sm text-muted-foreground max-w-[120px]">
                      {event.label}
                    </p>
                    {event.module && (
                      <div className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <p className="text-xs text-primary font-medium">
                          {event.module}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supply Promise */}
          <div className="mt-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-os-success/10 border border-os-success/20 rounded-lg backdrop-blur">
              <CheckCircle2 className="w-5 h-5 text-os-success" />
              <span className="font-medium">Perfect sync — Always perfectly timed</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-os-cyan hover:bg-os-cyan/90 text-background font-medium transition-all duration-140 hover:scale-103"
            >
              Activate Smart Supply
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
