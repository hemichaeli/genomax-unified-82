import { Link } from "react-router-dom";
import { Check, X, Shield, ArrowRight } from "lucide-react";

const competitors = [
  { name: "Bioniq", dna: true, blood: true, gender: false, safety: false, dosing: false, protocol_box: false, price: "$150/mo" },
  { name: "Rootine", dna: true, blood: true, gender: false, safety: false, dosing: false, protocol_box: false, price: "$70/mo" },
  { name: "Persona", dna: false, blood: false, gender: false, safety: false, dosing: false, protocol_box: false, price: "$66-92/mo" },
  { name: "InsideTracker", dna: true, blood: true, gender: false, safety: false, dosing: false, protocol_box: false, price: "$119-489" },
  { name: "Thorne", dna: false, blood: true, gender: false, safety: false, dosing: false, protocol_box: false, price: "$100-350/test" },
];

const features = [
  { key: "blood", label: "Blood Biomarker Analysis" },
  { key: "gender", label: "Gender-Optimized Protocols" },
  { key: "safety", label: "31 Safety Gates" },
  { key: "dosing", label: "Chronobiology Dosing Schedule" },
  { key: "protocol_box", label: "Protocol Box (Physical)" },
];

const Compare = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Shield className="w-3 h-3" />
            <span>Category Comparison</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            We Are Not a Supplement Brand.
            <br />
            <span className="text-[#FF1F23]">We Are a Biological Operating System.</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Others sell personalized supplements. We run a deterministic protocol engine with hard safety gates, gender-specific logic, and chronobiology-based dosing.
          </p>
        </div>
      </section>

      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A2030]">
                  <th className="text-left py-4 px-3 text-[#6B7A90] font-medium">Feature</th>
                  <th className="py-4 px-3 text-center">
                    <span className="font-bold text-white">Geno</span>
                    <span className="font-bold text-[#FF1F23]">MAX</span>
                    <sup className="text-[#FF1F23] text-[60%]">2</sup>
                  </th>
                  {competitors.map((c) => (
                    <th key={c.name} className="py-4 px-3 text-center text-[#6B7A90] font-medium">{c.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.key} className="border-b border-[#1A2030]/50">
                    <td className="py-4 px-3 text-white">{f.label}</td>
                    <td className="py-4 px-3 text-center"><Check className="w-5 h-5 text-[#00E676] mx-auto" /></td>
                    {competitors.map((c) => (
                      <td key={c.name} className="py-4 px-3 text-center">
                        {(c as any)[f.key] ? <Check className="w-4 h-4 text-[#6B7A90]/50 mx-auto" /> : <X className="w-4 h-4 text-[#6B7A90]/20 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-[#1A2030]/50">
                  <td className="py-4 px-3 text-white">DNA Testing</td>
                  <td className="py-4 px-3 text-center"><span className="text-xs text-[#FF1F23] font-mono">REJECTED</span></td>
                  {competitors.map((c) => (
                    <td key={c.name} className="py-4 px-3 text-center">
                      {c.dna ? <Check className="w-4 h-4 text-[#6B7A90]/50 mx-auto" /> : <X className="w-4 h-4 text-[#6B7A90]/20 mx-auto" />}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-3 text-white font-bold">Price</td>
                  <td className="py-4 px-3 text-center font-mono text-[#FF1F23] font-bold">$89-169/mo</td>
                  {competitors.map((c) => (
                    <td key={c.name} className="py-4 px-3 text-center font-mono text-[#6B7A90]">{c.price}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              The Difference Is Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="gx-card p-6">
                <h3 className="text-sm font-bold text-[#FF1F23] mb-3 uppercase tracking-wider">They Sell Supplements</h3>
                <div className="space-y-2 text-sm text-[#6B7A90]">
                  <p>Questionnaire-based recommendations</p>
                  <p>DNA testing with no clinical utility</p>
                  <p>Unisex formulations for all</p>
                  <p>Take with food suggestions</p>
                  <p>Commercial bias in ingredient selection</p>
                </div>
              </div>
              <div className="gx-card p-6" style={{ borderColor: 'rgba(255, 31, 35, 0.3)' }}>
                <h3 className="text-sm font-bold text-[#00E676] mb-3 uppercase tracking-wider">We Run a Biological OS</h3>
                <div className="space-y-2 text-sm text-white">
                  <p>41 blood biomarkers through 31 safety gates</p>
                  <p>Blood-only: DNA rejected based on evidence</p>
                  <p>Gender-optimized: MAXimo&#178; and MAXima&#178;</p>
                  <p>3-window chronobiology dosing schedule</p>
                  <p>Zero commercial override. Blood decides.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Ready to Upgrade Your Biology?
            </h2>
            <Link to="/assessment" className="gx-btn-primary inline-block">
              Initialize Your Protocol <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compare;
