import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserRound, Sparkles } from "lucide-react";
import { BrandText } from "@/components/BrandText";

export const GenderSelectionCards = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your Biological <span className="text-accent">OS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your biology is not neutral. It follows gender specific physiology.
            <br />
            Choose the Operating System built for the way your body works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MAXima² Card */}
          <div
            className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-[280ms] hover:scale-[1.02] hover:shadow-[0_0_48px_hsl(330_100%_68%/0.4)]"
            style={{
              background: "linear-gradient(135deg, hsl(330 100% 68% / 0.08) 0%, hsl(280 85% 45% / 0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(330 100% 68% / 0.2)",
            }}
          >
            <div className="p-10 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-bold">
                  <BrandText variant="maxima" />
                </h3>
                <div className="w-12 h-12 rounded-full bg-maxima/20 flex items-center justify-center">
                  <UserRound className="w-6 h-6 text-maxima" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground font-medium">
                Female-Specific Biological OS
              </p>

              {/* Key Features */}
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-maxima-light mt-0.5 flex-shrink-0" />
                  <span>Hormonal cycle calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-maxima-light mt-0.5 flex-shrink-0" />
                  <span>Iron & metabolic calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-maxima-light mt-0.5 flex-shrink-0" />
                  <span>Bone density & recovery protocols</span>
                </li>
              </ul>

              {/* CTA */}
              <Button
                onClick={() => navigate('/assessment?gender=maxima')}
                className="w-full bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 text-white font-medium h-12 transition-all duration-[280ms]"
              >
                Build My <BrandText variant="maxima" /> Protocol
              </Button>
            </div>

            {/* Animated bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maxima to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]" />
          </div>

          {/* MAXimo² Card */}
          <div
            className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-[280ms] hover:scale-[1.02] hover:shadow-[0_0_48px_hsl(186_100%_64%/0.4)]"
            style={{
              background: "linear-gradient(135deg, hsl(186 100% 64% / 0.08) 0%, hsl(213 100% 55% / 0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid hsl(186 100% 64% / 0.2)",
            }}
          >
            <div className="p-10 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-4xl font-bold">
                  <BrandText variant="maximo" />
                </h3>
                <div className="w-12 h-12 rounded-full bg-maximo/20 flex items-center justify-center">
                  <UserRound className="w-6 h-6 text-maximo" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground font-medium">
                Male-Specific Biological OS
              </p>

              {/* Key Features */}
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-maximo-light mt-0.5 flex-shrink-0" />
                  <span>Testosterone & hormonal balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-maximo-light mt-0.5 flex-shrink-0" />
                  <span>Muscle synthesis & recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-maximo-light mt-0.5 flex-shrink-0" />
                  <span>Cardiovascular & metabolic tuning</span>
                </li>
              </ul>

              {/* CTA */}
              <Button
                onClick={() => navigate('/assessment?gender=maximo')}
                className="w-full bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 text-white font-medium h-12 transition-all duration-[280ms]"
              >
                Build My <BrandText variant="maximo" /> Protocol
              </Button>
            </div>

            {/* Animated bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maximo to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms]" />
          </div>
        </div>
      </div>
    </section>
  );
};
