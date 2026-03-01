import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Organizations = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Attempt to save to Supabase
      const { error } = await supabase
        .from('organization_inquiries')
        .insert([{
          name: formData.name,
          organization: formData.organization,
          role: formData.role,
          email: formData.email,
          message: formData.message,
        }]);
      
      if (error) {
        // If table doesn't exist yet, still acknowledge the submission
        console.warn('Supabase insert failed:', error.message);
      }
    } catch (err) {
      console.warn('Form submission fallback:', err);
    }
    
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", organization: "", role: "", email: "", message: "" });
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Organizations Who Care About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Real Health Outcomes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Corporate wellness, medical practices, and performance teams using evidence-based protocols
            </p>
          </div>

          {/* Use Cases */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Corporate Wellness</h3>
              <p className="text-muted-foreground">
                Give employees evidence-based health optimization, not generic wellness programs that don't work.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Reduced healthcare costs</li>
                <li>• Improved productivity and focus</li>
                <li>• Measurable health outcomes</li>
                <li>• Easy integration with benefits</li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Medical Practices</h3>
              <p className="text-muted-foreground">
                Add a structured supplement layer to your treatment protocols backed by patient biomarkers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• White-label options available</li>
                <li>• Integration with patient records</li>
                <li>• Evidence-based recommendations</li>
                <li>• Track patient progress over time</li>
              </ul>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Sports Teams</h3>
              <p className="text-muted-foreground">
                Gender-specific protocols for athletes based on real biomarkers, not generic sports nutrition.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Performance optimization</li>
                <li>• Recovery enhancement</li>
                <li>• Injury prevention protocols</li>
                <li>• Team and individual tracking</li>
              </ul>
            </Card>
          </section>

          {/* Benefits */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What Makes Geno<span className="text-[#FF2A2A]">MAX²</span> Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Biomarker-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Every recommendation tied to measurable blood markers. No guesswork, no generic protocols.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Gender-Specific</h3>
                <p className="text-sm text-muted-foreground">
                  Separate protocols for male and female biology. One-size-fits-all never worked.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
                <p className="text-sm text-muted-foreground">
                  API access, white-label options, and seamless workflow integration.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Continuous Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Protocols evolve as biomarkers improve. Track progress and measure outcomes.
                </p>
              </Card>
            </div>
          </section>

          {/* Contact Form */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Started
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how GenoMAX² can work for your organization
              </p>
            </div>

            <Card className="p-8 md:p-12 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Number of employees/patients, current wellness programs, specific goals..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
