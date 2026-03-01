import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Activity } from "lucide-react";

const Maxima = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gx-safety-badge mx-auto w-fit mb-6" style={{ borderColor: "rgba(255, 45, 149, 0.3)", color: "#FF2D95" }}>
          <Activity className="w-3 h-3" />
          <span>Female-Optimized BioOS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Inter Tight', sans-serif", color: "#FF2D95" }}>
          MAXima&#178;
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          The female-optimized Biological Operating System. Engineered around hormonal cycling, thyroid sensitivity, and female-specific metabolic needs.
        </p>
      </div>
    </section>

    <section className="gx-section-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Heart className="w-6 h-6 text-[#FF2D95]" />, title: "Hormonal Cycle Awareness", desc: "Protocol adjustments account for menstrual cycle phases. Iron, B-vitamins, and magnesium needs fluctuate throughout the cycle." },
            { icon: <Activity className="w-6 h-6 text-[#FF2D95]" />, title: "Thyroid Sensitivity", desc: "Female thyroid dysfunction is 5-8x more common. TSH, T3, T4 interpretation uses female-specific reference ranges." },
            { icon: <Shield className="w-6 h-6 text-[#FF2D95]" />, title: "Female Iron Metabolism", desc: "Menstruating calibration means different ferritin thresholds. Iron supplementation actively supported when menstrual losses deplete stores." },
            { icon: <Shield className="w-6 h-6 text-[#FF2D95]" />, title: "Pregnancy Safety Gates", desc: "Hard blocks on ingredients contraindicated during pregnancy. No graceful degradation. Vitamin A retinol capped. Certain herbs permanently excluded." },
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
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Same Engine. Female Calibration.</h2>
        <p className="text-[#6B7A90] max-w-2xl mx-auto mb-8">41 biomarkers. 31 safety gates. 3-window dosing. The Bloodwork Engine is identical. The interpretation logic is gender-specific.</p>
        <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
          Initialize MAXima&#178; Protocol <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Maxima;
