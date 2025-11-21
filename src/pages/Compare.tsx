import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Check } from "lucide-react";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";

const Compare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Comparison Blocks */}
      <CinematicOSHero>
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              How Geno<span className="text-accent">MAX²</span> Is Different
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We're not another supplement subscription. We're a biological operating system.
            </p>
          </div>

          {/* Comparison Blocks in Hero */}
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/20 bg-destructive/5 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Traditional Subscriptions</h3>
                    <p className="text-sm text-muted-foreground">
                      Static monthly boxes with the same supplements forever, regardless of whether they're working
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-accent/20 bg-accent/5 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Smart OS Supply</h3>
                    <p className="text-sm text-muted-foreground">
                      Dynamic protocols that evolve as your biomarkers improve. Stop supplements when you no longer need them.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/20 bg-destructive/5 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">DNA-Based Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      $200+ genetic tests that multiple clinical trials (524,592+ participants) show provide zero benefit
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-accent/20 bg-accent/5 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Biomarker-Based</h3>
                    <p className="text-sm text-muted-foreground">
                      Real blood work showing actual deficiencies and imbalances right now. Measurable, actionable, proven.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/20 bg-destructive/5 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Generic Plans</h3>
                    <p className="text-sm text-muted-foreground">
                      Same protocol for everyone, ignoring fundamental differences between male and female biology
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-accent/20 bg-accent/5 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Gender-Optimized</h3>
                    <p className="text-sm text-muted-foreground">
                      Separate protocols for <span className="text-accent">MAX</span>ima² (female) and <span className="text-accent">MAX</span>imo² (male), reflecting real physiological differences
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </CinematicOSHero>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Feature Table */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Complete Comparison
            </h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold">Traditional</th>
                      <th className="px-6 py-4 text-center font-semibold text-accent">GenoMAX²</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 font-medium">Personalization method</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-muted-foreground">Quiz or DNA test</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-accent font-medium">Blood biomarkers</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Gender-specific protocols</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Protocol adjusts over time</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Evidence-graded recommendations</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Track biomarker improvements</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Stop supplements when optimized</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-5 w-5 text-destructive mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Clinical research backing</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-muted-foreground">Marketing claims</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-accent font-medium">Referenced studies</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <div className="text-center space-y-6 py-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to upgrade from supplements to systems?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload">
                <Button size="lg">Upload Blood Work</Button>
              </Link>
              <Link to="/assessment">
                <Button size="lg" variant="outline">Start Assessment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
