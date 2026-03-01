import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";
import { GenderSelectionCards } from "@/components/home/GenderSelectionCards";
import { SecretProblem } from "@/components/home/SecretProblem";
import { SupplementGraveyardSection } from "@/components/home/SupplementGraveyardSection";
import { GenderMattersSection } from "@/components/home/GenderMattersSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { SmartSupplySection } from "@/components/home/SmartSupplySection";
import { ProtocolBoxHero } from "@/components/home/ProtocolBoxHero";
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
              duration="0:32"
              videoSrc="/videos/dual_gender.mp4"
              glowColor="cyan"
              controls={true}
              autoPlay={false}
              muted={false}
              simple
            />
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Biology Isn't Generic.
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-4xl mx-auto leading-relaxed mb-4">
              Built for your biology. MAXimizes your physiology.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Blood biomarkers beat DNA - that's why men and women need different Biological Operating Systems.
            </p>
          </div>

          {/* Gender CTA Buttons */}
          <div className="space-y-6 max-w-3xl mx-auto pt-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Men and women follow gender specific biological patterns in hormones, metabolism, stress and energy. GENOMAX² builds and MAXimizes your biological Operating System for the way your physiology actually works.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
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

      {/* Protocol Box Hero */}
      <ProtocolBoxHero />

      {/* MAXync² Hero Section */}
      <MAXyncHeroSection />

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
            Your Blood Work. Your Protocol.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build a protocol driven by your actual biomarkers, not marketing claims.
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
