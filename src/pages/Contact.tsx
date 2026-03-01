import { Mail, ArrowRight } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Contact <span className="text-[#FF1F23]">GenoMAX&#178;</span>
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          Questions about the platform, partnerships, or your protocol.
        </p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="gx-card p-8 text-center">
            <Mail className="w-8 h-8 text-[#009BFF] mx-auto mb-4" />
            <h3 className="text-sm font-bold text-white mb-2">General Inquiries</h3>
            <a href="mailto:hello@genomax2.ai" className="text-xs text-[#6B7A90] hover:text-[#009BFF] transition-colors font-mono">
              hello@genomax2.ai
            </a>
          </div>
          <div className="gx-card p-8 text-center">
            <Mail className="w-8 h-8 text-[#FF2D95] mx-auto mb-4" />
            <h3 className="text-sm font-bold text-white mb-2">B2B Partnerships</h3>
            <a href="mailto:partners@genomax2.ai" className="text-xs text-[#6B7A90] hover:text-[#FF2D95] transition-colors font-mono">
              partners@genomax2.ai
            </a>
            <p className="text-xs text-[#6B7A90]/60 mt-2">Sports teams, corporate wellness, medical practices</p>
          </div>
          <div className="gx-card p-8 text-center">
            <Mail className="w-8 h-8 text-[#FFD600] mx-auto mb-4" />
            <h3 className="text-sm font-bold text-white mb-2">Clinical & Research</h3>
            <a href="mailto:clinical@genomax2.ai" className="text-xs text-[#6B7A90] hover:text-[#FFD600] transition-colors font-mono">
              clinical@genomax2.ai
            </a>
            <p className="text-xs text-[#6B7A90]/60 mt-2">Evidence submissions, research collaboration</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-16 gx-card p-8">
          <h2 className="text-xl font-bold text-white mb-4 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>For Practitioners</h2>
          <p className="text-sm text-[#6B7A90] text-center mb-6">
            Doctors, nutritionists, and trainers who refer clients receive 10% recurring revenue share on each referred subscription for 12 months.
          </p>
          <div className="text-center">
            <a href="mailto:practitioners@genomax2.ai" className="gx-btn-primary inline-flex items-center gap-2">
              Apply for Practitioner Program <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="gx-section-surface text-center">
      <div className="container mx-auto px-4">
        <p className="text-xs text-[#6B7A90]/40 font-mono">genomax2.ai</p>
      </div>
    </section>
  </div>
);

export default Contact;
