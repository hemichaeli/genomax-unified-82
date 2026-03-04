import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowRight, Shield, Activity, Loader2, Gift, Check, Beaker, Clock,
  Share2, Copy, MessageCircle, Mail, ChevronDown, X, Zap, Lock, Users,
  FlaskConical, HeartPulse, Brain
} from "lucide-react";

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
  const navigate = useNavigate();
  const [info, setInfo] = useState<ReferralInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOS, setSelectedOS] = useState<"maximo" | "maxima" | null>(null);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  // Visible section tracking for scroll animations
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!code) return;
    const fetchCode = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/referrals/codes/${code}`);
        if (res.ok) {
          const data = await res.json();
          setInfo(data);

          // Persist referral code to localStorage for checkout
          try {
            localStorage.setItem("gx_referral_code", data.code);
            localStorage.setItem("gx_referral_discount", String(data.friend_discount));
            localStorage.setItem("gx_referral_referrer", data.referrer_name || "");
            localStorage.setItem("gx_referral_ts", new Date().toISOString());
          } catch {}

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

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [loading, error]);

  // Close share menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShowShareMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleStartAssessment = () => {
    if (!info) return;
    const params = new URLSearchParams({
      ref: info.code,
      discount: String(info.friend_discount),
      ...(selectedOS ? { os: selectedOS } : {}),
    });
    navigate(`/assessment?${params.toString()}`);
  };

  const pageUrl = `https://genomax2.ai/ref/${code}`;
  const shareText = `${info?.referrer_name || "Someone"} shared their biological advantage with me. Get $${info?.friend_discount || 20} off your first protocol at GenoMAX\u00B2.`;

  const shareVia = (channel: string) => {
    switch (channel) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + pageUrl)}`, "_blank");
        break;
      case "email":
        window.open(`mailto:?subject=${encodeURIComponent("Your biology deserves better than guesswork")}&body=${encodeURIComponent(shareText + "\n\n" + pageUrl)}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(pageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`, "_blank");
        break;
    }
    setShowShareMenu(false);
  };

  const sectionClass = (id: string) =>
    `transition-all duration-700 ${visibleSections.has(id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  // ── LOADING
  if (loading) {
    return (
      <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-[#FF1F23] animate-spin mx-auto mb-4" />
          <p className="text-sm text-[#6B7A90] font-mono">Validating referral code...</p>
        </div>
      </div>
    );
  }

  // ── INVALID CODE
  if (error || !info) {
    return (
      <div className="min-h-screen bg-[#05070A]">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <div className="w-16 h-16 rounded-full bg-[#FF1F23]/10 flex items-center justify-center mx-auto mb-6">
              <X className="w-8 h-8 text-[#FF1F23]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Invalid Referral Code
            </h1>
            <p className="text-[#6B7A90] mb-3">
              This referral code is not valid or has expired.
            </p>
            <p className="text-xs text-[#6B7A90]/60 mb-8">
              If you believe this is an error, ask the person who shared the link to confirm their code.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="gx-btn-primary inline-flex items-center gap-2 justify-center">
                Visit GenoMAX&#178; <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/pricing" className="gx-btn-outline inline-flex items-center gap-2 justify-center">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── VALID REFERRAL PAGE
  const referrerName = info.referrer_name || "Someone";
  const discount = info.friend_discount;
  const isAmbassador = info.tier === "ambassador";
  const accentColor = selectedOS === "maxima" ? "#D4A0A0" : "#009BFF";

  return (
    <div className="min-h-screen bg-[#05070A]">

      {/* ── STICKY DISCOUNT BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#FF1F23] text-white text-center py-2 px-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Gift className="w-4 h-4" />
          <span>${discount} off your first protocol</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <span className="hidden sm:inline text-white/70 font-mono text-xs">Code: {info.code}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section
        id="hero"
        ref={(el) => { sectionRefs.current["hero"] = el; }}
        className="pt-44 pb-16 relative overflow-hidden"
      >
        {/* Gradient orb */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }} />

        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative ${sectionClass("hero")}`}>
          {isAmbassador && (
            <div className="inline-flex items-center gap-2 bg-[#FFD600]/10 border border-[#FFD600]/20 rounded-full px-4 py-1.5 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#FFD600]" />
              <span className="text-xs text-[#FFD600] font-medium">Ambassador Referral</span>
            </div>
          )}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            {referrerName} shared their
            <br />
            <span style={{ color: "#FF1F23" }}>biological advantage</span> with you.
          </h1>

          <p className="text-base md:text-lg text-[#6B7A90] max-w-2xl mx-auto mb-10 leading-relaxed">
            GenoMAX&#178; is a Biological Operating System that reads your blood chemistry,
            applies gender-specific clinical intelligence, and outputs a deterministic
            supplement protocol calibrated to your biology.
          </p>

          {/* OS Environment Picker */}
          <div className="max-w-md mx-auto mb-8">
            <p className="text-xs text-[#6B7A90] mb-3 font-mono tracking-wider uppercase">Select your environment</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedOS("maximo")}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedOS === "maximo"
                    ? "border-[#009BFF] bg-[#009BFF]/5"
                    : "border-[#1A2030] bg-[#0D1117] hover:border-[#009BFF]/40"
                }`}
              >
                {selectedOS === "maximo" && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#009BFF] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="text-lg font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  MAXimo&#178;
                </div>
                <div className="text-xs text-[#6B7A90] mt-1">Male-optimized BioOS</div>
                <div className="w-8 h-0.5 bg-[#009BFF] mt-2 rounded-full" />
              </button>
              <button
                onClick={() => setSelectedOS("maxima")}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedOS === "maxima"
                    ? "border-[#D4A0A0] bg-[#D4A0A0]/5"
                    : "border-[#1A2030] bg-[#0D1117] hover:border-[#D4A0A0]/40"
                }`}
              >
                {selectedOS === "maxima" && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#D4A0A0] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="text-lg font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  MAXima&#178;
                </div>
                <div className="text-xs text-[#6B7A90] mt-1">Female-optimized BioOS</div>
                <div className="w-8 h-0.5 bg-[#D4A0A0] mt-2 rounded-full" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <button
              onClick={handleStartAssessment}
              className="gx-btn-primary flex items-center gap-2 justify-center text-base px-8 py-3.5 text-lg"
            >
              Claim ${discount} Off <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/science" className="gx-btn-outline flex items-center gap-2 justify-center">
              Read the Science
            </Link>
          </div>

          <p className="text-xs text-[#6B7A90]/50 font-mono">
            Code <span className="text-[#6B7A90]/70">{info.code}</span> applied automatically at checkout
          </p>
        </div>
      </section>

      {/* ── EVIDENCE BAR ── */}
      <section
        id="evidence"
        ref={(el) => { sectionRefs.current["evidence"] = el; }}
        className="py-8 border-y"
        style={{ background: "#080B10", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className={`container mx-auto px-4 ${sectionClass("evidence")}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-mono text-2xl font-bold text-white">41</div>
              <div className="text-xs text-[#6B7A90] mt-1">Biomarkers Processed</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-white">31</div>
              <div className="text-xs text-[#6B7A90] mt-1">Safety Gates</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-white">163</div>
              <div className="text-xs text-[#6B7A90] mt-1">Gender-Specific Modules</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-[#FF1F23]">0</div>
              <div className="text-xs text-[#6B7A90] mt-1">Commercial Overrides</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section
        id="compare"
        ref={(el) => { sectionRefs.current["compare"] = el; }}
        className="py-16 md:py-20"
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl ${sectionClass("compare")}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Not Another Supplement Brand.
          </h2>
          <p className="text-[#6B7A90] text-center mb-10 max-w-xl mx-auto">
            GenoMAX&#178; is a Biological Infrastructure Platform. Here's how it differs.
          </p>

          <div className="overflow-hidden rounded-xl border border-[#1A2030]">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#0D1117" }}>
                  <th className="text-left py-3 px-4 text-xs text-[#6B7A90] font-medium uppercase tracking-wider w-[40%]">Feature</th>
                  <th className="text-center py-3 px-4 text-xs text-[#6B7A90] font-medium uppercase tracking-wider">Generic Brands</th>
                  <th className="text-center py-3 px-4 text-xs font-medium uppercase tracking-wider" style={{ color: "#FF1F23" }}>
                    GenoMAX&#178;
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A2030]">
                {[
                  { feature: "Protocol source", generic: "Questionnaire", gx: "Blood biomarkers" },
                  { feature: "Gender-specific dosing", generic: "Unisex", gx: "Male + Female OS" },
                  { feature: "Safety gates", generic: "None", gx: "31 hard-coded gates" },
                  { feature: "Drug-nutrient checks", generic: "Not included", gx: "Automatic screening" },
                  { feature: "Dosing schedule", generic: "Take daily", gx: "Chronobiology 3-window" },
                  { feature: "Evidence threshold", generic: "Marketing claims", gx: "20+ RCTs, 2000+ participants" },
                  { feature: "Retest tracking", generic: "Not offered", gx: "Quarterly trend analysis" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#080B10]" : "bg-[#0A0D12]"}>
                    <td className="py-3 px-4 text-white font-medium text-xs">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-[#6B7A90] text-xs">{row.generic}</td>
                    <td className="py-3 px-4 text-center text-xs">
                      <span className="inline-flex items-center gap-1 text-[#00E676] font-medium">
                        <Check className="w-3 h-3" /> {row.gx}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY THE OLD WAY IS BROKEN ── */}
      <section
        id="broken"
        ref={(el) => { sectionRefs.current["broken"] = el; }}
        className="py-16 md:py-20"
        style={{ background: "#080B10" }}
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${sectionClass("broken")}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Why the Old Way is Broken
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#0D1117] border border-[#1A2030] rounded-xl p-6">
              <FlaskConical className="w-6 h-6 text-[#FF1F23] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">DNA Testing is Theater</h3>
              <p className="text-xs text-[#6B7A90] leading-relaxed">
                524,592+ participants across RCTs show DNA-based nutrition guidance provides zero benefit over standard assessment. Blood markers change. SNPs don't.
              </p>
            </div>
            <div className="bg-[#0D1117] border border-[#1A2030] rounded-xl p-6">
              <HeartPulse className="w-6 h-6 text-[#009BFF] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Unisex Ignores Biology</h3>
              <p className="text-xs text-[#6B7A90] leading-relaxed">
                Iron metabolism, hormonal cycling, and thyroid sensitivity differ fundamentally between sexes. One-size-fits-all is a commercial convenience, not a clinical decision.
              </p>
            </div>
            <div className="bg-[#0D1117] border border-[#1A2030] rounded-xl p-6">
              <Brain className="w-6 h-6 text-[#FFD600] mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Timing is Clinical</h3>
              <p className="text-xs text-[#6B7A90] leading-relaxed">
                Iron blocks zinc absorption. Calcium competes with magnesium. Fat-soluble vitamins need lipids. Your dosing schedule is a clinical decision, not a marketing layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="steps"
        ref={(el) => { sectionRefs.current["steps"] = el; }}
        className="py-16 md:py-20"
      >
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center ${sectionClass("steps")}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            How It Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Blood Work", desc: "Upload existing results or order through our partner labs.", icon: Activity },
              { step: "02", title: "41 Biomarkers", desc: "Processed through 31 safety gates with gender-specific thresholds.", icon: Shield },
              { step: "03", title: "Your Protocol", desc: "Gender-optimized modules with chronobiology dosing schedule.", icon: Beaker },
              { step: "04", title: "Track + Retest", desc: "Quarterly retesting with trend analysis shows measurable improvement.", icon: Clock },
            ].map((item) => (
              <div key={item.step} className="bg-[#0D1117] border border-[#1A2030] rounded-xl p-5 text-left">
                <item.icon className="w-5 h-5 text-[#FF1F23] mb-3" />
                <div className="font-mono text-lg font-bold text-[#FF1F23]/60 mb-1">{item.step}</div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-[#6B7A90] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section
        id="trust"
        ref={(el) => { sectionRefs.current["trust"] = el; }}
        className="py-12"
        style={{ background: "#080B10" }}
      >
        <div className={`container mx-auto px-4 max-w-4xl ${sectionClass("trust")}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4">
              <Lock className="w-5 h-5 text-[#FF1F23] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Non-Negotiable Safety</h4>
                <p className="text-xs text-[#6B7A90]">Safety gates are hard-coded. No commercial override exists. If your ferritin is elevated, iron is blocked. Period.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <Shield className="w-5 h-5 text-[#009BFF] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">HSA/FSA Eligible</h4>
                <p className="text-xs text-[#6B7A90]">Blood-biomarker-based protocols qualify as preventive health. Use your pre-tax health dollars.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <Users className="w-5 h-5 text-[#00E676] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">No Rejected Ingredients</h4>
                <p className="text-xs text-[#6B7A90]">Ashwagandha, Kava, high-dose biotin, and beta-carotene (smokers) are permanently excluded based on clinical evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        id="cta"
        ref={(el) => { sectionRefs.current["cta"] = el; }}
        className="py-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ background: `radial-gradient(ellipse at center, #FF1F23 0%, transparent 60%)` }} />

        <div className={`container mx-auto px-4 relative ${sectionClass("cta")}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Blood Does Not Negotiate.
          </h2>
          <p className="text-[#6B7A90] mb-8 max-w-md mx-auto">Neither should your supplement protocol.</p>

          <button
            onClick={handleStartAssessment}
            className="gx-btn-primary inline-flex items-center gap-2 text-lg px-10 py-4 mb-4"
          >
            Get ${discount} Off Your First Protocol <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-[#6B7A90]/50 font-mono mb-8">
            Referral code {info.code} applied automatically
          </p>

          {/* Share this page */}
          <div className="relative inline-block" ref={shareRef}>
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="gx-btn-outline inline-flex items-center gap-2 text-sm"
            >
              <Share2 className="w-4 h-4" /> Share this page
              <ChevronDown className={`w-3 h-3 transition-transform ${showShareMenu ? "rotate-180" : ""}`} />
            </button>

            {showShareMenu && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0D1117] border border-[#1A2030] rounded-xl p-2 shadow-xl min-w-[200px] z-10">
                <button onClick={() => shareVia("whatsapp")} className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1A2030] transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-sm text-white">WhatsApp</span>
                </button>
                <button onClick={() => shareVia("email")} className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1A2030] transition-colors">
                  <Mail className="w-4 h-4 text-[#009BFF]" />
                  <span className="text-sm text-white">Email</span>
                </button>
                <button onClick={() => shareVia("twitter")} className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1A2030] transition-colors">
                  <span className="w-4 h-4 flex items-center justify-center text-white text-xs font-bold">X</span>
                  <span className="text-sm text-white">Twitter / X</span>
                </button>
                <div className="h-px bg-[#1A2030] my-1" />
                <button onClick={() => shareVia("copy")} className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#1A2030] transition-colors">
                  {copied ? <Check className="w-4 h-4 text-[#00E676]" /> : <Copy className="w-4 h-4 text-[#6B7A90]" />}
                  <span className="text-sm text-white">{copied ? "Copied!" : "Copy Link"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER TAGLINE ── */}
      <div className="py-6 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <p className="text-xs font-mono text-[#FF1F23]/40 italic">
          Blood does not negotiate.
        </p>
      </div>
    </div>
  );
};

export default ReferralLanding;
