import { Link } from "react-router-dom";
import { Building2, Users, Trophy, ArrowRight } from "lucide-react";

const Organizations = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Building2 className="w-3 h-3" />
            <span>B2B Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>GenoMAX&#178; for <span className="text-[#FF1F23]">Organizations</span></h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">White-labeled bloodwork integration and branded protocol delivery for elite sports teams, corporate wellness programs, and boutique medical practices.</p>
        </div>
      </section>
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gx-card p-8 text-center">
              <Trophy className="w-10 h-10 text-[#009BFF] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Elite Sports Teams</h3>
              <p className="text-sm text-[#6B7A90]">Gender-optimized protocols for peak athletic performance. Biomarker-driven nutrition at the team level.</p>
            </div>
            <div className="gx-card p-8 text-center">
              <Building2 className="w-10 h-10 text-[#00E676] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Corporate Wellness</h3>
              <p className="text-sm text-[#6B7A90]">Employee health optimization programs with measurable biomarker improvements. ROI through reduced sick days and improved focus.</p>
            </div>
            <div className="gx-card p-8 text-center">
              <Users className="w-10 h-10 text-[#FF2D95] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Medical Practices</h3>
              <p className="text-sm text-[#6B7A90]">Complement clinical care with precision supplement protocols. 10% recurring revenue share for 12 months per referred subscription.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Partnership Inquiry</h2>
            <p className="text-[#6B7A90]">Each partner receives white-labeled bloodwork integration, branded protocol delivery, and dedicated support. Revenue share structures replace upfront costs.</p>
            <Link to="/contact" className="gx-btn-primary inline-block">Contact Us <ArrowRight className="w-4 h-4 inline ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organizations;
