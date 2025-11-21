import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Activity, Shield, TrendingUp } from "lucide-react";

const Maximo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-maximo/5 via-background to-maximo/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-maximo/10 text-maximo text-sm font-medium">
              Male-Optimized Protocol
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-[#FF2A2A]">MAX</span>imo²
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Optimize testosterone, performance, and longevity with protocols built for male biology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload?gender=male&source=maximo">
                <Button size="lg" className="bg-maximo hover:bg-maximo/90 text-maximo-foreground">
                  Build My <span className="text-[#FF2A2A]">MAX</span>imo² Protocol
                </Button>
              </Link>
              <Link to="/assessment/maximo">
                <Button size="lg" variant="outline" className="border-maximo/20 hover:border-maximo">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAXimo² Video Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden"
            style={{
              boxShadow: "0 0 32px hsl(189 100% 60% / 0.4), 0 0 16px hsl(189 100% 60% / 0.2)",
            }}
          >
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder-maximo-video.jpg"
            >
              <source src="/videos/maximo-protocol.mp4" type="video/mp4" />
              {/* Fallback */}
              <img src="/placeholder-maximo-video.jpg" alt="MAXimo² Protocol" className="w-full h-auto" />
            </video>
            {/* Cyan glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-maximo/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Male-Specific Optimization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 space-y-4 transition-all duration-[280ms] hover:border-maximo/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(186_100%_64%/0.3)] animate-card-snap" style={{ animationDelay: "0ms" }}>
                <div className="w-12 h-12 rounded-full bg-maximo/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "120ms" }}>
                  <Zap className="h-6 w-6 text-maximo" />
                </div>
                <h3 className="text-xl font-semibold">Testosterone Support</h3>
                <p className="text-sm text-muted-foreground">
                  Vitamin D, zinc, and magnesium protocols for healthy testosterone levels
                </p>
              </Card>

              <Card className="p-6 space-y-4 transition-all duration-[280ms] hover:border-maximo/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(186_100%_64%/0.3)] animate-card-snap" style={{ animationDelay: "100ms" }}>
                <div className="w-12 h-12 rounded-full bg-maximo/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "220ms" }}>
                  <Activity className="h-6 w-6 text-maximo" />
                </div>
                <h3 className="text-xl font-semibold">Metabolic Health</h3>
                <p className="text-sm text-muted-foreground">
                  Blood sugar regulation and insulin sensitivity optimization
                </p>
              </Card>

              <Card className="p-6 space-y-4 transition-all duration-[280ms] hover:border-maximo/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(186_100%_64%/0.3)] animate-card-snap" style={{ animationDelay: "200ms" }}>
                <div className="w-12 h-12 rounded-full bg-maximo/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "320ms" }}>
                  <Shield className="h-6 w-6 text-maximo" />
                </div>
                <h3 className="text-xl font-semibold">Cardiovascular Health</h3>
                <p className="text-sm text-muted-foreground">
                  Omega-3, CoQ10, and targeted support for heart and vascular health
                </p>
              </Card>

              <Card className="p-6 space-y-4 transition-all duration-[280ms] hover:border-maximo/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(186_100%_64%/0.3)] animate-card-snap" style={{ animationDelay: "300ms" }}>
                <div className="w-12 h-12 rounded-full bg-maximo/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "420ms" }}>
                  <TrendingUp className="h-6 w-6 text-maximo" />
                </div>
                <h3 className="text-xl font-semibold">Performance & Recovery</h3>
                <p className="text-sm text-muted-foreground">
                  Creatine, protein optimization, and recovery enhancement protocols
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Overview */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What's Included in MAXimo²
              </h2>
              <p className="text-xl text-muted-foreground">
                Evidence-based protocols tailored to male biology
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Foundation Layer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Vitamin D3 for testosterone and immune support</li>
                  <li>• Omega-3 (EPA/DHA) for cardiovascular and cognitive health</li>
                  <li>• Magnesium glycinate for muscle function and testosterone production</li>
                  <li>• Methylated B-complex for energy and cardiovascular support</li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Male-Specific Layer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Zinc picolinate for testosterone and immune function</li>
                  <li>• Vitamin K2 for cardiovascular health and calcium metabolism</li>
                  <li>• Boron for testosterone optimization (when indicated)</li>
                  <li>• Selenium for thyroid and prostate health</li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Performance Layer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• CoQ10 for cellular energy and cardiovascular support</li>
                  <li>• Creatine monohydrate for strength and cognitive function</li>
                  <li>• Beta-alanine for exercise performance (when training goals present)</li>
                  <li>• Curcumin for inflammation control and recovery</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to start your MAXimo² protocol?
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload your blood work or complete our assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload?gender=male&source=maximo">
                <Button size="lg" className="bg-maximo hover:bg-maximo/90 text-maximo-foreground">
                  Build My MAXimo² Protocol
                </Button>
              </Link>
              <Link to="/assessment">
                <Button size="lg" variant="outline">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maximo;
