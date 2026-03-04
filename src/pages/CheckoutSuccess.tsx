import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowRight, Package, Calendar, BarChart3, Gift, Users, Pill } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [referralApplied, setReferralApplied] = useState(false);
  const [referralDiscount, setReferralDiscount] = useState(0);

  useEffect(() => {
    // Load session gender
    try {
      const raw = localStorage.getItem("gx_session");
      if (raw) {
        const s = JSON.parse(raw);
        if (s.gender) setGender(s.gender);
      }
    } catch {}

    // Track referral conversion if referral code exists
    try {
      const refCode = localStorage.getItem("gx_referral_code");
      const refDiscount = localStorage.getItem("gx_referral_discount");
      if (refCode) {
        setReferralApplied(true);
        setReferralDiscount(refDiscount ? parseFloat(refDiscount) : 20);

        // Fire conversion tracking (non-blocking)
        fetch(`${API_BASE}/api/v1/referrals/track`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            referral_code: refCode,
            event: "subscribed",
          }),
        }).catch(() => {});

        // Clear referral data after successful conversion
        localStorage.removeItem("gx_referral_code");
        localStorage.removeItem("gx_referral_discount");
        localStorage.removeItem("gx_referral_referrer");
        localStorage.removeItem("gx_referral_ts");
      }
    } catch {}
  }, []);

  const accentColor = gender === "female" ? "#FF2D95" : "#009BFF";
  const osEnv = gender === "female" ? "MAXima\u00b2" : "MAXimo\u00b2";

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
            <CheckCircle2 className="w-10 h-10" style={{ color: accentColor }} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Protocol <span style={{ color: accentColor }}>Activated</span>
          </h1>
          <p className="text-lg text-[#6B7A90] mb-4">
            Your <span style={{ color: accentColor }}>{osEnv}</span> subscription is now active. The Biological Operating System is running.
          </p>

          {/* Referral discount confirmation */}
          {referralApplied && (
            <div className="inline-flex items-center gap-2 bg-[#00E676]/10 border border-[#00E676]/25 rounded-full px-4 py-2 mb-8">
              <Gift className="w-4 h-4 text-[#00E676]" />
              <span className="text-sm text-[#00E676] font-medium">
                ${referralDiscount} referral discount applied to your first month
              </span>
            </div>
          )}

          {/* What happens next */}
          <div className="gx-card p-8 text-left mb-8">
            <h2 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>What Happens Next</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Package className="w-5 h-5" style={{ color: accentColor }} />,
                  step: "1",
                  title: "Protocol Box Ships",
                  desc: "Your 31-day dosing organizer with morning/midday/evening compartments ships within 3-5 business days.",
                },
                {
                  icon: <Pill className="w-5 h-5 text-[#00E676]" />,
                  step: "2",
                  title: "Execute Daily",
                  desc: "Take your modules at the prescribed dosing windows. MAXync\u00b2 will send reminders for each window.",
                },
                {
                  icon: <BarChart3 className="w-5 h-5 text-[#FFD600]" />,
                  step: "3",
                  title: "Retest at Month 3",
                  desc: "Upload new blood work at 90 days. The Bloodwork Engine recalibrates your protocol based on measured changes.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#05070A] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#1A2030] text-[#6B7A90]">Step {item.step}</span>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-[#6B7A90]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Upload Blood Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard/maxync" className="gx-btn-outline inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> MAXync&#178; Tracker
            </Link>
            <Link to="/dashboard/subscription" className="gx-btn-outline inline-flex items-center gap-2">
              Manage Subscription
            </Link>
          </div>

          {/* Refer a friend */}
          <div className="gx-card p-6 text-left">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF1F23]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#FF1F23]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-1">Share Your Biological Advantage</h3>
                <p className="text-xs text-[#6B7A90] mb-3">
                  Earn $20 credit for each friend who subscribes. After 3 referrals, get a free month.
                </p>
                <Link to="/dashboard/referrals" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF1F23] hover:text-[#FF1F23]/80 transition-colors">
                  Get Your Referral Link <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#6B7A90]/40 mt-8">
            A confirmation email has been sent. You can manage your subscription at any time from the billing portal.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CheckoutSuccess;
