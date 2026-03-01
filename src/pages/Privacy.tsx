const Privacy = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-[#6B7A90]">Last updated: March 2026</p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-10">
          {[
            { h: "Introduction", p: "GenoMAX\u00B2 (\"GenoMAX\u00B2\", \"we\", \"us\") is committed to protecting your privacy and the security of your health data. This policy explains how we collect, use, and safeguard your personal and biological information." },
            { h: "Health Data We Collect", p: "We collect blood biomarker data you upload or that is received through integrated lab partners. This includes up to 41 biomarkers processed through our Bloodwork Engine. We also collect assessment data (gender, age, lifestyle factors, medication use) and protocol adherence data through MAXync\u00B2." },
            { h: "How We Use Your Data", p: "Your blood biomarker data is used exclusively to generate your personalized protocol through the Bloodwork Engine. Gender-specific interpretation ensures accurate clinical logic. We do not use your health data for advertising, marketing to third parties, or any purpose beyond protocol generation and safety monitoring." },
            { h: "Safety-First Data Processing", p: "All biomarker data passes through 31 safety gates before protocol generation. This includes hard blocks for clinical contraindications, CRP-based inflammation exceptions, and iron-ferritin safety checks. Your biological data always takes precedence over commercial considerations." },
            { h: "Data Security", p: "We maintain HIPAA-compliant data handling practices and SOC 2 Type II security standards. All health data is encrypted at rest and in transit. Access to individual health records is restricted to essential system processes only." },
            { h: "Data Retention and Deletion", p: "Your biomarker history is retained to enable trend visualization and protocol optimization over time. You may request complete deletion of all personal and health data at any time by contacting privacy@genomax2.ai. Deletion is permanent and irreversible." },
            { h: "Third-Party Sharing", p: "We do not sell, rent, or share your personal health data with third parties. Lab integration partners receive only the minimum data required to process test orders. Anonymized, aggregated data may be used for clinical research and platform improvement." },
            { h: "Your Rights", p: "You have the right to access, correct, export, and delete your personal data. You may withdraw consent for data processing at any time. Contact privacy@genomax2.ai for any privacy-related requests." },
            { h: "Contact", p: "For questions about this privacy policy: privacy@genomax2.ai" },
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

export default Privacy;
