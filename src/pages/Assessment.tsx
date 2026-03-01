import { Link } from "react-router-dom";
import { Upload, FileText, ArrowRight, Clock } from "lucide-react";

const Assessment = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Initialize Your <span className="text-[#FF1F23]">Protocol</span>
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          The Bloodwork Engine needs your data. Upload existing blood work results or order a kit.
        </p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="gx-card p-8 text-center">
            <Upload className="w-12 h-12 text-[#009BFF] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Upload Blood Work</h3>
            <p className="text-sm text-[#6B7A90] mb-6">Upload existing lab results from any provider. Our OCR engine extracts biomarker values automatically. PDF, PNG, JPEG supported.</p>
            <div className="border-2 border-dashed border-[#1A2030] rounded-lg p-8 hover:border-[#009BFF]/40 transition-colors cursor-pointer">
              <FileText className="w-8 h-8 text-[#6B7A90] mx-auto mb-2" />
              <p className="text-sm text-[#6B7A90]">Drop your lab results here</p>
              <p className="text-xs text-[#6B7A90]/50 mt-1">or click to browse</p>
            </div>
          </div>

          <div className="gx-card p-8 text-center relative">
            <div className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-mono bg-[#FFD600]/10 text-[#FFD600]">Coming Q2 2026</div>
            <Clock className="w-12 h-12 text-[#6B7A90]/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Order Blood Kit</h3>
            <p className="text-sm text-[#6B7A90] mb-6">White-label at-home blood collection kit via Vital/Junction integration. End-to-end experience with no external lab visit needed.</p>
            <div className="border-2 border-dashed border-[#1A2030]/50 rounded-lg p-8 opacity-50">
              <p className="text-sm text-[#6B7A90]">Kit ordering coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="gx-section-surface text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>What Happens Next</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
          {[
            { step: "1", title: "Upload Processed", desc: "OCR extracts biomarker values. Manual QA on flagged results." },
            { step: "2", title: "Engine Runs", desc: "41 biomarkers through 31 safety gates. Gender-specific interpretation." },
            { step: "3", title: "Protocol Generated", desc: "Modules, dosing schedule, clinical evidence. Your first shipment follows." },
          ].map((s) => (
            <div key={s.step} className="gx-card p-6">
              <div className="font-mono text-xl font-bold text-[#FF1F23] mb-2">{s.step}</div>
              <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-[#6B7A90]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Assessment;
