import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, TrendingUp, TrendingDown, Minus, ArrowRight, Loader2, RefreshCw, Calendar, Shield, Package, Share2, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

// Demo user ID for pre-auth state
const DEMO_USER_ID = "00000000-0000-0000-0000-000000000001";

interface Session {
  session_id: string;
  session_number: number;
  sex: string;
  age: number | null;
  lab_source: string | null;
  test_date: string | null;
  upload_method: string;
  biomarker_count: number;
  safety_gates_fired: number;
  protocol_module_count: number;
  created_at: string;
  biomarkers: Array<{ code: string; value: number; unit: string; flag: string | null }>;
}

interface MarkerTrend {
  code: string;
  name: string;
  unit: string;
  ref_low: number | null;
  ref_high: number | null;
  optimal_low: number | null;
  optimal_high: number | null;
  data_points: Array<{ session: number; value: number; flag: string | null; date: string }>;
  change: { first: number; last: number; delta: number; percent: number; direction: string; sessions_span: number } | null;
}

interface Comparison {
  code: string;
  name: string;
  unit: string;
  old_value: number | null;
  new_value: number;
  delta: number | null;
  percent_change: number | null;
  old_flag: string | null;
  new_flag: string | null;
  status: string;
  ref_low: number | null;
  ref_high: number | null;
}

interface CompareData {
  comparable: boolean;
  message?: string;
  session_older?: { id: string; number: number; date: string; biomarker_count: number };
  session_newer?: { id: string; number: number; date: string; biomarker_count: number };
  days_between?: number;
  summary?: { improved: number; declined: number; stable: number; new_markers: number; improvement_rate: number };
  comparisons?: Comparison[];
}

interface ShareCard {
  shareable: boolean;
  message?: string;
  days_between?: number;
  improvements?: Array<{ name: string; old_value: number; new_value: number; unit: string; percent_change: number; text: string }>;
  total_improved?: number;
  share_text?: string;
}

type Tab = "overview" | "compare" | "trends";

const FLAG_COLORS: Record<string, { bg: string; text: string }> = {
  LOW: { bg: "rgba(255,149,0,0.15)", text: "#FF9500" },
  L: { bg: "rgba(255,149,0,0.15)", text: "#FF9500" },
  HIGH: { bg: "rgba(255,31,35,0.15)", text: "#FF1F23" },
  H: { bg: "rgba(255,31,35,0.15)", text: "#FF1F23" },
  NORMAL: { bg: "rgba(0,230,118,0.15)", text: "#00E676" },
  OPTIMAL: { bg: "rgba(0,230,118,0.15)", text: "#00E676" },
};

const STATUS_CONFIG: Record<string, { icon: typeof TrendingUp; color: string; label: string }> = {
  improved: { icon: TrendingUp, color: "#00E676", label: "Improved" },
  declined: { icon: TrendingDown, color: "#FF1F23", label: "Declined" },
  stable: { icon: Minus, color: "#6B7A90", label: "Stable" },
  changed: { icon: Activity, color: "#009BFF", label: "Changed" },
  new: { icon: Activity, color: "#FFD600", label: "New" },
};

const TrendDashboard = () => {
  const [tab, setTab] = useState<Tab>("overview");
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [compare, setCompare] = useState<CompareData | null>(null);
  const [trends, setTrends] = useState<MarkerTrend[]>([]);
  const [card, setCard] = useState<ShareCard | null>(null);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [histRes, compRes, trendRes, cardRes] = await Promise.allSettled([
        fetch(`${API_BASE}/api/v1/trends/history/${DEMO_USER_ID}`),
        fetch(`${API_BASE}/api/v1/trends/compare/${DEMO_USER_ID}`),
        fetch(`${API_BASE}/api/v1/trends/markers/${DEMO_USER_ID}`),
        fetch(`${API_BASE}/api/v1/trends/card/${DEMO_USER_ID}`),
      ]);

      if (histRes.status === "fulfilled" && histRes.value.ok) {
        const d = await histRes.value.json();
        setSessions(d.sessions || []);
      }
      if (compRes.status === "fulfilled" && compRes.value.ok) {
        setCompare(await compRes.value.json());
      }
      if (trendRes.status === "fulfilled" && trendRes.value.ok) {
        const d = await trendRes.value.json();
        setTrends(d.trends || []);
      }
      if (cardRes.status === "fulfilled" && cardRes.value.ok) {
        setCard(await cardRes.value.json());
      }
    } catch {
      // Silently handle - empty state shown
    }
    setLoading(false);
  };

  const copyShareText = () => {
    if (card?.share_text) {
      navigator.clipboard.writeText(card.share_text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return iso;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FF1F23] animate-spin" />
      </div>
    );
  }

  // Empty state - no sessions yet
  if (sessions.length === 0) {
    return (
      <div className="min-h-screen bg-[#05070A]">
        <section className="gx-hero pt-32 pb-20">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <Activity className="w-12 h-12 text-[#6B7A90]/30 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Trend Dashboard
            </h1>
            <p className="text-[#6B7A90] mb-8">
              No bloodwork sessions recorded yet. Complete your first assessment to start tracking biomarker trends over time.
            </p>
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Start Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Trend Dashboard
              </h1>
              <p className="text-sm text-[#6B7A90] mt-1">
                {sessions.length} session{sessions.length !== 1 ? "s" : ""} recorded
                {compare?.comparable && compare.summary ? ` | ${compare.summary.improvement_rate}% improvement rate` : ""}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={loadData} className="gx-btn-outline text-xs flex items-center gap-1.5 px-3 py-1.5">
                <RefreshCw className="w-3 h-3" /> Refresh
              </button>
              <Link to="/assessment" className="gx-btn-primary text-xs flex items-center gap-1.5 px-3 py-1.5">
                <Activity className="w-3 h-3" /> New Blood Test
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 bg-[#0D1117] rounded-lg p-1 max-w-md">
            {([
              { key: "overview", label: "Overview" },
              { key: "compare", label: "Compare" },
              { key: "trends", label: "Trends" },
            ] as { key: Tab; label: string }[]).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex-1 text-xs font-bold py-2 px-3 rounded-md transition-colors ${
                  tab === t.key ? "bg-[#FF1F23] text-white" : "text-[#6B7A90] hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ===== OVERVIEW TAB ===== */}
          {tab === "overview" && (
            <div className="space-y-6">
              {/* Summary Cards */}
              {compare?.comparable && compare.summary && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="gx-card p-5">
                    <div className="font-mono text-2xl font-bold text-white">{sessions.length}</div>
                    <div className="text-xs text-[#6B7A90]">Total Sessions</div>
                  </div>
                  <div className="gx-card p-5">
                    <div className="font-mono text-2xl font-bold text-[#00E676]">{compare.summary.improved}</div>
                    <div className="text-xs text-[#6B7A90]">Improved</div>
                  </div>
                  <div className="gx-card p-5">
                    <div className="font-mono text-2xl font-bold text-[#FF1F23]">{compare.summary.declined}</div>
                    <div className="text-xs text-[#6B7A90]">Declined</div>
                  </div>
                  <div className="gx-card p-5">
                    <div className="font-mono text-2xl font-bold text-[#6B7A90]">{compare.summary.stable}</div>
                    <div className="text-xs text-[#6B7A90]">Stable</div>
                  </div>
                  <div className="gx-card p-5">
                    <div className="font-mono text-2xl font-bold text-[#FFD600]">{compare.summary.improvement_rate}%</div>
                    <div className="text-xs text-[#6B7A90]">Improvement Rate</div>
                  </div>
                </div>
              )}

              {/* Shareable Card */}
              {card?.shareable && card.improvements && card.improvements.length > 0 && (
                <div className="gx-card p-6 border-l-4 border-[#00E676]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-[#00E676]" />
                      <h3 className="text-sm font-bold text-white">Your Improvement Card</h3>
                      <span className="text-xs text-[#6B7A90]">{card.days_between} days</span>
                    </div>
                    <button
                      onClick={copyShareText}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                        copied ? "border-[#00E676] bg-[#00E676]/10 text-[#00E676]" : "border-[#1A2030] text-[#6B7A90] hover:text-white"
                      }`}
                    >
                      {copied ? "Copied!" : "Share #MyBioOS"}
                    </button>
                  </div>
                  <div className="grid gap-2">
                    {card.improvements.map((imp, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0D1117]">
                        <span className="text-sm text-white">{imp.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-[#6B7A90] font-mono">{imp.old_value} {imp.unit}</span>
                          <ArrowRight className="w-3 h-3 text-[#00E676]" />
                          <span className="text-sm font-bold text-[#00E676] font-mono">{imp.new_value} {imp.unit}</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-[#00E676]/10 text-[#00E676]">
                            +{imp.percent_change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#6B7A90]/50 mt-3 text-center font-mono">
                    GenoMAX&#178; | Blood does not negotiate.
                  </p>
                </div>
              )}

              {/* Session Timeline */}
              <div>
                <h3 className="text-sm font-bold text-white mb-4">Session History</h3>
                <div className="space-y-3">
                  {sessions.map((s) => {
                    const isExpanded = expandedSession === s.session_id;
                    return (
                      <div key={s.session_id} className="gx-card overflow-hidden">
                        <button
                          onClick={() => setExpandedSession(isExpanded ? null : s.session_id)}
                          className="w-full p-5 flex items-center justify-between text-left"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#FF1F23]/10 flex items-center justify-center">
                              <span className="font-mono text-sm font-bold text-[#FF1F23]">#{s.session_number}</span>
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white">
                                Session {s.session_number}
                                <span className="text-xs font-normal text-[#6B7A90] ml-2">
                                  {formatDate(s.test_date || s.created_at)}
                                </span>
                              </div>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-[#6B7A90]">{s.biomarker_count} biomarkers</span>
                                {s.safety_gates_fired > 0 && (
                                  <span className="text-xs flex items-center gap-1 text-[#FF9500]">
                                    <Shield className="w-3 h-3" /> {s.safety_gates_fired} gates
                                  </span>
                                )}
                                <span className="text-xs flex items-center gap-1 text-[#009BFF]">
                                  <Package className="w-3 h-3" /> {s.protocol_module_count} modules
                                </span>
                              </div>
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#6B7A90]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#6B7A90]" />
                          )}
                        </button>
                        {isExpanded && s.biomarkers.length > 0 && (
                          <div className="px-5 pb-5 border-t border-[#1A2030] pt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {s.biomarkers.map((bm, i) => {
                                const flagStyle = FLAG_COLORS[bm.flag || "NORMAL"] || FLAG_COLORS.NORMAL;
                                return (
                                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1117]">
                                    <span className="text-xs text-white font-mono">{bm.code}</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs font-bold text-white">{bm.value}</span>
                                      <span className="text-[10px] text-[#6B7A90]">{bm.unit}</span>
                                      {bm.flag && (
                                        <span
                                          className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                                          style={{ backgroundColor: flagStyle.bg, color: flagStyle.text }}
                                        >
                                          {bm.flag}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ===== COMPARE TAB ===== */}
          {tab === "compare" && (
            <div className="space-y-6">
              {!compare?.comparable ? (
                <div className="gx-card p-8 text-center">
                  <AlertTriangle className="w-10 h-10 text-[#FFD600]/30 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Retest Required</h3>
                  <p className="text-sm text-[#6B7A90] mb-6">
                    {compare?.message || "Complete at least two blood tests to see your retest comparison."}
                  </p>
                  <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
                    Upload New Blood Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : compare.comparisons && compare.session_older && compare.session_newer && compare.summary ? (
                <>
                  {/* Comparison Header */}
                  <div className="gx-card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-white">Retest Comparison</h3>
                      <span className="text-xs font-mono text-[#6B7A90]">{compare.days_between} days apart</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-[#0D1117] text-center">
                        <div className="text-xs text-[#6B7A90] mb-1">Session {compare.session_older.number}</div>
                        <div className="text-sm font-mono text-white">{formatDate(compare.session_older.date)}</div>
                        <div className="text-xs text-[#6B7A90] mt-1">{compare.session_older.biomarker_count} markers</div>
                      </div>
                      <div className="p-4 rounded-lg bg-[#0D1117] text-center border border-[#FF1F23]/20">
                        <div className="text-xs text-[#FF1F23] mb-1">Session {compare.session_newer.number}</div>
                        <div className="text-sm font-mono text-white">{formatDate(compare.session_newer.date)}</div>
                        <div className="text-xs text-[#6B7A90] mt-1">{compare.session_newer.biomarker_count} markers</div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="gx-card p-4 text-center">
                      <div className="font-mono text-xl font-bold text-[#00E676]">{compare.summary.improved}</div>
                      <div className="text-[10px] text-[#6B7A90]">Improved</div>
                    </div>
                    <div className="gx-card p-4 text-center">
                      <div className="font-mono text-xl font-bold text-[#FF1F23]">{compare.summary.declined}</div>
                      <div className="text-[10px] text-[#6B7A90]">Declined</div>
                    </div>
                    <div className="gx-card p-4 text-center">
                      <div className="font-mono text-xl font-bold text-[#6B7A90]">{compare.summary.stable}</div>
                      <div className="text-[10px] text-[#6B7A90]">Stable</div>
                    </div>
                    <div className="gx-card p-4 text-center">
                      <div className="font-mono text-xl font-bold text-[#FFD600]">{compare.summary.improvement_rate}%</div>
                      <div className="text-[10px] text-[#6B7A90]">Rate</div>
                    </div>
                  </div>

                  {/* Comparisons Table */}
                  <div className="gx-card overflow-hidden">
                    <div className="p-5 border-b border-[#1A2030]">
                      <h3 className="text-sm font-bold text-white">Biomarker Comparison</h3>
                    </div>
                    <div className="divide-y divide-[#1A2030]">
                      {compare.comparisons.map((c) => {
                        const config = STATUS_CONFIG[c.status] || STATUS_CONFIG.stable;
                        const StatusIcon = config.icon;
                        return (
                          <div key={c.code} className="px-5 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <StatusIcon className="w-4 h-4 flex-shrink-0" style={{ color: config.color }} />
                              <div className="min-w-0">
                                <span className="text-sm text-white block truncate">{c.name}</span>
                                <span className="text-[10px] text-[#6B7A90] font-mono">{c.code}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-right">
                              {c.old_value !== null && (
                                <div className="text-xs">
                                  <span className="text-[#6B7A90] font-mono">{c.old_value}</span>
                                  {c.old_flag && c.old_flag !== "NORMAL" && (
                                    <span
                                      className="ml-1 text-[10px] px-1 py-0.5 rounded font-mono"
                                      style={{
                                        backgroundColor: (FLAG_COLORS[c.old_flag] || FLAG_COLORS.NORMAL).bg,
                                        color: (FLAG_COLORS[c.old_flag] || FLAG_COLORS.NORMAL).text,
                                      }}
                                    >
                                      {c.old_flag}
                                    </span>
                                  )}
                                </div>
                              )}
                              <ArrowRight className="w-3 h-3 text-[#6B7A90] flex-shrink-0" />
                              <div className="text-xs">
                                <span className="text-white font-bold font-mono">{c.new_value}</span>
                                <span className="text-[#6B7A90] ml-1">{c.unit}</span>
                                {c.new_flag && c.new_flag !== "NORMAL" && (
                                  <span
                                    className="ml-1 text-[10px] px-1 py-0.5 rounded font-mono"
                                    style={{
                                      backgroundColor: (FLAG_COLORS[c.new_flag] || FLAG_COLORS.NORMAL).bg,
                                      color: (FLAG_COLORS[c.new_flag] || FLAG_COLORS.NORMAL).text,
                                    }}
                                  >
                                    {c.new_flag}
                                  </span>
                                )}
                              </div>
                              {c.percent_change !== null && (
                                <span
                                  className="text-[10px] font-mono px-2 py-0.5 rounded min-w-[50px] text-center"
                                  style={{ backgroundColor: `${config.color}15`, color: config.color }}
                                >
                                  {c.percent_change > 0 ? "+" : ""}{c.percent_change}%
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}

          {/* ===== TRENDS TAB ===== */}
          {tab === "trends" && (
            <div className="space-y-6">
              {trends.length === 0 ? (
                <div className="gx-card p-8 text-center">
                  <Activity className="w-10 h-10 text-[#6B7A90]/30 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">No Trend Data Yet</h3>
                  <p className="text-sm text-[#6B7A90] mb-6">
                    Complete at least two blood tests to see biomarker trends over time.
                  </p>
                  <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
                    Upload Blood Work <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="grid gap-4">
                  {trends.map((trend) => {
                    const pts = trend.data_points;
                    const hasChange = trend.change !== null;
                    const dir = trend.change?.direction;
                    const isUp = dir === "up";
                    const isDown = dir === "down";

                    // Simple sparkline data (normalize to 0-100 for visual)
                    const values = pts.map((p) => p.value);
                    const min = Math.min(...values);
                    const max = Math.max(...values);
                    const range = max - min || 1;

                    return (
                      <div key={trend.code} className="gx-card p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-sm font-bold text-white">{trend.name}</h4>
                            <span className="text-[10px] font-mono text-[#6B7A90]">{trend.code} ({trend.unit})</span>
                          </div>
                          {hasChange && trend.change && (
                            <div className="text-right">
                              <div className="flex items-center gap-1 justify-end">
                                {isUp && <TrendingUp className="w-4 h-4 text-[#00E676]" />}
                                {isDown && <TrendingDown className="w-4 h-4 text-[#FF9500]" />}
                                {!isUp && !isDown && <Minus className="w-4 h-4 text-[#6B7A90]" />}
                                <span
                                  className="text-sm font-bold font-mono"
                                  style={{
                                    color: isUp ? "#00E676" : isDown ? "#FF9500" : "#6B7A90",
                                  }}
                                >
                                  {trend.change.percent > 0 ? "+" : ""}{trend.change.percent}%
                                </span>
                              </div>
                              <span className="text-[10px] text-[#6B7A90]">
                                {trend.change.first} -> {trend.change.last} {trend.unit}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Simple visual sparkline */}
                        <div className="flex items-end gap-1 h-12 mt-2">
                          {pts.map((pt, i) => {
                            const height = ((pt.value - min) / range) * 100;
                            const isLast = i === pts.length - 1;
                            const flagColor = pt.flag && (pt.flag === "LOW" || pt.flag === "L")
                              ? "#FF9500"
                              : pt.flag && (pt.flag === "HIGH" || pt.flag === "H")
                              ? "#FF1F23"
                              : "#009BFF";

                            return (
                              <div
                                key={i}
                                className="flex-1 rounded-t-sm transition-all relative group"
                                style={{
                                  height: `${Math.max(height, 8)}%`,
                                  backgroundColor: isLast ? flagColor : `${flagColor}40`,
                                }}
                              >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-[#1A2030] px-2 py-0.5 rounded text-[10px] text-white font-mono whitespace-nowrap z-10">
                                  {pt.value} {trend.unit}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Reference range bar */}
                        {trend.ref_low !== null && trend.ref_high !== null && (
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[10px] text-[#6B7A90]">Ref: {trend.ref_low}</span>
                            <div className="flex-1 h-px bg-[#1A2030] mx-2" />
                            <span className="text-[10px] text-[#6B7A90]">{trend.ref_high}</span>
                          </div>
                        )}

                        {/* Data point labels */}
                        <div className="flex justify-between mt-1">
                          {pts.map((pt, i) => (
                            <span key={i} className="text-[9px] text-[#6B7A90]/50 font-mono flex-1 text-center">
                              S{pt.session}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Retest CTA */}
          {sessions.length > 0 && sessions.length < 2 && (
            <div className="gx-card p-6 text-center mt-8 border border-[#FFD600]/20">
              <Calendar className="w-8 h-8 text-[#FFD600] mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-2">Time for Your First Retest?</h3>
              <p className="text-xs text-[#6B7A90] mb-4">
                Meaningful biomarker changes require at least 90 days. Retest to unlock comparison analytics and track your biological improvement.
              </p>
              <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2 text-sm">
                Upload Retest Results <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TrendDashboard;
