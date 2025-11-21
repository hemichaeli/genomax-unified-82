import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";
import { AssessmentProgress } from "@/components/assessment/AssessmentProgress";
import { MultiSelectCard } from "@/components/assessment/MultiSelectCard";
import { SingleSelectCard } from "@/components/assessment/SingleSelectCard";

const HEALTH_GOALS = [
  "Weight & body composition",
  "Hair health & hair loss",
  "Focus & concentration",
  "Muscle mass & strength",
  "Endurance & stamina",
  "Anxiety & stress resilience",
  "Mood & depression",
  "Sleep quality",
  "Fertility",
  "Sexual performance & libido",
  "Energy & fatigue",
  "Skin, hair & appearance",
  "Long-term health & prevention",
];

const CONCERN_CATEGORIES = [
  { id: "physical", label: "Physical & energy" },
  { id: "mental", label: "Mental & emotional" },
  { id: "sleep", label: "Sleep" },
  { id: "sexual", label: "Sexual & reproductive" },
  { id: "digestion", label: "Digestion & gut" },
  { id: "appearance", label: "Skin / hair / appearance" },
  { id: "general", label: "General / not sure" },
];

const SYMPTOMS = [
  "Low morning energy",
  "Afternoon crashes",
  "Brain fog",
  "Low motivation",
  "Mood instability",
  "Anxiety spikes",
  "Irritability",
  "Low resilience to stress",
  "Bloating or digestive discomfort",
  "Cold hands/feet",
  "Slow wound healing",
  "Hair thinning / shedding",
  "Poor recovery after workouts",
  "Difficulty falling asleep",
  "Waking up at night",
  "Low libido",
  "Skin issues (acne, dryness, redness)",
];

const SLEEP_PATTERNS = [
  "<6 hours",
  "6–7 hours",
  "7+ hours",
  "Irregular sleep schedule",
  "Screen use at night",
  "Caffeine after 4 PM",
];

const ACTIVITY_LEVELS = [
  "Sedentary",
  "Light activity",
  "Train 1–3x/week",
  "Train 3–5x/week",
  "High-intensity training",
];

const DIET_PATTERNS = [
  "Mostly plant-based",
  "Balanced mixed diet",
  "High-carb / high-sugar",
  "Low-carb / keto",
  "High protein",
  "Frequent snacking",
  "Skip meals",
];

const LIFESTYLE_FACTORS = [
  "Travel often / irregular routine",
  "Work long hours",
  "Alcohol 3+ times/week",
  "High stress job",
];

const STRESS_PATTERNS = [
  "Feel 'wired but tired' at night",
  "Wake up tired",
  "Difficulty calming down",
  "Mood dips in afternoon",
  "Overthinking",
  "Sudden anxiety spikes",
  "Difficulty feeling motivated",
  "Low emotional resilience",
  "Feel overwhelmed easily",
];

const MALE_QUESTIONS = [
  "Low morning energy",
  "Strength declining",
  "Reduced training performance",
  "Lower libido compared to past",
  "Hairline changes or thinning",
  "Abdominal fat increase",
  "Mood irritability",
];

const CYCLE_REGULARITY = [
  "Regular",
  "Irregular",
  "No cycle (Pill/IUD/other)",
];

const CYCLE_SYMPTOMS = [
  "PMS severity",
  "Flow changes",
  "Mood changes around cycle",
  "Bloating around cycle",
  "Sleep issues around cycle",
  "Fatigue around cycle",
  "Skin changes around cycle",
  "Cravings around cycle",
  "Stress sensitivity around cycle",
];

const FAMILY_HISTORY = [
  "Thyroid issues",
  "Iron deficiency",
  "Mood disorders",
  "Diabetes",
  "Heart disease",
  "Autoimmune issues",
  "None of the above",
];

const CURRENT_SUPPLEMENTS = [
  "Multivitamin",
  "Omega-3",
  "Vitamin D",
  "Magnesium",
  "Iron",
  "Zinc",
  "Creatine",
  "Ashwagandha",
  "Probiotics",
  "Pre-workout",
  "Hair loss supplements",
  "Sleep aids",
  "Other",
];

const ERECTION_FREQUENCY = [
  "Daily",
  "4–5 times/week",
  "2–3 times/week",
  "Rarely",
];

const Assessment = () => {
  const { variant } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 9;
  
  const [formData, setFormData] = useState({
    gender: "",
    osType: "",
    goals: [] as string[],
    concernCategory: "",
    symptoms: [] as string[],
    sleepPatterns: [] as string[],
    activityLevel: [] as string[],
    dietPatterns: [] as string[],
    lifestyleFactors: [] as string[],
    stressPatterns: [] as string[],
    maleSymptoms: [] as string[],
    erectionFrequency: "",
    cycleRegularity: "",
    cycleSymptoms: [] as string[],
    familyHistory: [] as string[],
    currentSupplements: [] as string[],
  });

  useEffect(() => {
    let detectedGender = "";
    let osType = "";
    
    if (variant === "maximo" || searchParams.get("gender") === "male") {
      detectedGender = "male";
      osType = "MAXimo²";
    } else if (variant === "maxima" || searchParams.get("gender") === "female") {
      detectedGender = "female";
      osType = "MAXima²";
    }
    
    if (detectedGender) {
      setFormData(prev => ({ ...prev, gender: detectedGender, osType }));
    }
  }, [variant, searchParams]);

  const handleNext = () => {
    // Validation
    if (step === 1 && !formData.gender) {
      toast.error("Please select your protocol");
      return;
    }
    if (step === 2 && formData.goals.length === 0) {
      toast.error("Please select at least one goal");
      return;
    }
    if (step === 3 && !formData.concernCategory) {
      toast.error("Please select what bothers you most");
      return;
    }
    if (step === 4 && formData.symptoms.length === 0) {
      toast.error("Please select at least one symptom");
      return;
    }
    if (step === 5 && formData.sleepPatterns.length === 0 && formData.activityLevel.length === 0 && formData.dietPatterns.length === 0) {
      toast.error("Please select at least one lifestyle pattern");
      return;
    }
    if (step === 6 && formData.stressPatterns.length === 0) {
      toast.error("Please select at least one stress pattern");
      return;
    }
    if (step === 7) {
      if (formData.gender === "male" && formData.maleSymptoms.length === 0) {
        toast.error("Please select at least one symptom");
        return;
      }
      if (formData.gender === "female" && !formData.cycleRegularity) {
        toast.error("Please select your cycle regularity");
        return;
      }
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Assessment data:", formData);
    toast.success("Assessment complete! Generating your OS protocol...");
    navigate('/results', { state: { assessmentData: formData } });
  };

  const toggleArrayItem = (field: keyof typeof formData, value: string) => {
    setFormData(prev => {
      const array = prev[field] as string[];
      const newArray = array.includes(value)
        ? array.filter(item => item !== value)
        : [...array, value];
      return { ...prev, [field]: newArray };
    });
  };

  if (step === 1) {
    return (
      <div className="min-h-screen">
        <CinematicOSHero>
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge className="text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20">
                90 seconds • No typing required
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Choose Your Protocol
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Select your gender-optimized biological OS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <Card
                className={`p-8 cursor-pointer transition-all hover:scale-[1.02] ${
                  formData.gender === "male" ? "border-accent bg-accent/5" : ""
                }`}
                onClick={() => setFormData(prev => ({ ...prev, gender: "male", osType: "MAXimo²" }))}
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    <span className="text-accent">MAX</span>imo²
                  </h2>
                  <p className="text-muted-foreground">Male-optimized protocol</p>
                </div>
              </Card>

              <Card
                className={`p-8 cursor-pointer transition-all hover:scale-[1.02] ${
                  formData.gender === "female" ? "border-accent bg-accent/5" : ""
                }`}
                onClick={() => setFormData(prev => ({ ...prev, gender: "female", osType: "MAXima²" }))}
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    <span className="text-accent">MAX</span>ima²
                  </h2>
                  <p className="text-muted-foreground">Female-optimized protocol</p>
                </div>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="mt-8"
              onClick={handleNext}
              disabled={!formData.gender}
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CinematicOSHero>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <CinematicOSHero>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <AssessmentProgress currentStep={step} totalSteps={totalSteps} />

          {/* Screen 2: Main Goals */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Your Main Goals</h2>
                <p className="text-lg text-muted-foreground">
                  Choose 3–4 goals that matter most to you
                </p>
                <p className="text-sm text-accent">
                  {formData.goals.length} of 4 selected
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HEALTH_GOALS.map(goal => (
                  <MultiSelectCard
                    key={goal}
                    id={goal}
                    label={goal}
                    selected={formData.goals.includes(goal)}
                    onToggle={(id) => toggleArrayItem("goals", id)}
                    maxReached={formData.goals.length >= 4}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Screen 3: Primary Concern */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">What Bothers You MOST Right Now?</h2>
                <p className="text-lg text-muted-foreground">
                  Select one primary concern
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONCERN_CATEGORIES.map(category => (
                  <SingleSelectCard
                    key={category.id}
                    id={category.id}
                    label={category.label}
                    selected={formData.concernCategory === category.id}
                    onSelect={(id) => setFormData(prev => ({ ...prev, concernCategory: id }))}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Screen 4: Symptom Profile */}
          {step === 4 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Symptom Profile</h2>
                <p className="text-lg text-muted-foreground">
                  Choose all that apply
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SYMPTOMS.map(symptom => (
                  <MultiSelectCard
                    key={symptom}
                    id={symptom}
                    label={symptom}
                    selected={formData.symptoms.includes(symptom)}
                    onToggle={(id) => toggleArrayItem("symptoms", id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Screen 5: Lifestyle Patterns */}
          {step === 5 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Lifestyle Patterns</h2>
                <p className="text-lg text-muted-foreground">
                  Choose all that apply
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Sleep</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SLEEP_PATTERNS.map(pattern => (
                      <MultiSelectCard
                        key={pattern}
                        id={pattern}
                        label={pattern}
                        selected={formData.sleepPatterns.includes(pattern)}
                        onToggle={(id) => toggleArrayItem("sleepPatterns", id)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Activity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ACTIVITY_LEVELS.map(level => (
                      <MultiSelectCard
                        key={level}
                        id={level}
                        label={level}
                        selected={formData.activityLevel.includes(level)}
                        onToggle={(id) => toggleArrayItem("activityLevel", id)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Diet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DIET_PATTERNS.map(diet => (
                      <MultiSelectCard
                        key={diet}
                        id={diet}
                        label={diet}
                        selected={formData.dietPatterns.includes(diet)}
                        onToggle={(id) => toggleArrayItem("dietPatterns", id)}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Other Factors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {LIFESTYLE_FACTORS.map(factor => (
                      <MultiSelectCard
                        key={factor}
                        id={factor}
                        label={factor}
                        selected={formData.lifestyleFactors.includes(factor)}
                        onToggle={(id) => toggleArrayItem("lifestyleFactors", id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Screen 6: Stress & Emotional Patterns */}
          {step === 6 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Stress & Emotional Patterns</h2>
                <p className="text-lg text-muted-foreground">
                  Choose all that apply
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STRESS_PATTERNS.map(pattern => (
                  <MultiSelectCard
                    key={pattern}
                    id={pattern}
                    label={pattern}
                    selected={formData.stressPatterns.includes(pattern)}
                    onToggle={(id) => toggleArrayItem("stressPatterns", id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Screen 7: Gender-Specific Questions */}
          {step === 7 && formData.gender === "male" && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-accent">MAX</span>imo² Specific
                </h2>
                <p className="text-lg text-muted-foreground">
                  Male-specific health markers
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MALE_QUESTIONS.map(question => (
                    <MultiSelectCard
                      key={question}
                      id={question}
                      label={question}
                      selected={formData.maleSymptoms.includes(question)}
                      onToggle={(id) => toggleArrayItem("maleSymptoms", id)}
                    />
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Morning erections frequency</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {ERECTION_FREQUENCY.map(freq => (
                      <SingleSelectCard
                        key={freq}
                        id={freq}
                        label={freq}
                        selected={formData.erectionFrequency === freq}
                        onSelect={(id) => setFormData(prev => ({ ...prev, erectionFrequency: id }))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 7 && formData.gender === "female" && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-accent">MAX</span>ima² Specific
                </h2>
                <p className="text-lg text-muted-foreground">
                  Female-specific health markers
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cycle regularity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {CYCLE_REGULARITY.map(regularity => (
                      <SingleSelectCard
                        key={regularity}
                        id={regularity}
                        label={regularity}
                        selected={formData.cycleRegularity === regularity}
                        onSelect={(id) => setFormData(prev => ({ ...prev, cycleRegularity: id }))}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Cycle-related symptoms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CYCLE_SYMPTOMS.map(symptom => (
                      <MultiSelectCard
                        key={symptom}
                        id={symptom}
                        label={symptom}
                        selected={formData.cycleSymptoms.includes(symptom)}
                        onToggle={(id) => toggleArrayItem("cycleSymptoms", id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Screen 8: Family History */}
          {step === 8 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Family History</h2>
                <p className="text-lg text-muted-foreground">
                  Optional but helps personalize your protocol
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FAMILY_HISTORY.map(condition => (
                  <MultiSelectCard
                    key={condition}
                    id={condition}
                    label={condition}
                    selected={formData.familyHistory.includes(condition)}
                    onToggle={(id) => toggleArrayItem("familyHistory", id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Screen 9: Current Supplements */}
          {step === 9 && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Current Supplements</h2>
                <p className="text-lg text-muted-foreground">
                  Optional - helps avoid redundancy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CURRENT_SUPPLEMENTS.map(supplement => (
                  <MultiSelectCard
                    key={supplement}
                    id={supplement}
                    label={supplement}
                    selected={formData.currentSupplements.includes(supplement)}
                    onToggle={(id) => toggleArrayItem("currentSupplements", id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              size="lg"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </Button>
            
            <Button 
              onClick={handleNext} 
              size="lg"
              className="bg-os-cyan hover:bg-os-cyan/90 text-background font-semibold min-w-[160px]"
            >
              {step === totalSteps ? (
                <>
                  Complete Assessment
                  <CheckCircle2 className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
          </div>
        </div>
      </CinematicOSHero>
    </div>
  );
};

export default Assessment;
