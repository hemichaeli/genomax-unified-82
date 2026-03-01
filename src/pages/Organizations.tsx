import { Link } from "react-router-dom";
import { ArrowRight, Building2, Trophy, Stethoscope, Users } from "lucide-react";

const Organizations = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          GenoMAX&#178; for <span className="text-[#FF1F23]">Organizations</span>
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          White-labeled bloodwork integration and branded protocol delivery for sports teams, corporate wellness, and medical practices.
        </p>
      </div>
    </section>

    <section className="gx-section-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Trophy className="w-8 h-8 text-[#FFD600]" />, title: "Elite Sports Teams", desc: "Gender-specific protocols for male and female athletes. Biomarker tracking across seasons. Performance optimization backed by blood data." },
            { icon: <Building2 className="w-8 h-8 text-[#009BFF]" />, title: "Corporate Wellness", desc: "Employee health optimization programs. Aggregate anonymized data for organizational health insights. HSA/FSA eligible." },
            { icon: <Stethoscope className="w-8 h-8 text-[#00E676]" />, title: "Medical Practices", desc: "Practitioner referral channel. 10% recurring revenue share on each referred subscription for 12 months. White-label integration available." },
          ].map((item, i) => (
            <div key={i} className="gx-card p-8">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gx-section text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Partnership Inquiries</h2>
        <p className="text-[#6B7A90] max-w-2xl mx-auto mb-8">B2B partnerships deliver subscribers at near-zero acquisition cost. Revenue share structures replace upfront marketing spend with performance-based distribution.</p>
        <Link to="/contact" className="gx-btn-primary inline-flex items-center gap-2">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Organizations;
