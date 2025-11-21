import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OSRingBackground } from "@/components/os/OSRingBackground";
import { OSBootScreen } from "@/components/onboarding/OSBootScreen";
import { GenderSelection } from "@/components/onboarding/GenderSelection";
import { GoalSelection } from "@/components/onboarding/GoalSelection";
import { Upload, ClipboardList } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"boot" | "gender" | "goals" | "cta" | "loading">("boot");
  const [gender, setGender] = useState<"maxima" | "maximo" | null>(null);
  const [goals, setGoals] = useState<string[]>([]);

  const handleGenderSelect = (selectedGender: "maxima" | "maximo") => {
    setGender(selectedGender);
    setStep("goals");
  };

  const handleGoalsComplete = (selectedGoals: string[]) => {
    setGoals(selectedGoals);
    setStep("cta");
  };

  const handleInputSelection = (type: "upload" | "assessment") => {
    setStep("loading");
    setTimeout(() => {
      if (type === "upload") {
        navigate("/upload");
      } else {
        navigate(`/assessment?gender=${gender}`);
      }
    }, 2000);
  };

  // Step: OS Boot
  if (step === "boot") {
    return <OSBootScreen onComplete={() => setStep("gender")} />;
  }

  // Step: Gender Selection
  if (step === "gender") {
    return <GenderSelection onSelect={handleGenderSelect} />;
  }

  // Step: Goals
  if (step === "goals" && gender) {
    return <GoalSelection gender={gender} onContinue={handleGoalsComplete} />;
  }

  // Step: CTA Selection
  if (step === "cta" && gender) {
    const genderName = gender === "maxima" ? "MAXima²" : "MAXimo²";

    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <OSRingBackground />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-up-reveal">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-4">
                Your {genderName} OS is Ready
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Let's Build Your Biological OS
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose how you'd like to create your personalized protocol
              </p>
            </div>

            {/* Input Method Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Blood Work */}
              <Card 
                className="group p-10 space-y-6 cursor-pointer transition-all duration-[280ms] hover:translate-y-[-6px] hover:shadow-[0_0_48px_hsl(var(--primary)/0.4)] bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary/60 animate-card-snap"
                onClick={() => handleInputSelection("upload")}
                style={{ animationDelay: "0ms" }}
              >
                <div className="relative space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.4)] transition-all duration-[280ms]">
                    <Upload className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">Upload Blood Work</h3>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                        Recommended
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Get the most accurate protocol by uploading your recent lab results. We analyze your biomarkers to build your Biological OS v2.0.
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Precision biomarker analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Protocol v2.0 (advanced)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Real diagnostic OS sweep</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-border/50">
                    <div className="text-primary font-semibold">→ Most Accurate Protocol</div>
                  </div>
                </div>
              </Card>

              {/* Start Assessment */}
              <Card 
                className="group p-10 space-y-6 cursor-pointer transition-all duration-[280ms] hover:translate-y-[-6px] hover:shadow-[0_0_32px_hsl(var(--border)/0.3)] bg-card/50 backdrop-blur border-2 border-border/40 hover:border-border/60 animate-card-snap"
                onClick={() => handleInputSelection("assessment")}
                style={{ animationDelay: "100ms" }}
              >
                <div className="relative space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-muted/20 flex items-center justify-center group-hover:shadow-[0_0_16px_hsl(var(--muted)/0.3)] transition-all duration-[280ms]">
                    <ClipboardList className="w-10 h-10 text-muted-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Start Assessment</h3>
                    <p className="text-muted-foreground">
                      Answer questions about your goals, symptoms, and lifestyle. We'll build Protocol v1.0 based on probabilities.
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      <span>5-minute questionnaire</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      <span>Protocol v1.0 (foundational)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      <span>Upgrade later with labs</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-border/50">
                    <div className="text-muted-foreground">→ No Labs Needed</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step: Loading
  if (step === "loading") {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <OSRingBackground />
        
        <div className="relative z-10 text-center space-y-8">
          {/* OS Core */}
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-os-ring-rotate" />
            <div 
              className="absolute inset-4 rounded-full border-2 border-primary/40 animate-os-ring-rotate" 
              style={{ animationDirection: "reverse", animationDuration: "12s" }} 
            />
            <div 
              className="absolute inset-8 rounded-full border-2 border-primary/60 animate-os-ring-rotate" 
              style={{ animationDuration: "8s" }} 
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary animate-os-glow-pulse" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Preparing Your Protocol<span className="animate-pulse">...</span>
            </h2>
            <p className="text-muted-foreground">
              Initializing <span className="text-[#FF2A2A]">MAX²</span> systems
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Onboarding;
