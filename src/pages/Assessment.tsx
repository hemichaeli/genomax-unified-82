import { Link } from "react-router-dom";
import { Upload, FileText, ArrowRight, Shield } from "lucide-react";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Shield className="w-3 h-3" />
            <span>Protocol Initialization</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Initialize Your <span className="text-[#FF1F23]">Protocol</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Upload your blood work results. The Bloodwork Engine processes 41 biomarkers through 31 safety gates to generate your gender-optimized protocol.
          </p>
        </div>
      </section>
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="gx-card p-8 text-center hover:border-[#FF1F23]/30 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-[#FF1F23] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Upload Blood Work</h3>
              <p className="text-sm text-[#6B7A90] mb-4">Upload a PDF or image of your existing blood test results. Our OCR engine extracts biomarker values automatically.</p>
              <Link to="/upload" className="gx-btn-primary inline-block text-sm">
                Upload Results <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
            <div className="gx-card p-8 text-center opacity-60">
              <FileText className="w-12 h-12 text-[#6B7A90] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Order Blood Kit</h3>
              <p className="text-sm text-[#6B7A90] mb-4">White-label blood test kit shipped to your door. Coming Q2 2026 via Vital/Junction integration.</p>
              <span className="inline-block px-4 py-2 rounded-lg text-xs font-mono text-[#6B7A90]" style={{ background: '#111620', border: '1px solid #1A2030' }}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
