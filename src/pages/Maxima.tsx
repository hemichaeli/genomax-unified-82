import { Link } from "react-router-dom";
import { Shield, Heart, Activity, ArrowRight } from "lucide-react";

const Maxima = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: 'rgba(255,45,149,0.1)', border: '1px solid rgba(255,45,149,0.3)', color: '#FF2D95' }}>
            Female-Optimized BioOS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Inter Tight', sans-serif", color: '#FF2D95' }}>
            MAXima<sup className="text-[60%]">2</sup>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Engineered for female biology. Hormonal cycle awareness, thyroid sensitivity, female-specific iron metabolism, and pregnancy safety gates.
          </p>
        </div>
      </section>
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gx-card p-8" style={{ borderColor: 'rgba(255,45,149,0.2)' }}>
              <Heart className="w-8 h-8 text-[#FF2D95] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Hormonal Cycle Awareness</h3>
              <p className="text-sm text-[#6B7A90]">Protocols factor in menstrual cycle phase, perimenopause, and menopause status. Nutrient needs fluctuate with hormonal cycling. Your protocol adapts.</p>
            </div>
            <div className="gx-card p-8" style={{ borderColor: 'rgba(255,45,149,0.2)' }}>
              <Activity className="w-8 h-8 text-[#FF2D95] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Thyroid Sensitivity</h3>
              <p className="text-sm text-[#6B7A90]">Female thyroid function requires different interpretation ranges. TSH, T3, T4, and thyroid antibody markers inform module selection with gender-calibrated thresholds.</p>
            </div>
            <div className="gx-card p-8" style={{ borderColor: 'rgba(255,45,149,0.2)' }}>
              <Shield className="w-8 h-8 text-[#FF2D95] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Pregnancy Safety Gates</h3>
              <p className="text-sm text-[#6B7A90]">Hard blocks on contraindicated ingredients during pregnancy and breastfeeding. No graceful degradation. When safety data requires a block, the protocol enforces it.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Same Engine. Female-Specific Intelligence.</h2>
            <p className="text-[#6B7A90]">MAXima&#178; runs on the same Bloodwork Engine as MAXimo&#178;: 41 biomarkers, 31 safety gates, 3-tier evidence classification. The difference is in the interpretation layer, which applies female-specific clinical logic at every decision point.</p>
            <Link to="/assessment" className="gx-btn-primary inline-block" style={{ background: 'linear-gradient(135deg, #FF2D95 0%, #CC0066 100%)' }}>
              Initialize MAXima&#178; Protocol <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maxima;
