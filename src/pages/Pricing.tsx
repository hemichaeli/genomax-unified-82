import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Shield, CreditCard } from "lucide-react";

const SHOPIFY_MAXIMO = "https://genomax-2.myshopify.com";
const SHOPIFY_MAXIMA = "https://fetkqh-60.myshopify.com";

const tiers = [
  {
    name: "Essential",
    price: "$89",
    period: "/month",
    commitment: "3-month minimum",
    target: "Health-conscious consumers starting optimization",
    features: ["OCR blood upload", "Protocol generation", "Basic modules", "3-window dosing schedule", "Protocol Box (welcome gift)", "Email support"],
    cta: "Start Essential",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$139",
    period: "/month",
    commitment: "3-month minimum",
    target: "Performance-focused adults, athletes",
    features: ["Everything in Essential", "Expanded biomarker panel", "MAXync\u00B2 daily execution layer", "Quarterly retest reminders", "Trend dashboard", "Priority support"],
    cta: "Start Pro",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$169",
    period: "/month",
    commitment: "3-month minimum",
    target: "Executives, elite athletes, longevity-focused",
    features: ["Everything in Pro", "White-label blood kit (when available)", "Advanced analytics", "Drug-nutrient interaction screening", "Dedicated account manager", "Early access to new modules"],
    cta: "Start Elite",
    highlight: false,
  },
];

const Pricing = () => {
  const handleTierSelect = (tierName: string) => {
    try { sessionStorage.setItem("gx_tier", tierName.toLowerCase()); } catch {}
  };

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Invest in Your Biology
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            All tiers operate on 3-month minimum subscriptions. Meaningful biomarker changes require at least 90 days. This is not a billing trick. It is a medical fact.
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
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-mono text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-[#6B7A90]">{tier.period}</span>
                </div>
                <p className="text-xs text-[#6B7A90]/60 mb-2 font-mono">{tier.commitment}</p>
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
                  to="/assessment"
                  onClick={() => handleTierSelect(tier.name)}
                  className={`text-center text-sm font-medium py-3 px-6 rounded-lg transition-colors mb-3 block ${
                    tier.highlight ? "gx-btn-primary w-full justify-center" : "gx-btn-outline w-full justify-center"
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>

                <div className="flex gap-2">
                  <a
                    href={`${SHOPIFY_MAXIMO}/collections/all`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs py-2 px-3 rounded border border-[#00AEEF]/30 text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors"
                  >
                    MAXimo&#178; Modules
                  </a>
                  <a
                    href={`${SHOPIFY_MAXIMA}/collections/all`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs py-2 px-3 rounded border border-[#E6007A]/30 text-[#E6007A] hover:bg-[#E6007A]/10 transition-colors"
                  >
                    MAXima&#178; Modules
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="gx-card p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#00E676]/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-[#00E676]" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>HSA/FSA Eligible</h2>
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#00E676]/10 text-[#00E676]">Save ~30%</span>
                </div>
                <p className="text-sm text-[#6B7A90]">GenoMAX&#178; protocols qualify as preventative healthcare. Use pre-tax health spending accounts via Letter of Medical Necessity through our Truemed partnership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4">
          <Shield className="w-8 h-8 text-[#FF1F23] mx-auto" />
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Blood Does Not Negotiate</h2>
          <p className="text-[#6B7A90]">Every protocol is generated deterministically from your blood biomarker data. No commercial override. No ingredient gets into a protocol because it is profitable. It gets in because the blood data demands it.</p>
          <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
            Initialize Your Protocol <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
