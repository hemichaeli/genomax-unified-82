import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Heart, Zap, Play } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(0 70% 60% / 0.08) 0%, transparent 50%)",
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 animate-fade-up-reveal">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            The supplement industry is broken.
            <br />
            We're fixing it.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Most people waste money on random pills. We built a biological operating system instead.
          </p>
          
          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => navigate("/assessment")}
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-glow-primary"
            >
              Build My Biological <span className="text-[#FF2A2A]">OS</span>
            </Button>
          </div>
        </div>

        {/* Founder Video Placeholder */}
        <div className="max-w-4xl w-full mx-auto mt-16 relative z-10">
          <div 
            className="relative rounded-2xl overflow-hidden bg-card border border-border aspect-video flex items-center justify-center"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="w-10 h-10 text-primary ml-1" />
              </div>
              <div>
                <p className="text-lg font-semibold">Founder Story</p>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founding Story */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-up-reveal" style={{ animationDelay: "200ms" }}>
            <h2 className="text-4xl md:text-5xl font-bold">
              How it started
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I spent $400/month on supplements and felt exactly the same.
              </p>
              <p>
                My bloodwork showed I was deficient in iron but taking way too much magnesium. Nobody told me. The stack just kept coming.
              </p>
              <p>
                That's when I realized: <span className="text-foreground font-medium">supplement companies profit from confusion, not results.</span>
              </p>
              <p className="text-foreground font-medium">
                So we built something different - a system that actually listens to your biology.
              </p>
            </div>
          </div>
          
          {/* Abstract visual */}
          <div className="relative h-[400px]">
            <div 
              className="absolute inset-0 rounded-[3rem]"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(0 70% 60% / 0.05) 100%)",
                backdropFilter: "blur(20px)"
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
              <div 
                className="w-64 h-64 rounded-full opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(0 70% 60%), hsl(var(--primary)))",
                  filter: "blur(40px)",
                  animation: "spin 30s linear infinite"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--foreground) / 0.02) 0%, transparent 70%)"
        }} />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why most supplements fail
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Generic stacks ignore your bloodwork. Random pills with zero feedback.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The industry profits when you keep guessing. We built GenoMAX² to fix that - blood-based protocols that adapt as you improve.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 group animate-fade-up-reveal" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-[280ms] group-hover:scale-110 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 100%)"
                }}
              >
                <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">Precision Over Guesswork</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every recommendation is tied to measurable biomarkers, not marketing claims or genetic theater.
              </p>
            </div>
            
            <div className="text-center space-y-4 group animate-fade-up-reveal" style={{ animationDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-[280ms] group-hover:scale-110 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, hsl(0 70% 60% / 0.2) 0%, hsl(0 70% 60% / 0.05) 100%)"
                }}
              >
                <Target className="w-8 h-8 text-[#FF2A2A]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">Biology Over Marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gender-specific physiology and real clinical data drive every decision, not trend-chasing or hype cycles.
              </p>
            </div>
            
            <div className="text-center space-y-4 group animate-fade-up-reveal" style={{ animationDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-[280ms] group-hover:scale-110 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--accent) / 0.3) 0%, hsl(var(--accent) / 0.1) 100%)"
                }}
              >
                <Zap className="w-8 h-8 text-accent-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">Adaptation Over Static Plans</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your protocol evolves as your biomarkers improve - because your biology is not static, and neither should your plan be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.08) 0%, transparent 60%)"
        }} />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Our mission
          </h2>
          <p className="text-2xl md:text-3xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Give every person a protocol they can actually trust
          </p>
          <div className="space-y-3 text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            <p>Replace confusion with clarity</p>
            <p>Replace marketing with science</p>
            <p>Replace guesswork with your actual bloodwork</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            size="lg"
            onClick={() => navigate("/assessment")}
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-glow-primary"
          >
            Build My Biological <span className="text-[#FF2A2A]">OS</span>
          </Button>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default About;
