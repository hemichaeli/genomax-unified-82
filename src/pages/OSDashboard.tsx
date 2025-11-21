import { useState } from "react";
import { OSRingBackground } from "@/components/os/OSRingBackground";
import { OSStabilityWidget } from "@/components/dashboard/OSStabilityWidget";
import { BiomarkerSummaryPanel } from "@/components/dashboard/BiomarkerSummaryPanel";
import { SmartOSSupply } from "@/components/dashboard/SmartOSSupply";
import { OSDiagnosticMatrix } from "@/components/dashboard/OSDiagnosticMatrix";
import { BiomarkerSimulator } from "@/components/dashboard/BiomarkerSimulator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

const OSDashboard = () => {
  const [gender] = useState<"maxima" | "maximo">("maximo");
  const [showMatrix, setShowMatrix] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  
  // Mock data
  const osStability = 82;
  
  const topBiomarkers = [
    { name: "Ferritin", value: 85, unit: "ng/mL", zone: "optimal" as const, trend: "up" as const, refRange: "30-150" },
    { name: "Vitamin D", value: 45, unit: "ng/mL", zone: "optimal" as const, trend: "up" as const, refRange: "30-100" },
    { name: "Omega-3 Index", value: 6.5, unit: "%", zone: "optimal" as const, trend: "stable" as const, refRange: ">8%" },
    { name: "hsCRP", value: 2.1, unit: "mg/L", zone: "suboptimal" as const, trend: "down" as const, refRange: "<1.0" },
  ];

  const supplements = [
    { name: "Iron", daysRemaining: 32, icon: "💊" },
    { name: "Omega-3", daysRemaining: 58, icon: "🐟" },
    { name: "Vitamin D", daysRemaining: 46, icon: "☀️" },
  ];

  const matrixBiomarkers = [
    { name: "Ferritin", system: "Energy", value: 85, unit: "ng/mL", zone: "optimal" as const, trend: "up" as const, score: 85 },
    { name: "Vitamin D", system: "Hormonal", value: 45, unit: "ng/mL", zone: "optimal" as const, trend: "up" as const, score: 80 },
    { name: "Omega-3", system: "Inflammatory", value: 6.5, unit: "%", zone: "optimal" as const, trend: "stable" as const, score: 78 },
    { name: "hsCRP", system: "Inflammatory", value: 2.1, unit: "mg/L", zone: "suboptimal" as const, trend: "down" as const, score: 65 },
    { name: "HbA1c", system: "Metabolic", value: 5.4, unit: "%", zone: "optimal" as const, trend: "stable" as const, score: 88 },
    { name: "Testosterone", system: "Hormonal", value: 650, unit: "ng/dL", zone: "optimal" as const, trend: "up" as const, score: 92 },
    { name: "TSH", system: "Hormonal", value: 2.1, unit: "mIU/L", zone: "optimal" as const, trend: "stable" as const, score: 85 },
    { name: "Fasting Glucose", system: "Metabolic", value: 92, unit: "mg/dL", zone: "optimal" as const, trend: "stable" as const, score: 90 },
  ];

  const todayModules = [
    { id: 1, name: "Iron Module", purpose: "Energy & oxygen transport", dose: "2 capsules", completed: true },
    { id: 2, name: "Omega-3 Module", purpose: "Inflammation control", dose: "1 softgel", completed: true },
    { id: 3, name: "Vitamin D Module", purpose: "Hormone support", dose: "1 capsule", completed: false },
    { id: 4, name: "Magnesium Module", purpose: "Sleep & recovery", dose: "2 capsules", completed: false },
  ];

  const completedCount = todayModules.filter(m => m.completed).length;
  const totalCount = todayModules.length;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen relative">
      <OSRingBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-up-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
            Biological OS v2.0
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            OS Command Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Your central biological optimization dashboard
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <OSStabilityWidget score={osStability} gender={gender} />
            
            {/* OS Version */}
            <Card className="p-6 bg-card/50 backdrop-blur text-center space-y-2">
              <div className="text-sm text-muted-foreground">Current OS Version</div>
              <div className="text-2xl font-bold">Biological OS v2.0</div>
              <div className="text-xs text-muted-foreground">Last updated: 3 days ago</div>
              <div className="w-16 h-1 bg-gradient-to-r from-maximo to-maximo-light mx-auto rounded-full animate-os-breathing" />
            </Card>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Protocol */}
            <Card className="p-6 bg-card/50 backdrop-blur space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Today's Protocol</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-[#FF2A2A]">MAX</span>ync² Execution Layer
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{completedCount}/{totalCount}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-maximo to-maximo-light transition-all duration-[400ms]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Module List */}
              <div className="space-y-3">
                {todayModules.map((module, index) => (
                  <button
                    key={module.id}
                    className={`w-full p-4 rounded-2xl border transition-all duration-[150ms] text-left
                      ${module.completed 
                        ? "bg-primary/5 border-primary/30" 
                        : "bg-background/40 border-border/50 hover:border-primary/30"
                      } animate-card-snap`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-[120ms]
                        ${module.completed ? "bg-primary" : "bg-border/50"}`}
                      >
                        {module.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                        ) : (
                          <Circle className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-semibold">{module.name}</div>
                        <div className="text-sm text-muted-foreground">{module.purpose}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-medium">{module.dose}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <BiomarkerSummaryPanel biomarkers={topBiomarkers} gender={gender} />
          </div>
        </div>

        {/* Smart OS Supply */}
        <SmartOSSupply supplements={supplements} />

        {/* Advanced Views Toggle */}
        <div className="flex gap-4 justify-center">
          <Button
            variant={showMatrix ? "default" : "outline"}
            onClick={() => setShowMatrix(!showMatrix)}
            className="transition-all duration-[280ms]"
          >
            {showMatrix ? "Hide" : "Show"} Diagnostic Matrix
          </Button>
          <Button
            variant={showSimulator ? "default" : "outline"}
            onClick={() => setShowSimulator(!showSimulator)}
            className="transition-all duration-[280ms]"
          >
            {showSimulator ? "Hide" : "Show"} Biomarker Simulator
          </Button>
        </div>

        {/* Conditional Advanced Views */}
        {showMatrix && (
          <div className="animate-fade-in">
            <OSDiagnosticMatrix biomarkers={matrixBiomarkers} gender={gender} />
          </div>
        )}

        {showSimulator && (
          <div className="animate-fade-in">
            <BiomarkerSimulator gender={gender} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OSDashboard;
