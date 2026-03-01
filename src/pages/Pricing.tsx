import { Link } from "react-router-dom";
import { Check, X, Shield, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Essential",
    price: 89,
    target: "Health-conscious consumers starting optimization",
    features: [
      { text: "OCR blood upload", included: true },
      { text: "Protocol generation (41 biomarkers)", included: true },
      { text: "Basic modules", included: true },
      { text: "Chronobiology dosing schedule", included: true },
      { text: "Protocol Box (welcome gift)", included: true },
      { text: "MAXync\u00B2 daily layer", included: false },
      { text: "Quarterly retest reminders", included: false },
      { text: "Trend dashboard", included: false },
      { text: "White-label blood kit", included: false },
      { text: "Drug-nutrient interaction screening", included: false },
    ],
    cta: "Start Essential",
    accent: "#FF1F23",
    popular: false,
  },
  {
    name: "Pro",
    price: 139,
    target: "Performance-focused adults and athletes",
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Expanded biomarker panel", included: true },
      { text: "MAXync\u00B2 daily execution layer", included: true },
      { text: "Quarterly retest reminders", included: true },
      { text: "Trend dashboard", included: true },
      { text: "Calendar integration", included: true },
      { text: "Push notifications", included: true },
      { text: "White-label blood kit", included: false },
      { text: "Priority support", included: false },
      { text: "Drug-nutrient interaction screening", included: false },
    ],
    cta: "Start Pro",
    accent: "#FF1F23",
    popular: true,
  },
  {
    name: "Elite",
    price: 169,
    target: "Executives, elite athletes, longevity-focused",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "White-label blood kit (when available)", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Drug-nutrient interaction screening", included: true },
      { text: "Dedicated protocol advisor", included: true },
      { text: "Early access to new modules", included: true },
      { text: "B2B API access", included: false },
      { text: "Custom white-label", included: false },
      { text: "Platform licensing", included: false },
    ],
    cta: "Start Elite",
    accent: "#FF1F23",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Hero */}
      <section className="gx-section pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Shield className="w-3 h-3" />
            <span>3-Month Minimum / Clinical Reality</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Subscription Tiers
          </h1>
          <p className="text-[#6B7A90] text-lg max-w-2xl mx-auto">
            All tiers operate on 3-month minimum subscriptions. Meaningful biomarker changes require at least 90 days. This is not a billing trick. It is a medical fact.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="gx-section pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className={`relative rounded-2xl p-8 ${tier.popular ? 'border-2 border-[#FF1F23]' : 'border border-[#1A2030]'}`} style={{ background: '#0A0E14' }}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#FF1F23' }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-[#6B7A90] mt-1">{tier.target}</p>
                  </div>
                  <div>
                    <span className="text-4xl font-bold text-white font-mono">${tier.price}</span>
                    <span className="text-[#6B7A90] text-sm">/month</span>
                  </div>
                  <div className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-[#00E676] mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-[#6B7A90]/30 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-[#E8ECF2]' : 'text-[#6B7A90]/40'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/assessment"
                    className={`block w-full py-3 rounded-lg font-semibold text-center text-sm transition-all ${
                      tier.popular
                        ? 'text-white'
                        : 'text-white border border-[#1A2030] hover:border-[#FF1F23]'
                    }`}
                    style={tier.popular ? { background: 'linear-gradient(135deg, #FF1F23, #E6191D)', boxShadow: '0 4px 16px rgba(255, 31, 35, 0.25)' } : { background: '#111620' }}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSA/FSA */}
      <section className="gx-section-surface mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(0, 230, 118, 0.1)', color: '#00E676', border: '1px solid rgba(0, 230, 118, 0.2)' }}>
              <Shield className="w-4 h-4" />
              HSA / FSA Eligible
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Save ~30% with Pre-Tax Health Funds
            </h3>
            <p className="text-[#6B7A90] text-sm">
              GenoMAX&#178; qualifies as preventative healthcare. Through our Truemed partnership, eligible consumers can use HSA/FSA funds, reducing effective cost by approximately 30%.
            </p>
          </div>
        </div>
      </section>

      {/* Protocol Box Callout */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto gx-card p-8 space-y-4">
            <h3 className="text-xl font-bold text-white">Every Tier Includes the Protocol Box</h3>
            <p className="text-[#6B7A90] text-sm">
              Premium 31-day dosing organizer with morning/midday/evening compartments. Gender-coded trim. QR-linked to your MAXync&#178; dashboard. Included as a welcome gift with every subscription.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
