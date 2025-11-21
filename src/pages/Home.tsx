import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";
import { GenderSelectionCards } from "@/components/home/GenderSelectionCards";
import { SupplementGraveyardSection } from "@/components/home/SupplementGraveyardSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SmartOSSupplyTimeline } from "@/components/home/SmartOSSupplyTimeline";
import { MAXyncHeroSection } from "@/components/maxync/MAXyncHeroSection";
import { VideoPlaceholder } from "@/components/home/VideoPlaceholder";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <CinematicOSHero>
        <div className="text-center space-y-10">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turn your bloodwork into a protocol
              <br />
              that fits <span className="text-[#FF2A2A]">YOUR</span> biology.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A gender-optimized Biological OS designed for real results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => navigate('/assessment')}
              className="min-w-64 bg-gradient-to-r from-primary to-os-cyan hover:opacity-90 transition-all duration-[280ms] text-lg"
            >
              Start Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/upload')}
              className="min-w-64 transition-all duration-[280ms] text-lg border-2 border-primary"
            >
              Upload Bloodwork
            </Button>
          </div>
        </div>
      </CinematicOSHero>

      {/* Gender Selection Cards - Immediately after hero */}
      <GenderSelectionCards />

      {/* Supplement Graveyard Section */}
      <SupplementGraveyardSection />

      {/* How It Works - 3 Steps */}
      <HowItWorksSection />

      {/* Smart OS Supply Timeline */}
      <SmartOSSupplyTimeline />

      {/* MAXync² Hero Section */}
      <MAXyncHeroSection />

      {/* Video Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              See Geno<span className="text-[#FF2A2A]">MAX²</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our Biological OS transforms bloodwork into personalized protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <VideoPlaceholder
              title="GenoMAX² OS Overview"
              duration="0:35"
            />
            <VideoPlaceholder
              title="Gender-Optimized Protocols Explained"
              duration="0:40"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold">
            Ready to Upgrade Your Biology?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop guessing. Start optimizing with a protocol built for your unique biological data.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Button
              size="lg"
              onClick={() => navigate('/onboarding?gender=maxima')}
              className="h-16 text-lg bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 transition-all duration-[280ms]"
            >
              Build My <span className="text-[#FF2A2A] font-bold">MAX</span>ima² Protocol
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/onboarding?gender=maximo')}
              className="h-16 text-lg bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 transition-all duration-[280ms]"
            >
              Build My <span className="text-[#FF2A2A] font-bold">MAX</span>imo² Protocol
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
