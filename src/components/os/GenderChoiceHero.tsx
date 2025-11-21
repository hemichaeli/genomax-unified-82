import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const GenderChoiceHero = () => {
  const navigate = useNavigate();

  const handleGenderSelect = (gender: "maxima" | "maximo") => {
    navigate(`/assessment?gender=${gender}`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* MAXima² Card */}
      <div
        onClick={() => handleGenderSelect("maxima")}
        className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-[220ms] hover:translate-y-[-6px] hover:scale-[1.02]"
        style={{
          background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid hsl(280 85% 45% / 0.3)",
          boxShadow: "0 8px 32px hsl(280 85% 45% / 0.15)",
        }}
      >
        <div className="p-10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">
              <span className="text-accent">MAX</span>
              <span className="bg-gradient-to-r from-maxima to-maxima-light bg-clip-text text-transparent">
                ima²
              </span>
            </h2>
            <div className="w-3 h-3 rounded-full bg-maxima-light animate-os-breathing" />
          </div>
          <p className="text-lg text-muted-foreground">
            Female-Optimized Biological OS
          </p>
          <Button
            className="w-full bg-gradient-to-r from-maxima to-maxima-light hover:opacity-90 text-white font-medium h-12 transition-all duration-[220ms] group-hover:shadow-[0_0_24px_hsl(330_100%_68%/0.4)]"
          >
            Build my <span className="text-accent font-bold">MAX</span>ima² OS
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maxima-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[220ms]" />
      </div>

      {/* MAXimo² Card */}
      <div
        onClick={() => handleGenderSelect("maximo")}
        className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-[220ms] hover:translate-y-[-6px] hover:scale-[1.02]"
        style={{
          background: "linear-gradient(135deg, hsl(220 10% 98% / 0.05) 0%, hsl(220 10% 98% / 0.02) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid hsl(213 100% 40% / 0.3)",
          boxShadow: "0 8px 32px hsl(213 100% 40% / 0.15)",
        }}
      >
        <div className="p-10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">
              <span className="text-accent">MAX</span>
              <span className="bg-gradient-to-r from-maximo to-maximo-light bg-clip-text text-transparent">
                imo²
              </span>
            </h2>
            <div className="w-3 h-3 rounded-full bg-maximo-light animate-os-breathing" />
          </div>
          <p className="text-lg text-muted-foreground">
            Male-Optimized Biological OS
          </p>
          <Button
            className="w-full bg-gradient-to-r from-maximo to-maximo-light hover:opacity-90 text-white font-medium h-12 transition-all duration-[220ms] group-hover:shadow-[0_0_24px_hsl(186_100%_64%/0.4)]"
          >
            Build my <span className="text-accent font-bold">MAX</span>imo² OS
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-maximo-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[220ms]" />
      </div>
    </div>
  );
};
