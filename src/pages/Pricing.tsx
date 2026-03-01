import { Link } from "react-router-dom";
import { Check, Shield, Zap, Crown, ArrowRight, Heart } from "lucide-react";
import { BrandText } from "@/components/BrandText";

const tiers = [
  {
    name: "Essential",
    price: 89,
    period: "/month",
    description: "Your biology decoded. Your first protocol built.",
    badge: null,
    gradient: "from-[#1a1a2e] to-[#0A0E1A]",
    borderColor: "border-border",
    icon: Shield,
    features: [
      "OCR blood work upload & analysis",
      "41 biomarker interpretation",
      "31 safety gate screening",
      "Gender-optimized protocol generation",
      "Chronobiology dosing schedule",
      "Protocol Box (welcome gift)",
      "Monthly module shipment",
    ],
    notIncluded: [
      "MAXync\u00B2 daily execution layer",
      "Quarterly retest reminders",
      "Trend dashboard",
      "Drug-nutrient interaction screening",
      "White-label blood kit",
      "Priority support",
    ],
    cta: "Start Essential",
    ctaStyle: "border-2 border-os-cyan bg-transparent text-foreground hover:bg-os-cyan/10",
  },
  {
    name: "Pro",
    price: 139,
    period: "/month",
    description: "Track, optimize, and evolve your protocol over time.",
    badge: "Most Popular",
    gradient: "from-[#00AEEF]/10 to-[#0A0E1A]",
    borderColor: "border-os-cyan/50",
    icon: Zap,
    features: [
      "Everything in Essential",
      "Expanded biomarker panel",
      "MAXync\u00B2 daily execution layer",
      "Calendar integration & reminders",
      "Quarterly retest reminders",
      "Trend dashboard & analytics",
      "Before/after biomarker comparison",
    ],
    notIncluded: [
      "Drug-nutrient interaction screening",
      "White-label blood kit",
      "Priority support",
    ],
    cta: "Start Pro",
    ctaStyle: "bg-gradient-to-r from-[#00AEEF] to-[#006AFB] text-white hover:opacity-90",
  },
  {
    name: "Elite",
    price: 169,
    period: "/month",
    description: "Full biological intelligence. Zero compromise.",
    badge: "Maximum",
    gradient: "from-[#FF2A2A]/8 to-[#0A0E1A]",
    borderColor: "border-[#FF2A2A]/40",
    icon: Crown,
    features: [
      "Everything in Pro",
      "White-label blood kit (when available)",
      "Phase 4 drug-nutrient interaction screening",
      "Advanced analytics & insights",
      "Priority support channel",
      "Early access to new modules",
      "Ambassador referral eligibility",
    ],
    notIncluded: [],
    cta: "Start Elite",
    ctaStyle: "bg-gradient-to-r from-[#FF2A2A] to-[#FF6B35] text-white hover:opacity-90",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, hsl(186 100% 64% / 0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <p className="text-os-cyan font-mono text-sm tracking-[0.2em] uppercase">
            Pricing
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
            Your Biology. Your Tier.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every tier is built on the same clinical-grade Bloodwork Engine. Choose the depth of intelligence your protocol needs.
          </p>
          <p className="text-sm text-muted-foreground">
            All plans require a 3-month minimum. Because meaningful biomarker change takes at least 90 days.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border ${tier.borderColor} bg-gradient-to-b ${tier.gradient} p-8 flex flex-col transition-all duration-[280ms] hover:translate-y-[-4px] hover:shadow-panel`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-os-cyan text-[#0A0E1A] tracking-wide uppercase">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-os-cyan" />
                    <h3 className="text-2xl font-bold font-heading">
                      {tier.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-heading">
                      ${tier.price}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-os-cyan shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <div key={f} className="flex items-start gap-3 opacity-35">
                      <div className="w-4 h-4 mt-0.5 shrink-0 rounded-full border border-muted-foreground/30" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>

                <Link to="/assessment">
                  <button
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-[280ms] ${tier.ctaStyle}`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Protocol Box Callout */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold font-heading">
            Every Subscriber Gets the Protocol Box
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A premium daily organizer with morning, midday, and evening compartments matching your dosing schedule. Not packaging. A precision instrument for your protocol.
          </p>
          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-os-cyan" /> Dark navy soft-touch finish
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-os-cyan" /> Gender sub-brand color trim
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-os-cyan" /> QR link to MAXync\u00B2
            </span>
          </div>
        </div>
      </section>

      {/* HSA/FSA Callout */}
      <section className="py-12 px-6 border-t border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Heart className="w-8 h-8 text-os-cyan" />
            <div>
              <h3 className="font-bold text-lg">HSA/FSA Eligible</h3>
              <p className="text-sm text-muted-foreground">
                Use pre-tax health savings for your protocol. Save up to 30%.
              </p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground bg-card/50 px-4 py-2 rounded-full border border-border">
            Eligibility via Letter of Medical Necessity
          </span>
        </div>
      </section>

      {/* Gender CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Your Blood Work. Your Protocol.
          </h2>
          <p className="text-muted-foreground">
            Select your Biological Operating System to begin.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <Link to="/assessment?gender=maximo">
              <button className="w-full h-14 rounded-xl text-lg font-bold bg-gradient-to-r from-maximo to-maximo-light text-white hover:opacity-90 transition-all duration-[280ms] shadow-glow-cyan">
                <BrandText variant="maximo" />
              </button>
            </Link>
            <Link to="/assessment?gender=maxima">
              <button className="w-full h-14 rounded-xl text-lg font-bold bg-gradient-to-r from-maxima to-maxima-light text-white hover:opacity-90 transition-all duration-[280ms] shadow-glow-magenta">
                <BrandText variant="maxima" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
