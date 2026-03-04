import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Loader2, CreditCard, Wallet } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

const TIERS = {
  essential: { name: "Essential", price: "$89", color: "#6B7A90" },
  pro: { name: "Pro", price: "$139", color: "#FF1F23" },
  elite: { name: "Elite", price: "$169", color: "#FFD600" },
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const tier = (searchParams.get("tier") || "pro").toLowerCase() as keyof typeof TIERS;
  const tierInfo = TIERS[tier] || TIERS.pro;

  const [email, setEmail] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Try to load from session
  useEffect(() => {
    try {
      const raw = localStorage.getItem("gx_session");
      if (raw) {
        const s = JSON.parse(raw);
        if (s.gender) setGender(s.gender);
      }
    } catch {}
    try {
      const savedTier = sessionStorage.getItem("gx_tier");
      // Already handled via URL param
    } catch {}
  }, []);

  const accentColor = gender === "female" ? "#FF2D95" : "#009BFF";
  const osEnv = gender === "female" ? "MAXima\u00b2" : "MAXimo\u00b2";

  const handleCheckout = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const userId = `user_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      // Store for post-checkout reference
      try { localStorage.setItem("gx_user_id", userId); } catch {}

      const res = await fetch(`${API_BASE}/api/v1/subscriptions/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          email,
          tier,
          gender,
          referral_code: searchParams.get("ref") || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || "Failed to create checkout session");
      }

      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (e: any) {
      setError(e.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#0D1117] border border-[#1A2030] rounded-full px-4 py-2 mb-4">
              <CreditCard className="w-3.5 h-3.5" style={{ color: tierInfo.color }} />
              <span className="text-xs font-mono text-[#6B7A90]">Secure Checkout</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Start Your <span style={{ color: tierInfo.color }}>{tierInfo.name}</span> Protocol
            </h1>
            <p className="text-sm text-[#6B7A90]">
              {tierInfo.price}/month with 3-month minimum commitment. Cancel anytime after.
            </p>
          </div>

          <div className="gx-card p-8 space-y-6">
            {/* Gender selection */}
            <div>
              <label className="text-xs font-mono text-[#6B7A90] uppercase tracking-wider mb-3 block">Biological Sex</label>
              <div className="flex gap-3">
                {(["male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-3 rounded-lg border text-sm font-medium transition-colors ${
                      gender === g
                        ? "text-white"
                        : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"
                    }`}
                    style={gender === g ? { borderColor: g === "female" ? "#FF2D95" : "#009BFF", backgroundColor: `${g === "female" ? "#FF2D95" : "#009BFF"}15` } : {}}
                  >
                    {g === "male" ? "MAXimo\u00b2 (Male)" : "MAXima\u00b2 (Female)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-mono text-[#6B7A90] uppercase tracking-wider mb-3 block">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:outline-none text-sm"
                style={{ borderColor: email && email.includes("@") ? `${accentColor}40` : undefined }}
              />
            </div>

            {/* Summary */}
            <div className="bg-[#05070A] rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B7A90]">{tierInfo.name} Protocol</span>
                <span className="text-white font-mono">{tierInfo.price}/mo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B7A90]">Sub-brand</span>
                <span className="font-mono" style={{ color: accentColor }}>{osEnv}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B7A90]">Commitment</span>
                <span className="text-white font-mono">3 months</span>
              </div>
              <div className="h-px bg-[#1A2030] my-2" />
              <div className="flex items-center gap-2 text-xs">
                <Wallet className="w-3 h-3 text-[#00E676]" />
                <span className="text-[#00E676]">HSA/FSA eligible via Truemed</span>
              </div>
            </div>

            {error && (
              <div className="bg-[#FF1F23]/10 border border-[#FF1F23]/30 rounded-lg p-3 text-sm text-[#FF1F23]">
                {error}
              </div>
            )}

            {/* CTA */}
            <button
              onClick={handleCheckout}
              disabled={loading || !email}
              className="w-full py-4 rounded-lg font-bold text-white text-sm flex items-center justify-center gap-2 transition-opacity disabled:opacity-50"
              style={{ backgroundColor: accentColor }}
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Creating checkout...</>
              ) : (
                <>Continue to Payment <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-[#6B7A90]/60">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Powered by Stripe</span>
              <span>256-bit encryption</span>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-xs text-[#6B7A90]/60">
              Your protocol is generated deterministically from blood biomarkers. No commercial override.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-[#6B7A90]/40">
              <span>31 safety gates</span>
              <span>41 biomarkers</span>
              <span>0 commercial overrides</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
