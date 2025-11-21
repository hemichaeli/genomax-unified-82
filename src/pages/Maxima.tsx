import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Activity, Moon, Zap } from "lucide-react";

const Maxima = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-maxima/5 via-background to-maxima/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-maxima/10 text-maxima text-sm font-medium">
              Female-Optimized Protocol
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-[#FF2A2A]">MAX</span>ima²
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Optimize hormones, cycle, energy, and vitality with protocols built for female biology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload?gender=female&source=maxima">
                <Button size="lg" className="bg-maxima hover:bg-maxima/90 text-maxima-foreground">
                  Build My <span className="text-[#FF2A2A]">MAX</span>ima² Protocol
                </Button>
              </Link>
              <Link to="/assessment/maxima">
                <Button size="lg" variant="outline" className="border-maxima/20 hover:border-maxima">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Female-Specific Optimization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 space-y-4 transition-all duration-[340ms] hover:border-maxima/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(330_100%_68%/0.35)] animate-card-snap rounded-3xl" style={{ animationDelay: "0ms" }}>
                <div className="w-12 h-12 rounded-full bg-maxima/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "120ms" }}>
                  <Heart className="h-6 w-6 text-maxima" />
                </div>
                <h3 className="text-xl font-semibold">Hormone Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Cycle-aware supplementation supporting estrogen and progesterone optimization
                </p>
              </Card>

              <Card className="p-6 space-y-4 transition-all duration-[340ms] hover:border-maxima/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(330_100%_68%/0.35)] animate-card-snap rounded-3xl" style={{ animationDelay: "100ms" }}>
                <div className="w-12 h-12 rounded-full bg-maxima/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "220ms" }}>
                  <Activity className="h-6 w-6 text-maxima" />
                </div>
                <h3 className="text-xl font-semibold">Iron Management</h3>
                <p className="text-sm text-muted-foreground">
                  Addressing menstrual iron loss with bioavailable forms and absorption enhancers
                </p>
              </Card>

              <Card className="p-6 space-y-4 transition-all duration-[340ms] hover:border-maxima/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(330_100%_68%/0.35)] animate-card-snap rounded-3xl" style={{ animationDelay: "200ms" }}>
                <div className="w-12 h-12 rounded-full bg-maxima/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "320ms" }}>
                  <Moon className="h-6 w-6 text-maxima" />
                </div>
                <h3 className="text-xl font-semibold">Bone Health</h3>
                <p className="text-sm text-muted-foreground">
                  Calcium, vitamin D3, and K2 optimization for long-term skeletal integrity
                </p>
              </Card>

              <Card className="p-6 space-y-4 transition-all duration-[340ms] hover:border-maxima/40 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(330_100%_68%/0.35)] animate-card-snap rounded-3xl" style={{ animationDelay: "300ms" }}>
                <div className="w-12 h-12 rounded-full bg-maxima/10 flex items-center justify-center animate-icon-pop" style={{ animationDelay: "420ms" }}>
                  <Zap className="h-6 w-6 text-maxima" />
                </div>
                <h3 className="text-xl font-semibold">Energy & Vitality</h3>
                <p className="text-sm text-muted-foreground">
                  B-complex, CoQ10, and magnesium protocols for sustained cellular energy
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
                What's Included in MAXima²
              </h2>
              <p className="text-xl text-muted-foreground">
                Evidence-based protocols tailored to female biology
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Foundation Layer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Vitamin D3 + K2 for bone health and immune function</li>
                  <li>• Omega-3 (EPA/DHA) for inflammation control and cardiovascular health</li>
                  <li>• Magnesium glycinate for muscle function and sleep quality</li>
                  <li>• Methylated B-complex for energy and methylation support</li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Female-Specific Layer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Iron bisglycinate (if ferritin below optimal)</li>
                  <li>• Vitamin C for iron absorption enhancement</li>
                  <li>• Calcium citrate for bone density support</li>
                  <li>• Folate (methylated form) for reproductive health</li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Optimization Layer</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• CoQ10 for cellular energy and cardiovascular support</li>
                  <li>• Zinc for immune function and hormone regulation</li>
                  <li>• Probiotic blend for gut and immune health</li>
                  <li>• Adaptogenic herbs for stress response (when indicated)</li>
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
              Ready to start your MAXima² protocol?
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload your blood work or complete our assessment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload?gender=female&source=maxima">
                <Button size="lg" className="bg-maxima hover:bg-maxima/90 text-maxima-foreground">
                  Build My MAXima² Protocol
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

export default Maxima;
