import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Heart, Zap } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Warm, Cinematic, Emotional */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Warm gradient background with parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{
            background: "radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(0 70% 60% / 0.08) 0%, transparent 50%)",
            transform: "translateY(calc(var(--scroll-y, 0) * 0.3px))"
          }}
        />
        
        {/* Soft OS ring - ambient motion */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.15] pointer-events-none"
          style={{
            background: "conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)) 0deg, hsl(0 70% 60%) 180deg, hsl(var(--primary)) 360deg)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "spin 40s linear infinite"
          }}
        />
        
        {/* Floating organic shapes - gentle drift */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
          style={{
            animation: "float-drift 6s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#FF2A2A]/5 blur-3xl"
          style={{
            animation: "float-drift 8s ease-in-out infinite",
            animationDelay: "2s"
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 animate-fade-up-reveal">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight group">
            Why Geno<span className="text-[#FF2A2A] transition-all duration-[280ms] group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.6)]">MAX²</span> Exists
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We're building a new category to move people beyond guesswork and into true biological clarity.
          </p>
          
          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => navigate("/assessment")}
              className="text-lg px-8 py-6 rounded-full relative group overflow-hidden"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
                boxShadow: "0 0 30px hsl(var(--primary) / 0.3), 0 8px 16px hsl(var(--primary) / 0.2)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05) rotate(1deg)";
                e.currentTarget.style.boxShadow = "0 0 40px hsl(var(--primary) / 0.4), 0 12px 24px hsl(var(--primary) / 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                e.currentTarget.style.boxShadow = "0 0 30px hsl(var(--primary) / 0.3), 0 8px 16px hsl(var(--primary) / 0.2)";
              }}
            >
              Build My Biological <span className="text-[#FF2A2A]">OS</span>
            </Button>
          </div>
        </div>

        {/* Founder Video Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div 
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
            }}
          >
            <video
              className="w-full h-auto"
              controls
              poster="/placeholder-founder-video.jpg"
            >
              <source src="/videos/founder-story.mp4" type="video/mp4" />
              {/* Fallback */}
              <img src="/placeholder-founder-video.jpg" alt="GenoMAX² Founder Story" className="w-full h-auto" />
            </video>
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* The Founding Story - Full-width narrative */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-up-reveal" style={{ animationDelay: "200ms" }}>
            <h2 className="text-4xl md:text-5xl font-bold transition-all duration-[340ms] hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
              The Founding Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                It started with a simple question: <span className="text-foreground font-medium">Why do most people fail at biological optimization?</span>
              </p>
              <p>
                We realized the answer wasn't about willpower or discipline. It was about a fundamental mismatch between static protocols and dynamic biology.
              </p>
              <p>
                Your body changes daily. Hormones fluctuate. Biomarkers shift. But your supplement stack stays the same?
              </p>
              <p className="text-foreground font-medium">
                That's when we decided to build something different—a system that evolves with you.
              </p>
            </div>
          </div>
          
          {/* Abstract visual - soft curves */}
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

      {/* The Problem - Immersive, text-first */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--foreground) / 0.02) 0%, transparent 70%)"
        }} />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Problem
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            People spend hundreds each month on supplements without understanding what their biology actually needs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            No feedback loop. No adaptation. No clarity. Just empty promises and wasted money. The industry profits from confusion, not results.
          </p>
          
          {/* Subtle supporting visual */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{
              background: "linear-gradient(135deg, hsl(var(--muted) / 0.3) 0%, hsl(var(--muted) / 0.1) 100%)",
              border: "1px solid hsl(var(--border) / 0.3)"
            }}>
              <span className="text-4xl font-bold text-muted-foreground/50">$0</span>
              <span className="text-sm text-muted-foreground">measurable results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy - 3 horizontal micro-sections */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-[340ms] hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.3)]">
            Our Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Section 1 */}
            <div className="text-center space-y-4 group animate-fade-up-reveal" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:-translate-y-2"
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
            
            {/* Section 2 */}
            <div className="text-center space-y-4 group animate-fade-up-reveal" style={{ animationDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, hsl(0 70% 60% / 0.2) 0%, hsl(0 70% 60% / 0.05) 100%)"
                }}
              >
                <Heart className="w-8 h-8 text-[#FF2A2A]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">Biology Over Marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gender-specific physiology and real clinical data drive every decision, not trend-chasing or hype cycles.
              </p>
            </div>
            
            {/* Section 3 */}
            <div className="text-center space-y-4 group animate-fade-up-reveal" style={{ animationDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--accent) / 0.3) 0%, hsl(var(--accent) / 0.1) 100%)"
                }}
              >
                <Zap className="w-8 h-8 text-accent-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">Adaptation Over Static Plans</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your protocol evolves as your biomarkers improve—because your biology is not static, and neither should your plan be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission - Big, bold, centered */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.08) 0%, transparent 60%)"
        }} />
        
        {/* Ambient light streaks */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FF2A2A]/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Our Mission
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{
            background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.7) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            To give every person a biological operating system they can trust.
          </p>
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            <p>To replace confusion with clarity.</p>
            <p>To replace hype with evidence.</p>
            <p>To replace randomness with precision.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            size="lg"
            onClick={() => navigate("/assessment")}
            className="text-lg px-8 py-6 rounded-full relative group overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
              boxShadow: "0 0 30px hsl(var(--primary) / 0.3), 0 8px 16px hsl(var(--primary) / 0.2)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) rotate(1deg)";
              e.currentTarget.style.boxShadow = "0 0 40px hsl(var(--primary) / 0.4), 0 12px 24px hsl(var(--primary) / 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              e.currentTarget.style.boxShadow = "0 0 30px hsl(var(--primary) / 0.3), 0 8px 16px hsl(var(--primary) / 0.2)";
            }}
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
        
        @keyframes float-drift {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-3px) translateX(2px); }
          50% { transform: translateY(-2px) translateX(-2px); }
          75% { transform: translateY(3px) translateX(1px); }
        }
      `}</style>
    </div>
  );
};

export default About;
