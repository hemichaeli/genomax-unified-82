import { Upload, Cpu, Zap } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Assess",
      description: "Upload bloodwork or complete our smart assessment to map your biological baseline.",
      color: "hsl(186 100% 64%)", // os-cyan
    },
    {
      icon: Cpu,
      title: "Analyze",
      description: "Your biomarkers drive a Gender-Specific Biological OS calibrated to your unique physiology.",
      color: "hsl(213 100% 55%)", // primary
    },
    {
      icon: Zap,
      title: "Activate",
      description: "Smart OS Supply ships only what you need, updating monthly as your biology changes.",
      color: "hsl(330 100% 68%)", // maxima-light
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            GENOMAX² builds and MAXimizes your biological Operating System based on gender specific physiology and the way your body handles hormones, metabolism, energy patterns and stress.
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three steps to your precision biological protocol
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
              style={{
                animation: `reveal-up 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 120}ms backwards`,
              }}
            >
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-2xl p-8 space-y-6 transition-all duration-[280ms] hover:translate-y-[-4px]"
                style={{
                  background: "linear-gradient(135deg, hsl(220 10% 98% / 0.03) 0%, hsl(220 10% 98% / 0.01) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-[280ms] group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                    border: `1px solid ${step.color}40`,
                  }}
                >
                  <step.icon
                    className="w-8 h-8 transition-all duration-[280ms]"
                    style={{ color: step.color }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] pointer-events-none rounded-2xl"
                  style={{
                    boxShadow: `0 0 40px ${step.color}30`,
                  }}
                />
              </div>

              {/* Connector line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
