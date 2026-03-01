import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqData = [
  { q: "What is a Biological Operating System?", a: "GenoMAX\u00B2 is not a supplement brand. It is a platform that reads your blood chemistry, interprets it through gender-specific clinical logic, and generates a deterministic protocol. Modules, dosing schedules, and safety gates are driven entirely by your biomarker data, not questionnaires or DNA tests." },
  { q: "How is this different from Bioniq, Rootine, or Persona?", a: "Those platforms use questionnaires, DNA tests, or unisex formulations. GenoMAX\u00B2 processes 41 blood biomarkers through 31 safety gates with gender-specific interpretation. No commercial overrides. No ingredient gets into your protocol because it is profitable. It gets in because your blood data demands it." },
  { q: "Why gender-optimized instead of unisex?", a: "Iron metabolism, hormonal cycling, thyroid sensitivity, and micronutrient absorption all differ significantly between male and female physiology. MAXimo\u00B2 and MAXima\u00B2 are two distinct operating systems built for two distinct biologies." },
  { q: "Why don't you use DNA testing?", a: "Analysis of 524,592+ clinical trial participants demonstrates that DNA-based supplement recommendations provide no additional benefit beyond standard assessment. Blood biomarkers provide real-time, actionable data. DNA provides static predispositions with minimal clinical utility." },
  { q: "What are Safety Gates?", a: "31 hard-coded clinical rules that block dangerous combinations. For example, iron supplementation is automatically blocked when ferritin levels are elevated. CRP-based exceptions activate during acute inflammation. These gates cannot be overridden by users or commercial interests." },
  { q: "Why does timing matter?", a: "Iron blocks zinc absorption. Calcium competes with magnesium. Fat-soluble vitamins require dietary fat. The GenoMAX\u00B2 dosing schedule (morning fasted, midday with food, evening before sleep) is not convenience. It is a clinical requirement based on chronobiology." },
  { q: "What is the 3-month minimum?", a: "Meaningful biomarker changes require at least 90 days. The minimum subscription aligns with clinical reality: your first retest at 3 months shows measurable improvement, which is the strongest retention mechanism we have. Proof, not promises." },
  { q: "Is HSA/FSA eligible?", a: "We are working with Letter of Medical Necessity providers to enable HSA/FSA payment, positioning GenoMAX\u00B2 as preventative healthcare rather than a discretionary purchase." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Frequently Asked <span className="text-[#FF1F23]">Questions</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Blood does not negotiate. Neither do we with clinical accuracy.
          </p>
        </div>
      </section>

      <section className="gx-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {faqData.map((item, i) => (
              <div key={i} className="gx-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FF1F23] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-sm text-[#6B7A90] leading-relaxed border-t border-white/5 pt-4 animate-fade-up">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Still Have Questions?</h2>
          <Link to="/contact" className="gx-btn-primary inline-flex items-center gap-2">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
