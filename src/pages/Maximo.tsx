import { Link } from "react-router-dom";
import { ArrowRight, Shield, Activity, Zap } from "lucide-react";

const Maximo = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gx-safety-badge mx-auto w-fit mb-6" style={{ borderColor: "rgba(0, 155, 255, 0.3)", color: "#009BFF" }}>
          <Activity className="w-3 h-3" />
          <span>Male-Optimized BioOS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#009BFF" }}>
          MAXimo&#178;
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          The male-optimized Biological Operating System. Engineered around male-specific biomarker interpretation, hormone optimization, and metabolic calibration.
        </p>
      </div>
    </section>

    <section className="gx-section-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Zap className="w-6 h-6 text-[#009BFF]" />, title: "Testosterone Optimization", desc: "Biomarker-driven support for healthy testosterone levels. Zinc, vitamin D, magnesium calibrated to your bloodwork, not generic RDAs." },
            { icon: <Shield className="w-6 h-6 text-[#009BFF]" />, title: "Prostate Health Gates", desc: "PSA-aware safety architecture. The Bloodwork Engine monitors prostate-relevant biomarkers and adjusts protocols when flags appear." },
            { icon: <Activity className="w-6 h-6 text-[#009BFF]" />, title: "Male Iron Metabolism", desc: "Non-menstruating calibration means different ferritin thresholds. Iron supplementation blocked when ferritin is elevated. No exceptions." },
            { icon: <Shield className="w-6 h-6 text-[#009BFF]" />, title: "Cardiovascular Focus", desc: "Male-specific cardiovascular risk biomarkers including homocysteine, hs-CRP, and lipid panel interpretation calibrated for male physiology." },
          ].map((item, i) => (
            <div key={i} className="gx-card p-8">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gx-section text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Same Engine. Male Calibration.</h2>
        <p className="text-[#6B7A90] max-w-2xl mx-auto mb-8">41 biomarkers. 31 safety gates. 3-window dosing. The Bloodwork Engine is identical. The interpretation logic is gender-specific.</p>
        <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
          Initialize MAXimo&#178; Protocol <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Maximo;
