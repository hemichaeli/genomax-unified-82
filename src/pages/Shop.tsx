import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Shop = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Your Protocol Starts With <span className="text-[#FF1F23]">Your Blood</span>
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-8">
          GenoMAX&#178; does not sell generic supplements. Every module in your protocol is determined by your blood biomarker data processed through 31 safety gates. Start with the assessment.
        </p>
        <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
          Begin Assessment <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="gx-card p-6 text-center">
            <div className="font-mono text-3xl font-bold text-white mb-2">01</div>
            <h3 className="text-sm font-bold text-white mb-2">Upload Blood Work</h3>
            <p className="text-xs text-[#6B7A90]">OCR processes your existing lab results or order a kit through our partner network.</p>
          </div>
          <div className="gx-card p-6 text-center">
            <div className="font-mono text-3xl font-bold text-white mb-2">02</div>
            <h3 className="text-sm font-bold text-white mb-2">Protocol Generated</h3>
            <p className="text-xs text-[#6B7A90]">41 biomarkers, 31 safety gates, gender-specific logic. Your protocol is deterministic.</p>
          </div>
          <div className="gx-card p-6 text-center">
            <div className="font-mono text-3xl font-bold text-white mb-2">03</div>
            <h3 className="text-sm font-bold text-white mb-2">Modules Ship</h3>
            <p className="text-xs text-[#6B7A90]">Your Protocol Box arrives with morning, midday, and evening compartments matching your dosing schedule.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="gx-section-surface text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-[#6B7A90] mb-4">No blood data = no protocol. That is the standard.</p>
        <Link to="/pricing" className="gx-btn-outline inline-block">View Pricing Tiers</Link>
      </div>
    </section>
  </div>
);

export default Shop;
