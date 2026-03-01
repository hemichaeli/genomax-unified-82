import { Link } from "react-router-dom";
import { Shield, Zap, Activity, ArrowRight } from "lucide-react";

const Maximo = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-mono mb-6" style={{ background: 'rgba(0,155,255,0.1)', border: '1px solid rgba(0,155,255,0.3)', color: '#009BFF' }}>
            Male-Optimized BioOS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Inter Tight', sans-serif", color: '#009BFF' }}>
            MAXimo<sup className="text-[60%]">2</sup>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Engineered for male biology. Testosterone support, prostate biomarkers, male-specific iron metabolism, and non-menstruating hormonal calibration.
          </p>
        </div>
      </section>
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gx-card p-8" style={{ borderColor: 'rgba(0,155,255,0.2)' }}>
              <Zap className="w-8 h-8 text-[#009BFF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Testosterone Optimization</h3>
              <p className="text-sm text-[#6B7A90]">Biomarker-driven protocols targeting free and total testosterone, SHBG, and related metabolic markers. No generic boosters. Only what your blood demands.</p>
            </div>
            <div className="gx-card p-8" style={{ borderColor: 'rgba(0,155,255,0.2)' }}>
              <Shield className="w-8 h-8 text-[#009BFF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Prostate Health Gates</h3>
              <p className="text-sm text-[#6B7A90]">PSA-aware safety gates. Protocols automatically adjust when prostate biomarkers indicate caution. No manual override.</p>
            </div>
            <div className="gx-card p-8" style={{ borderColor: 'rgba(0,155,255,0.2)' }}>
              <Activity className="w-8 h-8 text-[#009BFF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Male Iron Metabolism</h3>
              <p className="text-sm text-[#6B7A90]">Calibrated for non-menstruating physiology. Iron is blocked when ferritin is elevated. No exceptions. Blood does not negotiate.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Same Engine. Male-Specific Intelligence.</h2>
            <p className="text-[#6B7A90]">MAXimo&#178; runs on the same Bloodwork Engine as MAXima&#178;: 41 biomarkers, 31 safety gates, 3-tier evidence classification. The difference is in the interpretation layer, which applies male-specific clinical logic at every decision point.</p>
            <Link to="/assessment" className="gx-btn-primary inline-block" style={{ background: 'linear-gradient(135deg, #009BFF 0%, #0066CC 100%)' }}>
              Initialize MAXimo&#178; Protocol <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maximo;
