import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Sun, 
  Moon,
  Droplet,
  Heart,
  Brain,
  Zap,
  Moon as MoonIcon,
  Shield,
  TrendingUp
} from "lucide-react";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";
import { useState } from "react";
import { OSStatusBar } from "@/components/maxync/OSStatusBar";
import { StreakTracker } from "@/components/maxync/StreakTracker";
import { ModuleCard } from "@/components/maxync/ModuleCard";
import { SmartOSSupplyPanel } from "@/components/maxync/SmartOSSupplyPanel";
import { DailyAIInsight } from "@/components/maxync/DailyAIInsight";
import { Card } from "@/components/ui/card";

const MAXync = () => {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const todayCompletion = (completedModules.length / 7) * 100;
  const currentStreak = 7;

  const toggleModule = (moduleId: string) => {
    setCompletedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const modules = [
    {
      id: "iron",
      icon: Shield,
      name: "Iron Module",
      purpose: "Supports energy and oxygen transport",
      dose: "2 capsules",
      time: "morning"
    },
    {
      id: "omega3",
      icon: Droplet,
      name: "Omega-3 Module",
      purpose: "Supports inflammation balance",
      dose: "3 softgels",
      time: "morning"
    },
    {
      id: "vitaminD",
      icon: Sun,
      name: "Vitamin D Module",
      purpose: "Supports immune and bone health",
      dose: "1 capsule",
      time: "morning"
    },
    {
      id: "hormone",
      icon: Heart,
      name: "Hormone Support Module",
      purpose: "Balances hormonal pathways",
      dose: "1 capsule",
      time: "morning"
    },
    {
      id: "stress",
      icon: Brain,
      name: "Calm Module",
      purpose: "Supports stress modulation",
      dose: "2 capsules + 5 min breathing",
      time: "evening"
    },
    {
      id: "performance",
      icon: Zap,
      name: "Performance Module",
      purpose: "Supports energy and endurance",
      dose: "1 capsule before workout",
      time: "afternoon"
    },
    {
      id: "sleep",
      icon: MoonIcon,
      name: "Sleep Reinforcement Module",
      purpose: "Supports deep sleep cycles",
      dose: "2 capsules 30 min before bed",
      time: "evening"
    }
  ];

  const weekDays = [
    { day: "Mon", completion: 85, date: "Dec 11" },
    { day: "Tue", completion: 100, date: "Dec 12" },
    { day: "Wed", completion: 70, date: "Dec 13" },
    { day: "Thu", completion: 100, date: "Dec 14" },
    { day: "Fri", completion: 90, date: "Dec 15" },
    { day: "Sat", completion: 100, date: "Dec 16" },
    { day: "Today", completion: todayCompletion, date: "Dec 17", isToday: true }
  ];

  const getCompletionColor = (completion: number) => {
    if (completion >= 70) return "hsl(186 100% 64%)";
    if (completion >= 30) return "hsl(40 100% 60%)";
    return "hsl(354 100% 62%)";
  };

  const osStatus = todayCompletion >= 85 ? "stable" : todayCompletion >= 70 ? "improving" : todayCompletion >= 50 ? "needs-attention" : "critical";

  return (
    <div className="min-h-screen">
      <CinematicOSHero>
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-[#FF2A2A]">MAX</span>
              <span className="text-os-cyan">ync²</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Daily Biological OS Execution Layer
            </p>
          </div>

          <Badge 
            variant="outline" 
            className="text-lg px-6 py-3 border-os-cyan/30 bg-os-cyan/5 backdrop-blur-sm"
          >
            <Activity className="w-5 h-5 mr-2 text-os-cyan animate-sync-pulse" />
            System Active
          </Badge>
        </div>
      </CinematicOSHero>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* OS Status Bar */}
        <div className="max-w-4xl mx-auto">
          <OSStatusBar 
            status={osStatus}
            score={Math.round(todayCompletion)}
          />
        </div>

        {/* Today's Protocol */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Today's Protocol</h2>
              <p className="text-muted-foreground mt-1">
                {completedModules.length} of {modules.length} modules completed
              </p>
            </div>
            <StreakTracker currentStreak={currentStreak} />
          </div>

          {/* Module List */}
          <div className="space-y-3">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.id}
                icon={module.icon}
                name={module.name}
                purpose={module.purpose}
                dose={module.dose}
                timeWindow={module.time}
                completed={completedModules.includes(module.id)}
                onToggle={() => toggleModule(module.id)}
                staggerDelay={index * 80}
              />
            ))}
          </div>
        </div>

        {/* OS Stability Mini Widget */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-bold">OS Stability</h3>
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--border))"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(186 100% 64%)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={351.86}
                    strokeDashoffset={351.86 - (todayCompletion / 100) * 351.86}
                    strokeLinecap="round"
                    className="transition-all duration-[650ms] ease-out"
                    style={{
                      filter: "drop-shadow(0 0 12px hsl(186 100% 64% / 0.4))"
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{Math.round(todayCompletion)}</span>
                </div>
                <div 
                  className="absolute inset-0 rounded-full opacity-20 animate-os-breathing"
                  style={{
                    background: "radial-gradient(circle, hsl(186 100% 64%) 0%, transparent 70%)"
                  }}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Smart OS Supply Panel */}
        <div className="max-w-4xl mx-auto">
          <SmartOSSupplyPanel
            module="Iron"
            daysRemaining={6}
            isLow={true}
          />
        </div>

        {/* Daily AI Insight */}
        <div className="max-w-4xl mx-auto">
          <DailyAIInsight
            insight="You have been missing evening modules. Try moving Calm Module earlier in the day."
            details="Research shows that consistency in timing improves biomarker response by up to 40%. Your evening protocol has been completed only 60% of the time in the past week. Consider setting a reminder 30 minutes earlier."
          />
        </div>

        {/* Weekly Progress */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">This Week</h2>
          
          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="space-y-8">
              {/* Weekly Overview */}
              <div className="grid grid-cols-7 gap-3">
                {weekDays.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="text-xs text-muted-foreground font-medium">{day.day}</div>
                    <div 
                      className="w-full h-20 rounded-lg border-2 transition-all duration-300 relative overflow-hidden"
                      style={{
                        borderColor: getCompletionColor(day.completion),
                        backgroundColor: `${getCompletionColor(day.completion)}15`
                      }}
                    >
                      <div 
                        className="absolute bottom-0 left-0 right-0 transition-all duration-500"
                        style={{
                          height: `${day.completion}%`,
                          backgroundColor: getCompletionColor(day.completion),
                          opacity: 0.6
                        }}
                      />
                      {day.isToday && (
                        <div className="absolute inset-0 animate-os-glow-pulse" 
                          style={{ 
                            boxShadow: `inset 0 0 20px ${getCompletionColor(day.completion)}50`
                          }} 
                        />
                      )}
                    </div>
                    <div className="text-xs font-bold">{day.completion}%</div>
                  </div>
                ))}
              </div>

              {/* Weekly Summary */}
              <div className="p-6 rounded-xl bg-background/50 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Weekly OS Summary</h3>
                  <TrendingUp className="w-5 h-5 text-os-success" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Average</p>
                    <p className="text-2xl font-bold">90%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Best Day</p>
                    <p className="text-2xl font-bold">100%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Streak</p>
                    <p className="text-2xl font-bold">{currentStreak} days</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  You are building a stable Biological OS, one day at a time. Keep this rhythm and you will unlock Protocol v1.1 in 3 weeks.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MAXync;
