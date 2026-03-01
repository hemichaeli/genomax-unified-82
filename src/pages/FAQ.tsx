import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What makes GenoMAX\u00B2 different from other supplement services?", a: "We are not a supplement company. We are a Biological Operating System. We use 41 blood biomarkers processed through 31 safety gates with gender-specific logic. No DNA testing (clinically useless per 524,592+ trial participants), no questionnaire-only recommendations, and zero commercial override of blood data." },
  { q: "Why do you reject DNA testing?", a: "Analysis of 524,592+ clinical trial participants demonstrates DNA-based supplement recommendations provide zero additional benefit beyond standard assessment. Blood biomarkers deliver real-time, actionable data. DNA provides static predispositions with minimal clinical utility for nutrient optimization." },
  { q: "What is the 3-month minimum?", a: "Meaningful biomarker changes require at least 90 days. This is a medical fact, not a billing trick. After 3 months, you retest and see measurable biological improvement, creating the most powerful retention mechanism: proof of efficacy." },
  { q: "What is the difference between MAXimo\u00B2 and MAXima\u00B2?", a: "MAXimo\u00B2 is male-optimized (testosterone support, prostate biomarkers, male iron metabolism). MAXima\u00B2 is female-optimized (hormonal cycle awareness, thyroid sensitivity, female iron metabolism, pregnancy safety gates). Both use identical clinical rigor with gender-specific interpretation." },
  { q: "What is the Protocol Box?", a: "A premium 31-day dosing organizer with morning (fasted), midday (with food), and evening (before sleep) compartments. Gender-coded trim. QR-linked to your MAXync\u00B2 dashboard. Included free with every subscription as a welcome gift." },
  { q: "How much does it cost?", a: "Essential: $89/mo. Pro: $139/mo. Elite: $169/mo. All with 3-month minimums. HSA/FSA eligible through our Truemed partnership, saving approximately 30%." },
  { q: "Why did you reject Ashwagandha?", a: "Documented hepatotoxicity including 3 deaths and 1 liver transplant. Despite strong efficacy data, safety always overrides profitability. Permanently rejected from all protocols." },
  { q: "Can I use HSA/FSA funds?", a: "Yes. Through our Truemed partnership, GenoMAX\u00B2 qualifies as preventative healthcare, enabling HSA/FSA payment with approximately 30% savings for eligible consumers." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Frequently Asked Questions</h1>
        </div>
      </section>
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="gx-card overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#6B7A90] flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (<div className="px-6 pb-6"><p className="text-sm text-[#6B7A90] leading-relaxed">{faq.a}</p></div>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
