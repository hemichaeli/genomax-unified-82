import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, Users, DollarSign, Award, ArrowRight, Share2, Mail, MessageCircle, Loader2, Gift, TrendingUp } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

// Demo user ID for pre-auth state
const DEMO_USER_ID = "00000000-0000-0000-0000-000000000001";

interface DashboardData {
  has_code: boolean;
  code?: string;
  referral_link?: string;
  tier?: {
    current: string;
    next: string | null;
    remaining_for_next: number;
    benefits: Record<string, number>;
  };
  stats?: {
    total_referrals: number;
    successful_referrals: number;
    pending: number;
    converted: number;
  };
  credits?: {
    available: number;
    used: number;
    lifetime: number;
  };
  referrals?: Array<{
    id: string;
    status: string;
    email: string | null;
    tier: string | null;
    credit: number;
    created_at: string | null;
    converted_at: string | null;
  }>;
  share_messages?: Record<string, string>;
}

const TIER_CONFIG: Record<string, { label: string; color: string; icon: string }> = {
  standard: { label: "Standard", color: "#6B7A90", icon: "users" },
  silver: { label: "Silver", color: "#C0C0C0", icon: "award" },
  ambassador: { label: "Ambassador", color: "#FFD600", icon: "award" },
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "Pending", color: "#6B7A90" },
  clicked: { label: "Clicked", color: "#009BFF" },
  subscribed: { label: "Subscribed", color: "#00E676" },
  expired: { label: "Expired", color: "#FF1F23" },
  cancelled: { label: "Cancelled", color: "#6B7A90" },
};

const ReferralDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [creating, setCreating] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const fetchDashboard = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/v1/referrals/dashboard/${DEMO_USER_ID}`);
      if (res.ok) {
        const result = await res.json();
        setData(result);
      } else {
        setData({ has_code: false });
      }
    } catch {
      setData({ has_code: false });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const createCode = async () => {
    setCreating(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/referrals/codes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: DEMO_USER_ID, referrer_name: nameInput || null }),
      });
      if (res.ok) {
        await fetchDashboard();
      }
    } catch {
      // Silently fail
    }
    setCreating(false);
  };

  const copyLink = () => {
    if (data?.referral_link) {
      navigator.clipboard.writeText(data.referral_link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareVia = (channel: string) => {
    if (!data?.share_messages || !data?.referral_link) return;
    const msg = data.share_messages[channel] || data.share_messages.default || data.referral_link;
    switch (channel) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
        break;
      case "email":
        window.open(`mailto:?subject=${encodeURIComponent(data.share_messages.email_subject || "Check this out")}&body=${encodeURIComponent(data.share_messages.email_body || msg)}`, "_blank");
        break;
      default:
        navigator.clipboard.writeText(msg);
        break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FF1F23] animate-spin" />
      </div>
    );
  }

  // No code yet - onboarding
  if (!data?.has_code) {
    return (
      <div className="min-h-screen bg-[#05070A]">
        <section className="gx-hero pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg text-center">
            <Gift className="w-12 h-12 text-[#FF1F23] mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Start Your Referral Program
            </h1>
            <p className="text-[#6B7A90] mb-8">
              Share your biological advantage. You earn $20 credit, your friend gets $20 off their first protocol.
            </p>

            <div className="gx-card p-6 text-left">
              <label className="text-xs text-[#6B7A90] block mb-2">Your first name (for personalized referral page)</label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="e.g., Alex"
                className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-sm text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none mb-4"
              />
              <button
                onClick={createCode}
                disabled={creating}
                className="gx-btn-primary w-full flex items-center justify-center gap-2"
              >
                {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Share2 className="w-4 h-4" />}
                Generate My Referral Code
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="gx-card p-4">
                <div className="text-lg font-bold text-white">$20</div>
                <div className="text-[10px] text-[#6B7A90]">You earn per referral</div>
              </div>
              <div className="gx-card p-4">
                <div className="text-lg font-bold text-white">$20</div>
                <div className="text-[10px] text-[#6B7A90]">Friend gets off</div>
              </div>
              <div className="gx-card p-4">
                <div className="text-lg font-bold text-[#FFD600]">Free</div>
                <div className="text-[10px] text-[#6B7A90]">Month at 3 referrals</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Dashboard
  const tier = data.tier;
  const stats = data.stats;
  const credits = data.credits;
  const tierConfig = TIER_CONFIG[tier?.current || "standard"];

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Referral Dashboard
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: `${tierConfig.color}15`, color: tierConfig.color }}>
                  {tierConfig.label} Tier
                </span>
                {tier?.next && (
                  <span className="text-xs text-[#6B7A90]">
                    {tier.remaining_for_next} more for {tier.next}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Referral Link Card */}
          <div className="gx-card p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="text-xs text-[#6B7A90] mb-1">Your referral link</div>
                <div className="font-mono text-sm text-white bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-2.5 select-all">
                  {data.referral_link}
                </div>
              </div>
              <button
                onClick={copyLink}
                className={`gx-btn-primary flex items-center gap-2 min-w-[120px] justify-center ${copied ? "bg-[#00E676]/20 border-[#00E676] text-[#00E676]" : ""}`}
              >
                {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Link</>}
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <button onClick={() => shareVia("whatsapp")} className="gx-btn-outline text-xs flex items-center gap-1.5 px-3 py-1.5">
                <MessageCircle className="w-3 h-3" /> WhatsApp
              </button>
              <button onClick={() => shareVia("email")} className="gx-btn-outline text-xs flex items-center gap-1.5 px-3 py-1.5">
                <Mail className="w-3 h-3" /> Email
              </button>
              <button onClick={() => shareVia("default")} className="gx-btn-outline text-xs flex items-center gap-1.5 px-3 py-1.5">
                <Share2 className="w-3 h-3" /> Copy Message
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="gx-card p-5">
              <Users className="w-5 h-5 text-[#009BFF] mb-2" />
              <div className="font-mono text-2xl font-bold text-white">{stats?.total_referrals || 0}</div>
              <div className="text-xs text-[#6B7A90]">Total Referrals</div>
            </div>
            <div className="gx-card p-5">
              <TrendingUp className="w-5 h-5 text-[#00E676] mb-2" />
              <div className="font-mono text-2xl font-bold text-white">{stats?.successful_referrals || 0}</div>
              <div className="text-xs text-[#6B7A90]">Converted</div>
            </div>
            <div className="gx-card p-5">
              <DollarSign className="w-5 h-5 text-[#FFD600] mb-2" />
              <div className="font-mono text-2xl font-bold text-white">${credits?.available?.toFixed(2) || "0.00"}</div>
              <div className="text-xs text-[#6B7A90]">Available Credits</div>
            </div>
            <div className="gx-card p-5">
              <Award className="w-5 h-5 text-[#FF1F23] mb-2" />
              <div className="font-mono text-2xl font-bold text-white">${credits?.lifetime?.toFixed(2) || "0.00"}</div>
              <div className="text-xs text-[#6B7A90]">Lifetime Earned</div>
            </div>
          </div>

          {/* Tier Progress */}
          {tier?.next && (
            <div className="gx-card p-5 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white">Tier Progress</span>
                <span className="text-xs text-[#6B7A90]">
                  {stats?.successful_referrals || 0} / {tier.current === "standard" ? 3 : 10} for {tier.next}
                </span>
              </div>
              <div className="w-full h-2 bg-[#1A2030] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, ((stats?.successful_referrals || 0) / (tier.current === "standard" ? 3 : 10)) * 100)}%`,
                    background: tier.next === "ambassador" ? "#FFD600" : "#C0C0C0",
                  }}
                />
              </div>
              <div className="mt-2 text-xs text-[#6B7A90]">
                {tier.next === "silver" ? "Silver: Free month (up to $139 value)" : "Ambassador: 15% permanent discount + early access"}
              </div>
            </div>
          )}

          {/* Referrals List */}
          {data.referrals && data.referrals.length > 0 && (
            <div className="gx-card overflow-hidden mb-8">
              <div className="p-5 border-b border-[#1A2030]">
                <h3 className="text-sm font-bold text-white">Referral History</h3>
              </div>
              <div className="divide-y divide-[#1A2030]">
                {data.referrals.map((ref) => {
                  const statusConfig = STATUS_LABELS[ref.status] || STATUS_LABELS.pending;
                  return (
                    <div key={ref.id} className="px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: `${statusConfig.color}15`, color: statusConfig.color }}>
                          {statusConfig.label}
                        </span>
                        <span className="text-xs text-[#6B7A90]">{ref.email || "Anonymous"}</span>
                      </div>
                      <div className="text-right">
                        {ref.credit > 0 && <span className="text-xs font-mono text-[#00E676]">+${ref.credit.toFixed(2)}</span>}
                        {ref.created_at && (
                          <div className="text-[10px] text-[#6B7A90]/50 mt-0.5">
                            {new Date(ref.created_at).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty state */}
          {(!data.referrals || data.referrals.length === 0) && (
            <div className="gx-card p-8 text-center mb-8">
              <Users className="w-10 h-10 text-[#6B7A90]/30 mx-auto mb-4" />
              <p className="text-sm text-[#6B7A90] mb-4">No referrals yet. Share your link to get started.</p>
              <button onClick={copyLink} className="gx-btn-primary inline-flex items-center gap-2">
                <Copy className="w-4 h-4" /> Copy Referral Link
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ReferralDashboard;
