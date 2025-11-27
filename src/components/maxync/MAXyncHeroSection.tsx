import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Flame, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { VideoPlaceholder } from "@/components/home/VideoPlaceholder";

export const MAXyncHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 30% 50%, hsl(186 100% 64% / 0.08) 0%, transparent 50%)",
        }}
      />
      
      {/* Floating pulse rings */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--os-cyan)), hsl(var(--primary)))",
          filter: "blur(60px)",
          animation: "spin 20s linear infinite",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold">
            Meet <span className="text-[#FF2A2A]">MAX</span>ync²
          </h2>
          <p className="text-2xl text-muted-foreground">
            Your Daily OS Execution Layer
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The protocol is just the blueprint. MAXync² is how you execute it-daily habits, 
            intelligent reminders, streak psychology, and AI insights to keep you consistent.
          </p>
        </div>

        {/* MAXync² Video */}
        <div className="mb-20 max-w-4xl mx-auto">
          <VideoPlaceholder
            title="Stay Synced with MAXync"
            subtitle="Your daily execution layer"
            duration="0:50"
            thumbnail="/placeholder-maxync.jpg"
            videoSrc="/videos/maxync-daily.mp4"
            glowColor="red"
            controls={true}
            muted={false}
            autoPlay={false}
          />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: UI Preview Mockup */}
          <div
            className="relative rounded-3xl p-8 space-y-6"
            style={{
              background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(var(--border))",
              boxShadow: "0 20px 60px hsl(var(--background) / 0.8)",
            }}
          >
            {/* Today's Protocol */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Today's Protocol</h3>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-os-cyan/10 border border-os-cyan/20">
                  <div className="w-2 h-2 rounded-full bg-os-cyan animate-pulse" />
                  <span className="text-sm font-medium text-os-cyan">Active</span>
                </div>
              </div>

              {/* Module checklist */}
              <div className="space-y-2">
                {[
                  { name: "Metabolic Support", done: true, time: "8:00 AM" },
                  { name: "Hormonal Balance", done: true, time: "12:00 PM" },
                  { name: "Recovery Protocol", done: false, time: "6:00 PM" },
                  { name: "Sleep Optimization", done: false, time: "10:00 PM" },
                ].map((module, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border transition-all duration-[150ms] hover:bg-card"
                    style={{
                      animation: `reveal-up 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) ${i * 100}ms backwards`,
                    }}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-[150ms] ${
                        module.done
                          ? "bg-os-cyan border-os-cyan"
                          : "border-muted-foreground/30"
                      }`}
                    >
                      {module.done && (
                        <div className="w-2 h-2 bg-white rounded-full animate-scale-in" />
                      )}
                    </div>
                    <span className={`flex-1 text-sm ${module.done ? "line-through text-muted-foreground" : ""}`}>
                      {module.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{module.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Streak Counter */}
            <div
              className="flex items-center justify-between p-4 rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(186 100% 64% / 0.1) 0%, hsl(213 100% 55% / 0.05) 100%)",
                border: "1px solid hsl(186 100% 64% / 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">🔥</div>
                <div>
                  <div className="text-2xl font-bold">7 Days</div>
                  <div className="text-xs text-muted-foreground">Current Streak</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Best: <span className="font-bold text-foreground">12</span>
              </div>
            </div>

            {/* AI Insight */}
            <div
              className="p-4 rounded-xl space-y-2"
              style={{
                background: "linear-gradient(135deg, hsl(280 85% 45% / 0.08) 0%, hsl(330 100% 68% / 0.05) 100%)",
                border: "1px solid hsl(280 85% 45% / 0.2)",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs">AI</span>
                </div>
                <span className="text-sm font-semibold">Daily Insight</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your adherence is strong-metabolic markers are trending positive. 
                Consider adding evening walk to amplify recovery signals.
              </p>
            </div>

            {/* Mini OS Stability Ring */}
            <div className="flex items-center justify-center pt-4">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="6"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--os-cyan))"
                    strokeWidth="6"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    className="transition-all duration-[650ms]"
                    style={{
                      filter: "drop-shadow(0 0 8px hsl(var(--os-cyan) / 0.6))",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-os-cyan">75%</div>
                    <div className="text-[10px] text-muted-foreground">Stable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features & CTA */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Why <span className="text-[#FF2A2A]">MAX</span>ync² Works
              </h3>
              
              <ul className="space-y-4">
                {[
                  {
                    title: "Habit Formation Science",
                    description: "Built on cue-routine-reward loops and streak psychology to make execution automatic.",
                  },
                  {
                    title: "Smart Reminders",
                    description: "Time-based notifications aligned to your protocol and circadian rhythm.",
                  },
                  {
                    title: "Weekly Reports",
                    description: "Track completion, biomarker trends, and get AI-powered adjustments.",
                  },
                  {
                    title: "Loss Aversion Design",
                    description: "Streak counters and progress tracking leverage psychology to keep you consistent.",
                  },
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex gap-4"
                    style={{
                      animation: `reveal-up 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) ${(i + 4) * 100}ms backwards`,
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <button
                onClick={() => navigate("/maxync")}
                className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-[280ms] hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--os-cyan)) 100%)",
                  boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                }}
              >
                Activate My Daily OS
              </button>
              <p className="text-center text-sm text-muted-foreground">
                Included with all protocol versions
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { value: "90%", label: "Adherence Rate" },
                { value: "21 Days", label: "Avg. Streak" },
                { value: "v2.0", label: "OS Upgrades" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
