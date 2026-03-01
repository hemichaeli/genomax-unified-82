const Disclaimer = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Medical Disclaimer
        </h1>
        <p className="text-sm text-[#6B7A90]">Last updated: March 2026</p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-10">
          {[
            { h: "Not Medical Advice", p: "GenoMAX\u00B2 is a supplement protocol platform, not a medical device. The Bloodwork Engine processes blood biomarker data to generate evidence-based supplement recommendations, but these do not constitute medical diagnosis, treatment, or advice. Always consult a qualified healthcare provider before starting any supplement protocol." },
            { h: "Safety Gate Architecture", p: "The 31 safety gates in the Bloodwork Engine are designed to prevent known dangerous combinations and contraindications. However, no automated system can account for every individual medical circumstance. The safety gates reduce risk but do not eliminate it. Users with complex medical conditions, multiple medications, or rare metabolic disorders should seek direct medical supervision." },
            { h: "Blood Data Interpretation", p: "Biomarker interpretation follows published clinical reference ranges and meta-analytic evidence. Individual results may vary. Optimal ranges used by GenoMAX\u00B2 may differ from clinical pathology ranges. The system flags values outside standard ranges but does not diagnose medical conditions." },
            { h: "Supplement Limitations", p: "Dietary supplements are not intended to diagnose, treat, cure, or prevent any disease. Statements about specific modules and ingredients are based on published research but have not been evaluated by the FDA. Individual biological responses to supplementation vary significantly." },
            { h: "Pregnancy and Nursing", p: "Women who are pregnant, planning to become pregnant, or nursing should consult their healthcare provider before using any GenoMAX\u00B2 protocol. MAXima\u00B2 includes pregnancy safety gates, but these do not replace professional prenatal medical guidance." },
            { h: "Drug-Nutrient Interactions", p: "If you are taking prescription medications, consult your prescribing physician before starting a GenoMAX\u00B2 protocol. Certain supplements can interact with medications including blood thinners, thyroid medications, immunosuppressants, and others. Phase 4 drug-nutrient interaction screening is planned but not yet active." },
            { h: "Ingredient Rejections", p: "GenoMAX\u00B2 permanently rejects certain ingredients based on safety evidence regardless of efficacy data. For example, Ashwagandha is permanently excluded due to documented hepatotoxicity including reported deaths. These decisions prioritize safety over commercial value." },
            { h: "Emergency Situations", p: "GenoMAX\u00B2 is not an emergency medical service. If you experience adverse reactions to any supplement, discontinue use immediately and contact your healthcare provider or emergency services." },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{s.h}</h2>
              <p className="text-sm text-[#6B7A90] leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Disclaimer;
