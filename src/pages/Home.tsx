import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";
import { GenderSelectionCards } from "@/components/home/GenderSelectionCards";
import { SecretProblem } from "@/components/home/SecretProblem";
import { SupplementGraveyardSection } from "@/components/home/SupplementGraveyardSection";
import { GenderMattersSection } from "@/components/home/GenderMattersSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SmartSupplySection } from "@/components/home/SmartSupplySection";
import { MAXyncHeroSection } from "@/components/maxync/MAXyncHeroSection";
import { VideoPlaceholder } from "@/components/home/VideoPlaceholder";
import { BrandText } from "@/components/BrandText";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <CinematicOSHero>
        {/* Subtle scanline overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(65, 224, 255, 0.02) 0px, rgba(65, 224, 255, 0.03) 1px, transparent 1px, transparent 2px)',
            animation: 'scanline 8s linear infinite',
          }}
        />
        
        <div className="text-center space-y-10 relative z-10">
          {/* Core Video #1: Opening Video */}
          <div className="mb-12 max-w-4xl mx-auto">
            <VideoPlaceholder
              title="Your Biology Has a Voice"
              subtitle="The opening video of the Biological OS"
              duration="0:30"
              videoSrc="/videos/opening-biology-voice.mp4"
              thumbnail="/placeholder-opening.jpg"
              glowColor="cyan"
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Biology Isn't Generic.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Blood biomarkers beat DNA - that's why men and women need different Biological Operating Systems.
            </p>
          </div>

          {/* Gender CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-4">
            <Button
              size="lg"
              onClick={() => navigate('/assessment?gender=maximo')}
              className="h-16 text-lg bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all duration-[140ms] shadow-glow-cyan rounded-xl text-white"
            >
              <BrandText variant="maximo" />
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/assessment?gender=maxima')}
              className="h-16 text-lg bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] transition-all duration-[140ms] shadow-glow-magenta rounded-xl text-white"
            >
              <BrandText variant="maxima" />
            </Button>
          </div>
        </div>
      </CinematicOSHero>

      {/* Gender Selection Cards - Immediately after hero */}
      <GenderSelectionCards />

      {/* Secret Problem Section */}
      <SecretProblem />

      {/* Supplement Graveyard Section */}
      <SupplementGraveyardSection />

      {/* Gender Matters Section */}
      <GenderMattersSection />

      {/* How It Works - 3 Steps */}
      <HowItWorksSection />

      {/* Smart OS Supply Section */}
      <SmartSupplySection />

      {/* MAXync² Hero Section */}
      <MAXyncHeroSection />

      {/* Video Section */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              See Geno<span className="text-accent">MAX²</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how our Biological OS transforms bloodwork into personalized protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <VideoPlaceholder
              title="GenoMAX² OS Overview"
              duration="0:35"
              videoSrc="/videos/genomax-os-overview.mp4"
              thumbnail="/placeholder-os-scan.jpg"
              glowColor="cyan"
            />
            <VideoPlaceholder
              title="Gender-Optimized Protocols Explained"
              duration="0:40"
              videoSrc="/videos/gender-protocols.mp4"
              thumbnail="/placeholder-founder-video.jpg"
              glowColor="magenta"
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
              onClick={() => navigate('/assessment?gender=maxima')}
              className="h-16 text-lg bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 transition-all duration-[280ms]"
            >
              Build My <BrandText variant="maxima" /> Protocol
            </Button>
            <Button
              size="lg"
              onClick={() => navigate('/assessment?gender=maximo')}
              className="h-16 text-lg bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 transition-all duration-[280ms]"
            >
              Build My <BrandText variant="maximo" /> Protocol
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
