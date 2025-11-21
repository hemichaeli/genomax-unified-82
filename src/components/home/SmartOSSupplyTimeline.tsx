import { Package, CheckCircle2, AlertCircle } from "lucide-react";
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

        {/* Timeline Container */}
        <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-os-cyan via-primary to-os-cyan opacity-30" />
            
            {/* Timeline events */}
            <div className="relative flex justify-between items-start">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center space-y-3 relative"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Event marker */}
                  <div 
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-[280ms]",
                      "border-2 backdrop-blur",
                      event.type === "start" && "bg-os-cyan/20 border-os-cyan animate-os-breathing",
                      event.type === "refill" && "bg-primary/20 border-primary hover:scale-110",
                      event.type === "alert" && "bg-os-warning/20 border-os-warning animate-supply-pulse",
                      event.type === "complete" && "bg-os-success/20 border-os-success"
                    )}
                  >
                    {event.type === "start" && <Package className="w-6 h-6 text-os-cyan" />}
                    {event.type === "refill" && <Package className="w-6 h-6 text-primary" />}
                    {event.type === "alert" && <AlertCircle className="w-6 h-6 text-os-warning" />}
                    {event.type === "complete" && <CheckCircle2 className="w-6 h-6 text-os-success" />}
                  </div>

                  {/* Day label */}
                  <div className="text-center space-y-1">
                    <p className="text-2xl font-bold">Day {event.day}</p>
                    <p className="text-sm text-muted-foreground max-w-[120px]">
                      {event.label}
                    </p>
                    {event.module && (
                      <p className="text-xs text-os-cyan font-medium">
                        {event.module}
                      </p>
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
              className="bg-os-cyan hover:bg-os-cyan/90 text-background font-medium"
            >
              Activate Smart Supply
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
