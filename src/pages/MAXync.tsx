import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Bell, BarChart3, Clock, Check, Sun, Coffee, Moon, Trophy, Flame, Target, ChevronRight } from "lucide-react";

const DOSING_WINDOWS = [
  { id: "morning", label: "Morning Fasted", time: "7:00 AM", icon: <Sun className="w-5 h-5" />, color: "#FFD600", desc: "Empty stomach, 30 min before food. Optimal for fat-soluble vitamins and minerals requiring gastric pH." },
  { id: "midday", label: "Midday With Food", time: "12:30 PM", icon: <Coffee className="w-5 h-5" />, color: "#00E676", desc: "With a meal containing fat. Maximizes absorption of fat-soluble compounds and reduces GI sensitivity." },
  { id: "evening", label: "Evening Before Sleep", time: "9:00 PM", icon: <Moon className="w-5 h-5" />, color: "#009BFF", desc: "30 min before bed. Magnesium, melatonin precursors, and recovery-phase nutrients." },
];

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MAXync = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [adherenceGrid, setAdherenceGrid] = useState<Record<string, Record<string, boolean>>>({});
  const [streak, setStreak] = useState(0);
  const [selectedWindow, setSelectedWindow] = useState<string | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("gx_session");
      if (raw) {
        const s = JSON.parse(raw);
        if (s.gender) setGender(s.gender);
      }
    } catch {}

    // Initialize demo adherence data
    const grid: Record<string, Record<string, boolean>> = {};
    DAYS_OF_WEEK.forEach((day) => {
      grid[day] = {};
      DOSING_WINDOWS.forEach((w) => {
        grid[day][w.id] = Math.random() > 0.2; // 80% adherence demo
      });
    });
    setAdherenceGrid(grid);

    // Count streak
    let s = 0;
    for (let i = DAYS_OF_WEEK.length - 1; i >= 0; i--) {
      const day = DAYS_OF_WEEK[i];
      const allHit = DOSING_WINDOWS.every((w) => grid[day]?.[w.id]);
      if (allHit) s++;
      else break;
    }
    setStreak(s);
  }, []);

  const accentColor = gender === "female" ? "#FF2D95" : "#009BFF";
  const osEnv = gender === "female" ? "MAXima\u00b2" : "MAXimo\u00b2";

  const totalSlots = DAYS_OF_WEEK.length * DOSING_WINDOWS.length;
  const hitSlots = Object.values(adherenceGrid).reduce(
    (acc, day) => acc + Object.values(day).filter(Boolean).length, 0
  );
  const adherenceRate = totalSlots > 0 ? Math.round((hitSlots / totalSlots) * 100) : 0;

  const toggleSlot = (day: string, windowId: string) => {
    setAdherenceGrid((prev) => ({
      ...prev,
      [day]: { ...prev[day], [windowId]: !prev[day]?.[windowId] },
    }));
  };

  const handleEnableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        new Notification("MAXync\u00b2 Active", {
          body: "You will receive dosing window reminders.",
          icon: "/favicon.ico",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#0D1117] border border-[#1A2030] rounded-full px-4 py-2 mb-4">
            <Clock className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span className="text-xs font-mono text-[#6B7A90]">Daily Execution Layer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            MAXync&#178;
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-2">
            The daily execution layer. Calendar-integrated protocol adherence that ensures you take the right modules at the right time, every day.
          </p>
          <p className="text-xs font-mono mt-4" style={{ color: accentColor }}>
            {osEnv} &middot; Available on Pro and Elite tiers
          </p>
        </div>
      </section>

      {/* Adherence Dashboard */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Weekly Adherence", value: `${adherenceRate}%`, icon: <Target className="w-5 h-5" />, color: adherenceRate >= 80 ? "#00E676" : adherenceRate >= 60 ? "#FFD600" : "#FF1F23" },
              { label: "Current Streak", value: `${streak} day${streak !== 1 ? "s" : ""}`, icon: <Flame className="w-5 h-5" />, color: "#FFD600" },
              { label: "Windows Hit", value: `${hitSlots}/${totalSlots}`, icon: <Trophy className="w-5 h-5" />, color: accentColor },
            ].map((stat) => (
              <div key={stat.label} className="gx-card p-4 text-center">
                <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                </div>
                <p className="text-2xl font-bold font-mono text-white">{stat.value}</p>
                <p className="text-xs text-[#6B7A90] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Adherence Grid */}
          <div className="gx-card p-6 mb-8">
            <h2 className="text-sm font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              This Week
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-xs text-[#6B7A90] font-mono text-left py-2 pr-4 w-36">Window</th>
                    {DAYS_OF_WEEK.map((day) => (
                      <th key={day} className="text-xs text-[#6B7A90] font-mono text-center py-2 px-2">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DOSING_WINDOWS.map((w) => (
                    <tr key={w.id} className="border-t border-[#1A2030]">
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <span style={{ color: w.color }}>{w.icon}</span>
                          <div>
                            <p className="text-xs text-white font-medium">{w.label}</p>
                            <p className="text-[10px] text-[#6B7A90] font-mono">{w.time}</p>
                          </div>
                        </div>
                      </td>
                      {DAYS_OF_WEEK.map((day) => {
                        const hit = adherenceGrid[day]?.[w.id];
                        return (
                          <td key={day} className="text-center py-3 px-2">
                            <button
                              onClick={() => toggleSlot(day, w.id)}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                hit
                                  ? "bg-opacity-100"
                                  : "bg-[#1A2030] hover:bg-[#1A2030]/70"
                              }`}
                              style={hit ? { backgroundColor: `${w.color}30` } : {}}
                            >
                              {hit && <Check className="w-4 h-4" style={{ color: w.color }} />}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Windows Detail */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Chronobiology Dosing Windows
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {DOSING_WINDOWS.map((w) => (
              <button
                key={w.id}
                onClick={() => setSelectedWindow(selectedWindow === w.id ? null : w.id)}
                className={`gx-card p-6 text-left transition-colors ${
                  selectedWindow === w.id ? "ring-1" : ""
                }`}
                style={selectedWindow === w.id ? { borderColor: w.color, boxShadow: `0 0 20px ${w.color}10` } : {}}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${w.color}15` }}>
                    <span style={{ color: w.color }}>{w.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{w.label}</p>
                    <p className="text-xs font-mono" style={{ color: w.color }}>{w.time}</p>
                  </div>
                </div>
                <p className="text-xs text-[#6B7A90] leading-relaxed">{w.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Bell className="w-6 h-6" style={{ color: accentColor }} />,
                title: "Push Notifications",
                desc: "Configurable reminders for each dosing window. Never miss a window. Never take modules at the wrong time.",
                action: notificationsEnabled ? null : (
                  <button
                    onClick={handleEnableNotifications}
                    className="text-xs px-4 py-2 rounded-lg border transition-colors mt-3"
                    style={{ borderColor: `${accentColor}40`, color: accentColor }}
                  >
                    Enable Notifications
                  </button>
                ),
                badge: notificationsEnabled ? "ACTIVE" : null,
              },
              {
                icon: <Calendar className="w-6 h-6 text-[#00E676]" />,
                title: "Calendar Integration",
                desc: "Syncs with Google Calendar, Apple Calendar, and Outlook. Your protocol appears alongside your schedule.",
                action: (
                  <div className="flex gap-2 mt-3">
                    {["Google", "Apple", "Outlook"].map((cal) => (
                      <span key={cal} className="text-[10px] px-2 py-1 rounded bg-[#1A2030] text-[#6B7A90] font-mono">{cal}</span>
                    ))}
                  </div>
                ),
                badge: "COMING SOON",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-[#FFD600]" />,
                title: "Adherence Analytics",
                desc: "Visual compliance scores by window, by day, by week. Adherence data informs protocol adjustments at retest.",
                action: null,
                badge: null,
              },
              {
                icon: <Trophy className="w-6 h-6 text-[#FF2D95]" />,
                title: "Streak Gamification",
                desc: "Maintain daily streaks for consistent execution. Perfect weeks unlock achievement badges. Consistency compounds.",
                action: streak > 0 ? (
                  <div className="flex items-center gap-2 mt-3">
                    <Flame className="w-4 h-4 text-[#FFD600]" />
                    <span className="text-xs font-mono text-[#FFD600]">{streak}-day streak active</span>
                  </div>
                ) : null,
                badge: null,
              },
            ].map((item, i) => (
              <div key={i} className="gx-card p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#05070A] flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      item.badge === "ACTIVE"
                        ? "bg-[#00E676]/10 text-[#00E676]"
                        : "bg-[#1A2030] text-[#6B7A90]"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B7A90] leading-relaxed">{item.desc}</p>
                {item.action}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Protocol Without Execution is Just Information.
          </h2>
          <p className="text-[#6B7A90] max-w-2xl mx-auto mb-8">
            MAXync&#178; turns your protocol from a document into a daily system. The best protocol in the world is useless if you do not follow it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/checkout?tier=pro" className="gx-btn-primary inline-flex items-center gap-2">
              Get MAXync&#178; with Pro <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard/trends" className="gx-btn-outline inline-flex items-center gap-2">
              View Trend Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MAXync;
