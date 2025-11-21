import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload as UploadIcon, FileText, Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { CinematicOSHero } from "@/components/os/CinematicOSHero";

const Upload = () => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      toast.success("Blood work uploaded successfully!");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Upload */}
      <CinematicOSHero>
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Upload Your Blood Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              We'll analyze your biomarkers and create a personalized, gender-optimized protocol
            </p>
          </div>

          {/* Upload Card */}
          <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80">
            <div className="space-y-8">
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileUpload}
                />
                <label htmlFor="file-upload" className="cursor-pointer space-y-4 block">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <UploadIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PDF, JPG, PNG up to 10MB
                    </p>
                  </div>
                </label>
              </div>

              <Button className="w-full" size="lg">
                Analyze Blood Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* What We Analyze */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Analyze
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-3 backdrop-blur-sm bg-card/80">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Key Biomarkers</h3>
                <p className="text-sm text-muted-foreground">
                  Vitamin D, Iron, Omega-3, hsCRP, and 20+ other critical markers
                </p>
              </Card>

              <Card className="p-6 space-y-3 backdrop-blur-sm bg-card/80">
                <Lock className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Private & Secure</h3>
                <p className="text-sm text-muted-foreground">
                  HIPAA-compliant storage with end-to-end encryption
                </p>
              </Card>

              <Card className="p-6 space-y-3 backdrop-blur-sm bg-card/80">
                <ArrowRight className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Quick Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Get your personalized protocol within 24-48 hours
                </p>
              </Card>
            </div>
          </div>
        </div>
      </CinematicOSHero>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* FAQ */}
          <Card className="p-8 bg-secondary">
            <h3 className="text-xl font-semibold mb-4">Common Questions</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">What if I don't have recent blood work?</p>
                <p className="text-sm text-muted-foreground">
                  No problem! Start with our assessment and we'll recommend which tests to get.
                </p>
              </div>
              <div>
                <p className="font-medium mb-2">Which tests do you need?</p>
                <p className="text-sm text-muted-foreground">
                  We work with standard wellness panels. A comprehensive metabolic panel plus vitamin D, iron studies, and lipid panel is ideal.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;
