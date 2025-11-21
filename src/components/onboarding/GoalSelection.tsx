import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OSRingBackground } from "@/components/os/OSRingBackground";
import { CheckCircle2, Circle } from "lucide-react";

interface GoalSelectionProps {
  gender: "maxima" | "maximo";
  onContinue: (goals: string[]) => void;
}

const GOALS = [
  { id: "energy", label: "Increase Energy", icon: "⚡" },
  { id: "hair", label: "Hair Health", icon: "💇" },
  { id: "weight", label: "Weight & Composition", icon: "⚖️" },
  { id: "focus", label: "Focus & Clarity", icon: "🎯" },
  { id: "mood", label: "Mood Stability", icon: "😊" },
  { id: "muscle", label: "Muscle & Strength", icon: "💪" },
  { id: "endurance", label: "Endurance & Stamina", icon: "🏃" },
  { id: "sleep", label: "Sleep Quality", icon: "😴" },
  { id: "libido", label: "Libido & Performance", icon: "❤️" },
  { id: "stress", label: "Stress Resilience", icon: "🧘" },
  { id: "fertility", label: "Fertility Support", icon: "🌱" },
  { id: "hormones", label: "Hormonal Balance", icon: "⚖️" },
];

export const GoalSelection = ({ gender, onContinue }: GoalSelectionProps) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goalId)) {
        return prev.filter((id) => id !== goalId);
      }
      if (prev.length < 3) {
        return [...prev, goalId];
      }
      return prev;
    });
  };

  const canContinue = selectedGoals.length > 0 && selectedGoals.length <= 3;
  const genderColor = gender === "maxima" ? "maxima" : "maximo";

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12">
      <OSRingBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up-reveal">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pick Your Goals
            </h2>
            <p className="text-xl text-muted-foreground">
              Select 1-3 priority areas to optimize. Your OS will adapt.
            </p>
            <div className="text-sm text-muted-foreground">
              {selectedGoals.length}/3 selected
            </div>
          </div>

          {/* Goal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GOALS.map((goal, index) => {
              const isSelected = selectedGoals.includes(goal.id);
              const isDisabled = !isSelected && selectedGoals.length >= 3;

              return (
                <button
                  key={goal.id}
                  onClick={() => !isDisabled && toggleGoal(goal.id)}
                  disabled={isDisabled}
                  className={`p-6 rounded-2xl border-2 transition-all duration-[200ms] text-center space-y-3 animate-card-snap ${
                    isSelected
                      ? `border-${genderColor} bg-${genderColor}/10 shadow-[0_0_24px_hsl(var(--${genderColor})/0.3)]`
                      : isDisabled
                      ? "border-border/30 bg-background/20 opacity-40 cursor-not-allowed"
                      : "border-border/50 bg-background/40 hover:border-primary/40 hover:scale-105 cursor-pointer"
                  }`}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-2">{goal.icon}</div>

                  {/* Label */}
                  <div className="text-sm font-semibold">{goal.label}</div>

                  {/* Checkbox indicator */}
                  <div className="flex justify-center">
                    {isSelected ? (
                      <CheckCircle2 className={`w-5 h-5 text-${genderColor}`} />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={() => onContinue(selectedGoals)}
              disabled={!canContinue}
              className={`min-w-64 bg-gradient-to-r ${
                gender === "maxima"
                  ? "from-maxima to-maxima-light"
                  : "from-maximo to-maximo-light"
              } hover:opacity-90 transition-all duration-[280ms] disabled:opacity-40`}
            >
              Continue to Protocol Setup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
