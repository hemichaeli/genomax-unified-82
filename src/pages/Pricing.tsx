import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Essential",
    price: "$89",
    target: "Health-conscious consumers starting optimization",
    features: ["OCR blood upload", "Protocol generation", "Basic modules", "3-window dosing schedule", "Protocol Box (welcome gift)", "Email support"],
    cta: "Start Essential",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$139",
    target: "Performance-focused adults, athletes",
    features: ["Everything in Essential", "Expanded biomarker panel", "MAXync\u00B2 daily execution layer", "Quarterly retest reminders", "Trend dashboard", "Priority support"],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$169",
    target: "Executives, elite athletes, longevity-focused",
    features: ["Everything in Pro", "White-label blood kit (when available)", "Advanced analytics", "Drug-nutrient interaction screening", "Dedicated account manager", "Early access to new modules"],
    cta: "Start Elite",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Invest in Your Biology
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            All tiers include 3-month minimum subscriptions. Meaningful biomarker changes require at least 90 days. This is not a billing trick. It is a medical fact.
          </p>
        </div>
      </section>

      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div key={tier.name} className={`gx-card p-8 flex flex-col ${tier.highlight ? "ring-2 ring-[#FF1F23] relative" : ""}`}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono font-bold text-white bg-[#FF1F23]">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-mono text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-[#6B7A90]">/month</span>
                </div>
                <p className="text-xs text-[#6B7A90] mb-6">{tier.target}</p>
                <div className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#00E676] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#6B7A90]">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/assessment" className={`text-center text-sm font-medium py-3 px-6 rounded-lg transition-colors ${tier.highlight ? "gx-btn-primary w-full justify-center" : "gx-btn-outline w-full justify-center"}`}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Box */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Star className="w-8 h-8 text-[#FFD600] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Every Subscriber Gets the Protocol Box</h2>
            <p className="text-[#6B7A90] mb-4">A premium 31-day dosing organizer with morning/midday/evening compartments matching your chronobiology-based dosing schedule. Soft-touch matte dark navy finish with your sub-brand accent color.</p>
            <p className="text-xs text-[#6B7A90]/60">Not packaging. A precision instrument for protocol execution.</p>
          </div>
        </div>
      </section>

      {/* HSA/FSA */}
      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>HSA/FSA Eligible</h2>
            <p className="text-[#6B7A90]">GenoMAX&#178; protocols qualify as preventative healthcare. Save approximately 30% with pre-tax health spending accounts. Partnership with Truemed for Letter of Medical Necessity.</p>
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Initialize Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
