import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Shield, CreditCard, Wallet, Loader2 } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

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
    tier_key: "essential",
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
    tier_key: "pro",
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
    tier_key: "elite",
  },
];

const Pricing = () => {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubscribe = async (tierKey: string, tierName: string) => {
    setLoadingTier(tierKey);
    setError("");

    // Determine OS environment from session or default
    let osEnv = "MAXimo\u00B2";
    try {
      const raw = localStorage.getItem("gx_session");
      if (raw) {
        const session = JSON.parse(raw);
        if (session.environment) osEnv = session.environment;
      }
    } catch {}

    // Generate or retrieve user_id
    let userId = "";
    try {
      userId = localStorage.getItem("gx_user_id") || "";
      if (!userId) {
        userId = `usr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        localStorage.setItem("gx_user_id", userId);
      }
    } catch {
      userId = `usr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    }

    try {
      const res = await fetch(`${API_BASE}/api/v1/billing/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          tier: tierKey,
          os_environment: osEnv,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.checkout_url) {
          window.location.href = data.checkout_url;
          return;
        }
      }

      // Fallback: if Stripe not yet configured, go to assessment
      const errData = await res.json().catch(() => null);
      const errMsg = errData?.detail || "";

      if (errMsg.includes("not configured") || errMsg.includes("not installed")) {
        // Stripe keys not set yet - fall back to assessment flow
        try { sessionStorage.setItem("gx_tier", tierKey); } catch {}
        window.location.href = "/assessment";
        return;
      }

      setError("Could not start checkout. Please try again.");
    } catch {
      // Network error - fall back to assessment
      try { sessionStorage.setItem("gx_tier", tierKey); } catch {}
      window.location.href = "/assessment";
    } finally {
      setLoadingTier(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Invest in Your Biology
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-6">
            All tiers operate on 3-month minimum subscriptions. Meaningful biomarker changes require at least 90 days. This is not a billing trick. It is a medical fact.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#00E676]/8 border border-[#00E676]/25 rounded-full px-4 py-2">
            <Wallet className="w-3.5 h-3.5 text-[#00E676]" />
            <span className="text-xs text-[#00E676] font-mono font-medium">HSA / FSA Eligible &middot; Save ~30% with pre-tax funds</span>
          </div>
        </div>
      </section>

      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="max-w-5xl mx-auto mb-6 p-3 rounded-lg bg-[#FF1F23]/10 border border-[#FF1F23]/30 text-center">
              <p className="text-sm text-[#FF1F23]">{error}</p>
            </div>
          )}

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

                <div className="flex items-center gap-1.5 mb-4 bg-[#00E676]/6 border border-[#00E676]/20 rounded-md px-2 py-1 w-fit">
                  <Wallet className="w-3 h-3 text-[#00E676]" />
                  <span className="text-[10px] font-mono text-[#00E676] font-medium">HSA / FSA eligible</span>
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

                <button
                  onClick={() => handleSubscribe(tier.tier_key, tier.name)}
                  disabled={loadingTier !== null}
                  className={`text-center text-sm font-medium py-3 px-6 rounded-lg transition-colors mb-3 w-full flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? "bg-[#FF1F23] text-white hover:bg-[#FF1F23]/90 disabled:opacity-50"
                      : "border border-[#1A2030] text-[#6B7A90] hover:border-[#FF1F23] hover:text-white disabled:opacity-50"
                  }`}
                >
                  {loadingTier === tier.tier_key ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Redirecting to checkout...
                    </>
                  ) : (
                    <>
                      {tier.cta} <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-[#6B7A90]/40 text-center font-mono">
                  Secure checkout via Stripe &middot; Cancel after 3 months
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-[#6B7A90]">
              <Wallet className="w-3.5 h-3.5 text-[#00E676]" />
              <span>HSA / FSA accepted &middot; ~30% savings</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6B7A90]">
              <Shield className="w-3.5 h-3.5 text-[#FF1F23]" />
              <span>31 safety gates &middot; no commercial override</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#6B7A90]">
              <CreditCard className="w-3.5 h-3.5 text-[#6B7A90]" />
              <span>3-month minimum &middot; cancel after commitment</span>
            </div>
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
                <p className="text-sm text-[#6B7A90]">GenoMAX&#178; protocols qualify as preventative healthcare. Use pre-tax health spending accounts via Letter of Medical Necessity through our Truemed partnership. Eligible consumers save approximately 30% on subscription costs.</p>
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
