import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, CreditCard, Shield, Clock } from "lucide-react";

const tiers = [
  {
    name: "Essential",
    price: "$89",
    period: "/month",
    target: "Health-conscious consumers starting optimization",
    features: ["OCR blood upload", "Protocol generation", "Basic modules", "3-window dosing schedule", "Protocol Box (welcome gift)", "Email support"],
    cta: "Start Essential",
    highlight: false,
    shopUrl: "/assessment?tier=essential",
  },
  {
    name: "Pro",
    price: "$139",
    period: "/month",
    target: "Performance-focused adults, athletes",
    features: ["Everything in Essential", "Expanded biomarker panel", "MAXync\u00B2 daily execution layer", "Quarterly retest reminders", "Trend dashboard", "Priority support"],
    cta: "Start Pro",
    highlight: true,
    shopUrl: "/assessment?tier=pro",
  },
  {
    name: "Elite",
    price: "$169",
    period: "/month",
    target: "Executives, elite athletes, longevity-focused",
    features: ["Everything in Pro", "White-label blood kit (when available)", "Advanced analytics", "Drug-nutrient interaction screening", "Dedicated account manager", "Early access to new modules"],
    cta: "Start Elite",
    highlight: false,
    shopUrl: "/assessment?tier=elite",
  },
];

const faqs = [
  { q: "Why a 3-month minimum?", a: "Meaningful biomarker changes require at least 90 days. This is not a billing tactic. It is a clinical fact supported by supplement research timelines." },
  { q: "Can I switch tiers?", a: "Yes. You can upgrade or downgrade at the start of any billing cycle. Your protocol data carries over." },
  { q: "What if a safety gate blocks a module?", a: "Your protocol adjusts. If your ferritin is elevated, iron is blocked. If CRP indicates acute inflammation, affected modules pause. Blood does not negotiate." },
  { q: "Do I need new blood work?", a: "You can upload existing lab results from any provider. Our OCR engine supports PDF, PNG, JPEG. We recommend retesting every 90 days for protocol optimization." },
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

      {/* Tier cards */}
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
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-mono text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-[#6B7A90]">{tier.period}</span>
                </div>
                <p className="text-xs text-[#6B7A90]/60 mb-4">Billed monthly. 3-month minimum.</p>
                <p className="text-xs text-[#6B7A90] mb-6">{tier.target}</p>
                <div className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#00E676] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#6B7A90]">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={tier.shopUrl}
                  className={`text-center text-sm font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    tier.highlight ? "gx-btn-primary w-full" : "gx-btn-outline w-full"
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Browse modules link */}
          <div className="text-center mt-8">
            <Link to="/shop" className="text-sm text-[#6B7A90] hover:text-white transition-colors">
              Want to browse individual modules first? Visit the Module Catalog &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol Box */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Star className="w-8 h-8 text-[#FFD600] mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Every Subscriber Gets the Protocol Box</h2>
              <p className="text-[#6B7A90] mb-4">A premium 31-day dosing organizer with morning/midday/evening compartments matching your chronobiology-based dosing schedule.</p>
              <div className="space-y-2">
                {["Daily physical brand touchpoint", "Morning/Midday/Evening compartments", "MAXimo\u00B2 or MAXima\u00B2 color trim", "QR code linked to your MAXync\u00B2 view"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#FFD600]" />
                    <span className="text-sm text-[#6B7A90]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gx-card p-8 text-center">
              <div className="w-full aspect-square rounded-lg bg-[#0A0E1A] border border-[#1A2030] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📦</div>
                  <p className="text-xs text-[#6B7A90] font-mono">PROTOCOL BOX</p>
                  <p className="text-xs text-[#6B7A90]/50 mt-1">Soft-touch matte dark navy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSA/FSA */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto gx-card p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#00E676]/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-[#00E676]" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>HSA/FSA Eligible</h3>
                <p className="text-sm text-[#6B7A90]">GenoMAX&#178; protocols qualify as preventative healthcare. Save approximately 30% with pre-tax health spending accounts through our Truemed partnership for Letter of Medical Necessity.</p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-2 rounded-full bg-[#00E676]/10 text-[#00E676] text-sm font-bold">~30% savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison strip */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Why GenoMAX&#178; is Different</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="gx-card p-6 text-center">
              <Shield className="w-8 h-8 text-[#FF1F23] mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">31 Safety Gates</h3>
              <p className="text-xs text-[#6B7A90]">Hard blocks when blood data requires it. No override. No exceptions. Competitors use 0.</p>
            </div>
            <div className="gx-card p-6 text-center">
              <Star className="w-8 h-8 text-[#009BFF] mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Gender-Optimized</h3>
              <p className="text-xs text-[#6B7A90]">Two distinct product lines. MAXimo&#178; and MAXima&#178;. Not relabeled unisex formulas.</p>
            </div>
            <div className="gx-card p-6 text-center">
              <Clock className="w-8 h-8 text-[#FFD600] mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Chronobiology Dosing</h3>
              <p className="text-xs text-[#6B7A90]">Morning fasted. Midday with food. Evening before sleep. Clinical timing, not convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Frequently Asked</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="gx-card p-6">
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-[#6B7A90]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Ready to Initialize?</h2>
          <p className="text-[#6B7A90] mb-8">Your blood work. Your protocol. Your biology optimized.</p>
          <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
            Start Your Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
