import { Link } from "react-router-dom";
import { Shield, Beaker, AlertTriangle, BookOpen, ArrowRight, Brain, RefreshCw, Layers, Zap, TrendingUp, Database } from "lucide-react";

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
            Why We Built an AI-Powered Biological Operating System
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
                Analysis of 524,592+ clinical trial participants demonstrates that DNA-based supplement recommendations provide no additional benefit beyond standard assessment. The effect sizes were negligible. The confidence intervals overlapped with placebo. The entire category of genetic nutrition testing produces outcomes indistinguishable from a five-minute questionnaire.
              </p>
              <p className="text-[#6B7A90] leading-relaxed">
                Blood biomarkers provide real-time, actionable data. DNA provides static predispositions with minimal clinical utility for nutrient optimization. Your genes tell you what might happen. Your blood tells you what is happening right now. Ferritin tells you if your iron stores are depleted or dangerously elevated. 25-hydroxyvitamin D tells you whether your body can absorb calcium, regulate immune function, and modulate gene expression. These are not abstract risk scores. They are real-time measurements.
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
                Iron metabolism differs fundamentally between sexes. Premenopausal women require dramatically different iron intake than men, and supplementing iron when ferritin is already elevated creates oxidative stress and organ damage. Hormonal cycling in women creates predictable fluctuations in micronutrient needs that no unisex protocol accounts for.
              </p>
              <p className="text-[#6B7A90] leading-relaxed">
                A supplement protocol that ignores these differences is not personalized. It is a generic product with your name printed on the label.
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
                Chronobiology and nutrient interaction science show that absorption and efficacy depend heavily on timing, stomach state, and co-ingestion. These are not edge cases. They are well-established pharmacokinetic interactions documented across thousands of clinical studies.
              </p>
              <div className="space-y-3">
                {["Iron blocks zinc absorption when taken together", "Calcium competes with magnesium for receptor sites", "Fat-soluble vitamins (A, D, E, K) require dietary fat", "Certain B vitamins taken before sleep interfere with circadian rhythms"].map((t, i) => (
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
          <p className="text-[#6B7A90] max-w-2xl mx-auto mb-12">A deterministic clinical interpretation system that maps your biomarkers through hard safety gates with zero commercial override.</p>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Safety Gates, Not Suggestions</h2>
            <p className="text-[#6B7A90] text-center mb-8 max-w-2xl mx-auto">
              When your ferritin is above 200 ng/mL, the system does not suggest reducing iron. It blocks iron-containing modules completely. Non-negotiably. There is no override button.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Shield className="w-5 h-5 text-[#00E676]" />, title: "Tier 1: Strong Meta-Analytic Evidence", desc: "Multiple RCTs, 500+ participants, validated biomarkers, significant effect sizes. Only Tier 1 and Tier 2 ingredients enter production protocols." },
                { icon: <Shield className="w-5 h-5 text-[#FFD600]" />, title: "Tier 2: Contextual/Emerging Evidence", desc: "Promising clinical data with validated mechanisms. Included with appropriate context and monitoring recommendations." },
                { icon: <Shield className="w-5 h-5 text-[#FF1F23]" />, title: "Tier 3: Insufficient Evidence", desc: "Excluded from all production pipelines. No matter how profitable. No matter how popular." },
                { icon: <AlertTriangle className="w-5 h-5 text-[#FF1F23]" />, title: "Permanent Rejections", desc: "Ashwagandha permanently rejected despite strong efficacy data. Documented hepatotoxicity including 3 deaths and 1 liver transplant. No ingredient enters a protocol because it is profitable. It enters because the evidence demands it and the safety data permits it." },
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

      {/* The Brain: AI Clinical Intelligence */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="gx-safety-badge w-fit">
                <Brain className="w-3 h-3" />
                <span>AI Clinical Intelligence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                The Brain: AI That Thinks in Biology
              </h2>
              <p className="text-[#6B7A90] leading-relaxed">
                Raw blood data is necessary. It is not sufficient. A list of biomarker values is just numbers until something interprets them in clinical context, weighs them against each other, resolves conflicts between competing priorities, and produces a coherent action plan.
              </p>
              <p className="text-[#6B7A90] leading-relaxed">
                When your iron is low but your CRP is elevated, the Brain recognizes that the iron reading may be suppressed by acute inflammation and holds iron supplementation until the next blood draw confirms true deficiency. When your vitamin D is suboptimal but you are already taking a calcium-heavy protocol, the Brain adjusts dosing to avoid hypercalcemia risk.
              </p>
              <p className="text-[#6B7A90] leading-relaxed">
                When your homocysteine is elevated, it does not blindly add B12. It cross-references your methylation markers, evaluates your folate and B6 status, and composes a methylation support protocol where every component has a clinical reason to be there.
              </p>
            </div>
            <div className="space-y-4">
              <div className="gx-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-5 h-5 text-[#009BFF]" />
                  <span className="text-sm font-bold text-white">Orchestrates Simultaneously</span>
                </div>
                <p className="text-xs text-[#6B7A90] leading-relaxed">Every biomarker, every safety gate, every nutrient interaction, and every gender-specific consideration. No human practitioner could assemble it as quickly or as consistently.</p>
              </div>
              <div className="gx-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-[#FFD600]" />
                  <span className="text-sm font-bold text-white">Explainability Engine</span>
                </div>
                <p className="text-xs text-[#6B7A90] leading-relaxed">Every module in your protocol comes with a plain-language explanation of why it was selected, what biomarker triggered it, what evidence supports it, and what the expected outcome is. You do not take anything on faith.</p>
              </div>
              <div className="gx-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-5 h-5 text-[#00E676]" />
                  <span className="text-sm font-bold text-white">Not a Lookup Table</span>
                </div>
                <p className="text-xs text-[#6B7A90] leading-relaxed">Other companies give you a list. GenoMAX&#178; gives you a mind that understands your biology and reasons across 218 precision modules to compose your protocol.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living System, Not Static Prescription */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="gx-safety-badge mx-auto w-fit mb-6">
              <RefreshCw className="w-3 h-3" />
              <span>Continuous Adaptation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              A Living System, Not a Static Prescription
            </h2>
            <p className="text-[#6B7A90] max-w-2xl mx-auto">
              Every other recommendation service hands you a protocol and walks away. Biology does not freeze. Your body changes. Your protocol must change with it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="gx-card p-8">
              <TrendingUp className="w-8 h-8 text-[#009BFF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Your Biology Evolves</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed mb-4">
                New blood work. New conditions. New medications. Age-related shifts. Pregnancy, menopause, training cycles, recovery periods.
              </p>
              <p className="text-sm text-[#6B7A90] leading-relaxed">
                Every quarterly blood draw feeds new data into the Bloodwork Engine. The Brain re-evaluates your entire protocol against your current biology. Modules are added, removed, or re-dosed. Safety gates activate or deactivate as your biomarkers move.
              </p>
            </div>
            <div className="gx-card p-8">
              <Beaker className="w-8 h-8 text-[#00E676] mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">The Science Evolves</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed mb-4">
                New meta-analyses published. New biomarkers validated. New safety signals identified. New drug-nutrient interactions discovered.
              </p>
              <p className="text-sm text-[#6B7A90] leading-relaxed">
                The platform absorbs new clinical evidence continuously, and your protocol benefits from it automatically. The value is not in the first protocol. It is in the tenth. The twentieth. It is in the compounding intelligence.
              </p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-8 p-6 rounded-lg text-center" style={{ background: "#0D1117", border: "1px solid rgba(255, 31, 35, 0.2)" }}>
            <p className="text-sm text-[#6B7A90] italic">
              A cheaper alternative can give you a list of supplements based on today's blood work. It cannot give you a system that remembers your ferritin was 180 ng/mL eight months ago, dropped to 65 after the Brain removed iron, and is now holding steady at 72. Static recommendations expire. Living systems compound.
            </p>
          </div>
        </div>
      </section>

      {/* Category Creation */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              The Category We Are Creating
            </h2>
            <p className="text-[#6B7A90] leading-relaxed">
              There is no existing market category for what GenoMAX&#178; does. Personalized supplements exist. Blood test companies exist. AI health platforms exist. But no platform combines real-time blood biomarker interpretation, gender-optimized formulation logic, AI-powered clinical orchestration, and chronobiology-based dosing into a single deterministic system with hard safety enforcement and continuous adaptation.
            </p>
            <p className="text-[#6B7A90] leading-relaxed">
              We are not entering a market. We are creating one. The category is Gender-Optimized Biological Operating Systems. Research on category creation shows that the company that defines a new category captures approximately 76% of the total market value in that space.
            </p>
            <p className="text-sm font-mono text-[#FF1F23]">This is not arrogance. It is arithmetic.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Your Blood Speaks. The Brain Listens.
              <br />
              <span className="text-[#FF1F23]">Your Protocol Evolves.</span>
            </h2>
            <p className="text-[#6B7A90]">No ingredient enters a protocol because it is profitable. It enters because the blood data demands it and the safety data permits it.</p>
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
