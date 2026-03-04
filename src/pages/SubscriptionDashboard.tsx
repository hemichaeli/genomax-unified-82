import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, Check, Shield, Calendar, Loader2, ExternalLink, AlertCircle } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

interface SubscriptionData {
  user_id: string;
  tier: string;
  status: string;
  os_environment: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  stripe_subscription_id: string | null;
}

const TIER_COLORS: Record<string, string> = {
  essential: "#6B7A90",
  pro: "#FF1F23",
  elite: "#FFD600",
};

const SubscriptionDashboard = () => {
  const [sub, setSub] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserId = () => {
    try { return localStorage.getItem("gx_user_id") || ""; } catch { return ""; }
  };

  useEffect(() => {
    const fetchSub = async () => {
      const uid = getUserId();
      if (!uid) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`${API_BASE}/api/v1/billing/subscription/${uid}`);
        if (res.ok) {
          const data = await res.json();
          setSub(data);
        }
      } catch {}
      setLoading(false);
    };
    fetchSub();
  }, []);

  const openPortal = async () => {
    const uid = getUserId();
    if (!uid) return;
    setPortalLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/billing/portal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: uid }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.portal_url) window.location.href = data.portal_url;
      } else {
        setError("Could not open billing portal.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setPortalLoading(false);
  };

  const isActive = sub && (sub.status === "active" || sub.status === "trialing");
  const tierColor = sub ? (TIER_COLORS[sub.tier] || "#6B7A90") : "#6B7A90";

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <p className="text-xs font-mono text-[#FF1F23] tracking-wider mb-2">SUBSCRIPTION</p>
          <h1 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Billing & Subscription
          </h1>

          {loading ? (
            <div className="text-center py-20">
              <Loader2 className="w-8 h-8 text-[#FF1F23] mx-auto animate-spin" />
            </div>
          ) : !sub || sub.status === "inactive" ? (
            <div className="gx-card p-8 text-center">
              <Shield className="w-12 h-12 text-[#6B7A90]/30 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">No Active Subscription</h2>
              <p className="text-sm text-[#6B7A90] mb-6">Start your protocol to begin optimizing your biology.</p>
              <Link to="/pricing" className="gx-btn-primary inline-flex items-center gap-2">
                View Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Status card */}
              <div className="gx-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${tierColor}20` }}>
                      <CreditCard className="w-5 h-5" style={{ color: tierColor }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white capitalize">{sub.tier} Plan</p>
                      <p className="text-xs font-mono text-[#6B7A90]">{sub.os_environment || "Protocol active"}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    isActive ? "bg-[#00E676]/10 text-[#00E676]" :
                    sub.status === "past_due" ? "bg-[#FF1F23]/10 text-[#FF1F23]" :
                    "bg-[#6B7A90]/10 text-[#6B7A90]"
                  }`}>
                    {sub.status.toUpperCase().replace("_", " ")}
                  </div>
                </div>

                {sub.cancel_at_period_end && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-[#FFD600]/10 border border-[#FFD600]/30 mb-4">
                    <AlertCircle className="w-4 h-4 text-[#FFD600] flex-shrink-0" />
                    <p className="text-xs text-[#FFD600]">Your subscription will cancel at the end of the current period.</p>
                  </div>
                )}

                {sub.current_period_end && (
                  <div className="flex items-center gap-2 text-xs text-[#6B7A90]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Current period ends: {new Date(sub.current_period_end).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="gx-card p-6">
                <h3 className="text-sm font-bold text-white mb-4">Manage Subscription</h3>
                <div className="space-y-3">
                  <button
                    onClick={openPortal}
                    disabled={portalLoading}
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-[#1A2030] hover:border-[#6B7A90]/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-4 h-4 text-[#6B7A90]" />
                      <div>
                        <p className="text-sm text-white">Billing Portal</p>
                        <p className="text-[10px] text-[#6B7A90]">Update payment method, view invoices, cancel</p>
                      </div>
                    </div>
                    {portalLoading ? (
                      <Loader2 className="w-4 h-4 text-[#6B7A90] animate-spin" />
                    ) : (
                      <ExternalLink className="w-4 h-4 text-[#6B7A90]" />
                    )}
                  </button>

                  <Link
                    to="/assessment"
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-[#1A2030] hover:border-[#6B7A90]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-[#6B7A90]" />
                      <div>
                        <p className="text-sm text-white">Upload New Blood Work</p>
                        <p className="text-[10px] text-[#6B7A90]">Recalculate your protocol with fresh data</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#6B7A90]" />
                  </Link>

                  <Link
                    to="/dashboard/maxync"
                    className="w-full flex items-center justify-between p-3 rounded-lg border border-[#1A2030] hover:border-[#6B7A90]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[#6B7A90]" />
                      <div>
                        <p className="text-sm text-white">MAXync&#178; Daily Protocol</p>
                        <p className="text-[10px] text-[#6B7A90]">Track your dosing adherence</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#6B7A90]" />
                  </Link>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-[#FF1F23]/10 border border-[#FF1F23]/30 text-center">
                  <p className="text-xs text-[#FF1F23]">{error}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SubscriptionDashboard;
