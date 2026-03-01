const Terms = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Terms of Service
        </h1>
        <p className="text-sm text-[#6B7A90]">Last updated: March 2026</p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-10">
          {[
            { h: "Agreement to Terms", p: "By using the GenoMAX\u00B2 platform and services at genomax2.ai, you agree to these terms. GenoMAX\u00B2 is a Biological Operating System that generates supplement protocols based on blood biomarker analysis. If you do not agree to these terms, do not use the platform." },
            { h: "Service Description", p: "GenoMAX\u00B2 processes blood biomarker data through a gender-optimized clinical engine (the \"Bloodwork Engine\") to generate personalized supplement protocols. The platform offers two distinct product lines: MAXimo\u00B2 (male-optimized) and MAXima\u00B2 (female-optimized). Protocols include specific modules, dosing schedules, and safety gate enforcement." },
            { h: "Subscription Terms", p: "All subscriptions operate on 3-month minimum terms with monthly billing. This minimum aligns with the clinical reality that meaningful biomarker changes require at least 90 days. Three tiers are available: Essential ($89/month), Pro ($139/month), and Elite ($169/month). Cancellation is permitted after the initial 3-month period." },
            { h: "Medical Disclaimer", p: "GenoMAX\u00B2 is not a medical device and does not provide medical diagnosis, treatment, or advice. Protocols are generated from published clinical evidence and blood biomarker interpretation but are not substitutes for professional medical care. Always consult your physician before starting any supplement protocol, especially if you are pregnant, nursing, taking medications, or have existing health conditions." },
            { h: "Safety Gates and Limitations", p: "The Bloodwork Engine enforces 31 safety gates that may block certain modules based on your biomarker data. These blocks are non-negotiable and cannot be overridden. If your blood data indicates a contraindication, the system will not include the relevant module regardless of user preference." },
            { h: "Blood Data Accuracy", p: "You are responsible for the accuracy of blood test results uploaded to the platform. GenoMAX\u00B2 processes data as received and cannot verify the accuracy of external lab results. Inaccurate input data will produce inaccurate protocols." },
            { h: "Intellectual Property", p: "The GenoMAX\u00B2 platform, Bloodwork Engine, safety gate architecture, protocol generation logic, and all associated branding (including MAXimo\u00B2, MAXima\u00B2, MAXync\u00B2, and the \"Blood does not negotiate\" tagline) are proprietary intellectual property. No reproduction, distribution, or derivative use is permitted without written consent." },
            { h: "Limitation of Liability", p: "GenoMAX\u00B2 shall not be liable for any adverse health outcomes resulting from supplement use. Individual biological responses vary. The platform provides evidence-based protocols but cannot guarantee specific health outcomes." },
            { h: "Governing Law", p: "These terms are governed by applicable law. Disputes shall be resolved through binding arbitration." },
            { h: "Contact", p: "For questions about these terms: legal@genomax2.ai" },
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

export default Terms;
