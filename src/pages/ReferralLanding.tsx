import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Shield, Activity, Loader2, Gift, Check, Beaker, Clock } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

interface ReferralInfo {
  code: string;
  referrer_name: string | null;
  tier: string;
  friend_discount: number;
  is_valid: boolean;
}

const ReferralLanding = () => {
  const { code } = useParams<{ code: string }>();
  const [info, setInfo] = useState<ReferralInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!code) return;
    const fetchCode = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/referrals/codes/${code}`);
        if (res.ok) {
          const data = await res.json();
          setInfo(data);

          // Track click
          fetch(`${API_BASE}/api/v1/referrals/track`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ referral_code: code, event: "clicked" }),
          }).catch(() => {});
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
      setLoading(false);
    };
    fetchCode();
  }, [code]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FF1F23] animate-spin" />
      </div>
    );
  }

  if (error || !info) {
    return (
      <div className="min-h-screen bg-[#05070A]">
        <section className="gx-hero pt-32 pb-20">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Invalid Referral Code
            </h1>
            <p className="text-[#6B7A90] mb-8">This referral code is not valid or has expired.</p>
            <Link to="/" className="gx-btn-primary inline-flex items-center gap-2">
              Visit GenoMAX&#178; <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const referrerName = info.referrer_name || "Someone";
  const discount = info.friend_discount;

  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Referral Hero */}
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FF1F23]/10 border border-[#FF1F23]/20 rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4 text-[#FF1F23]" />
            <span className="text-sm text-[#FF1F23] font-medium">${discount} off your first protocol</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            {referrerName} shared their
            <br />
            <span className="text-[#FF1F23]">biological advantage</span> with you.
          </h1>

          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-8">
            GenoMAX&#178; is a Biological Operating System that reads your blood chemistry, applies gender-specific clinical intelligence, and outputs a deterministic supplement protocol calibrated to your biology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link to="/assessment" className="gx-btn-primary flex items-center gap-2 justify-center text-base px-8 py-3">
              Claim ${discount} Off <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/science" className="gx-btn-outline flex items-center gap-2 justify-center">
              Read the Science
            </Link>
          </div>

          <p className="text-xs text-[#6B7A90]/50 font-mono">
            Code: {info.code} | Applied automatically at checkout
          </p>
        </div>
      </section>

      {/* Evidence Bar */}
      <section className="py-8 border-y" style={{ background: "#080B10", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="font-mono text-2xl font-bold text-white">41</div><div className="text-xs text-[#6B7A90] mt-1">Biomarkers Processed</div></div>
            <div><div className="font-mono text-2xl font-bold text-white">31</div><div className="text-xs text-[#6B7A90] mt-1">Safety Gates</div></div>
            <div><div className="font-mono text-2xl font-bold text-white">524,592+</div><div className="text-xs text-[#6B7A90] mt-1">Participants Analyzed</div></div>
            <div><div className="font-mono text-2xl font-bold text-[#FF1F23]">0</div><div className="text-xs text-[#6B7A90] mt-1">Commercial Overrides</div></div>
          </div>
        </div>
      </section>

      {/* Why GenoMAX2 */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Why the Old Way is Broken
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="gx-card p-6">
              <Beaker className="w-6 h-6 text-[#FF1F23] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">DNA Testing is Useless</h3>
              <p className="text-xs text-[#6B7A90] leading-relaxed">524,592+ participants prove DNA-based nutrition provides zero additional benefit over standard assessment.</p>
            </div>
            <div className="gx-card p-6">
              <Shield className="w-6 h-6 text-[#009BFF] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Unisex Ignores Biology</h3>
              <p className="text-xs text-[#6B7A90] leading-relaxed">Iron metabolism, hormonal cycling, and thyroid sensitivity differ between sexes. One-size-fits-all does not work.</p>
            </div>
            <div className="gx-card p-6">
              <Clock className="w-6 h-6 text-[#FFD600] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Timing Matters</h3>
              <p className="text-xs text-[#6B7A90] leading-relaxed">Iron blocks zinc. Calcium competes with magnesium. The dosing schedule is clinical, not convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-10" style={{ fontFamily: "'Inter Tight', sans-serif" }}>How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Blood Work", desc: "Upload existing results or order a kit." },
              { step: "02", title: "41 Biomarkers", desc: "Processed through 31 safety gates." },
              { step: "03", title: "Your Protocol", desc: "Gender-specific modules with dosing schedule." },
              { step: "04", title: "Track + Retest", desc: "Quarterly retesting shows improvement." },
            ].map((item) => (
              <div key={item.step} className="gx-card p-5">
                <div className="font-mono text-xl font-bold text-[#FF1F23] mb-2">{item.step}</div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-[#6B7A90]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gx-section text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Blood Does Not Negotiate.
          </h2>
          <p className="text-[#6B7A90] mb-6">Neither should your supplement protocol.</p>
          <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2 text-base px-8 py-3">
            Get ${discount} Off Your First Protocol <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-[#6B7A90]/50 mt-3 font-mono">Referral code {info.code} applied automatically</p>
        </div>
      </section>
    </div>
  );
};

export default ReferralLanding;
