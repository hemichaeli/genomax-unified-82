import { Link } from "react-router-dom";
import { Shield, Beaker, AlertTriangle, BookOpen, ArrowRight } from "lucide-react";

const Science = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <BookOpen className="w-3 h-3" />
            <span>The GenoMAX&#178; Manifesto</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Why We Built a Biological Operating System
            <br />
            <span className="text-[#FF1F23]">Instead of Another Supplement Brand</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-3xl mx-auto">
            The $46 billion personalized supplement industry is built on questionnaires, DNA tests, and marketing. The most clinically reliable data source, blood biomarkers, is being ignored or used superficially. This is not a market gap. It is a medical negligence the industry has normalized.
          </p>
        </div>
      </section>

      {/* POV 1: DNA useless */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="text-xs font-mono text-[#FF1F23] uppercase tracking-wider">POV Pillar 1</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                DNA Testing for Nutrition is Clinically Useless
              </h2>
              <p className="text-[#6B7A90] leading-relaxed">
                Analysis of 524,592+ clinical trial participants demonstrates that DNA-based supplement recommendations provide no additional benefit beyond standard assessment. The entire DNA-personalized supplements category is built on marketing, not medicine.
              </p>
              <p className="text-[#6B7A90] leading-relaxed">
                Blood biomarkers provide real-time, actionable data. DNA provides static predispositions with minimal clinical utility for nutrient optimization. Your genes tell you what might happen. Your blood tells you what is happening right now.
              </p>
            </div>
            <div className="gx-card p-8 text-center">
              <Beaker className="w-16 h-16 text-[#FF1F23] mx-auto mb-6" />
              <div className="font-mono text-5xl font-bold text-white mb-2">524,592+</div>
              <div className="text-sm text-[#6B7A90]">Clinical trial participants analyzed</div>
              <div className="mt-6 pt-6 border-t border-[#1A2030]">
                <div className="font-mono text-3xl font-bold text-[#FF1F23]">0%</div>
                <div className="text-xs text-[#6B7A90] mt-1">Additional benefit from DNA-based nutrition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POV 2: Unisex ignores biology */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="gx-card p-6 text-center" style={{ borderColor: "rgba(0, 155, 255, 0.2)" }}>
                  <div className="text-sm font-bold text-[#009BFF] mb-2">MAXimo&#178;</div>
                  <div className="space-y-2 text-xs text-[#6B7A90]">
                    <div>Testosterone support</div>
                    <div>Prostate biomarkers</div>
                    <div>Male iron metabolism</div>
                    <div>Non-menstruating calibration</div>
                  </div>
                </div>
                <div className="gx-card p-6 text-center" style={{ borderColor: "rgba(255, 45, 149, 0.2)" }}>
                  <div className="text-sm font-bold text-[#FF2D95] mb-2">MAXima&#178;</div>
                  <div className="space-y-2 text-xs text-[#6B7A90]">
                    <div>Hormonal cycle awareness</div>
                    <div>Thyroid sensitivity</div>
                    <div>Female iron metabolism</div>
                    <div>Pregnancy safety gates</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="text-xs font-mono text-[#FF1F23] uppercase tracking-wider">POV Pillar 2</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Unisex Supplements Ignore Fundamental Biology
              </h2>
              <p className="text-[#6B7A90] leading-relaxed">
                Iron metabolism, hormonal cycling, thyroid sensitivity, and micronutrient absorption all differ significantly between male and female physiology. A one-protocol-fits-all approach is the nutritional equivalent of prescribing the same eyeglasses to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POV 3: Timing */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="text-xs font-mono text-[#FF1F23] uppercase tracking-wider">POV Pillar 3</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Taking the Right Things at the Wrong Time Wastes Them
              </h2>
              <p className="text-[#6B7A90] leading-relaxed">
                Chronobiology and nutrient interaction science show that absorption and efficacy depend heavily on timing, stomach state, and co-ingestion.
              </p>
              <div className="space-y-3">
                {["Iron blocks zinc absorption when taken together", "Calcium competes with magnesium for receptor sites", "Fat-soluble vitamins (A, D, E, K) require dietary fat"].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[#FFD600] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#6B7A90]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gx-card p-8">
              <h3 className="text-lg font-bold text-white mb-6 text-center">Dosing Schedule</h3>
              <div className="space-y-4">
                {[
                  { time: "Morning", state: "Fasted", color: "#FFD600", desc: "Empty stomach nutrients, iron-only window" },
                  { time: "Midday", state: "With Food", color: "#00E676", desc: "Fat-soluble vitamins, mineral complexes" },
                  { time: "Evening", state: "Before Sleep", color: "#009BFF", desc: "Magnesium, sleep support, recovery modules" },
                ].map((d) => (
                  <div key={d.time} className="flex items-center gap-4 p-4 rounded-lg" style={{ background: "#111620", border: "1px solid #1A2030" }}>
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white">{d.time}</span>
                        <span className="font-mono text-xs" style={{ color: d.color }}>{d.state}</span>
                      </div>
                      <div className="text-xs text-[#6B7A90]">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloodwork Engine */}
      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>The Bloodwork Engine</h2>
          <p className="text-[#6B7A90] max-w-2xl mx-auto mb-12">Not an algorithm. A deterministic clinical engine that processes your biology through hard safety gates with zero commercial override.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            <div className="gx-evidence-capsule"><div className="counter">41</div><div className="label">Biomarkers</div></div>
            <div className="gx-evidence-capsule"><div className="counter">31</div><div className="label">Safety Gates</div></div>
            <div className="gx-evidence-capsule"><div className="counter">3</div><div className="label">Tier Classification</div></div>
            <div className="gx-evidence-capsule"><div className="counter">0</div><div className="label">Commercial Overrides</div></div>
          </div>
        </div>
      </section>

      {/* Safety Architecture */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Safety-First Architecture</h2>
            <div className="space-y-4">
              {[
                { icon: <Shield className="w-5 h-5 text-[#00E676]" />, title: "Tier 1: Strong Meta-Analytic Evidence", desc: "Multiple RCTs, 500+ participants, validated biomarkers, significant effect sizes. Only Tier 1 and Tier 2 ingredients enter production protocols." },
                { icon: <Shield className="w-5 h-5 text-[#FFD600]" />, title: "Tier 2: Contextual/Emerging Evidence", desc: "Promising clinical data with validated mechanisms. Included with appropriate context and monitoring recommendations." },
                { icon: <Shield className="w-5 h-5 text-[#FF1F23]" />, title: "Tier 3: Insufficient Evidence", desc: "Excluded from all production pipelines. No matter how profitable. No matter how popular." },
                { icon: <AlertTriangle className="w-5 h-5 text-[#FF1F23]" />, title: "Permanent Rejections", desc: "Ashwagandha permanently rejected despite strong efficacy data. Documented hepatotoxicity including 3 deaths and 1 liver transplant. Safety always overrides profitability." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-lg" style={{ background: "#0A0E14", border: i === 3 ? "1px solid rgba(255, 31, 35, 0.3)" : "1px solid #1A2030" }}>
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-[#6B7A90] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Blood Does Not Negotiate.</h2>
            <p className="text-[#6B7A90]">No ingredient enters a protocol because it is profitable. It enters because the blood data demands it.</p>
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Initialize Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;
