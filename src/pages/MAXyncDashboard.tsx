import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Sun, Moon, Utensils, Calendar, Bell, Trophy, Flame, Target, ChevronLeft, ChevronRight, Download } from "lucide-react";

// ── Types ────────────────────────────────────────────────
interface DosingWindow {
  id: "morning" | "midday" | "evening";
  label: string;
  icon: React.ReactNode;
  time: string;
  instruction: string;
  color: string;
}

interface DayLog {
  morning: boolean;
  midday: boolean;
  evening: boolean;
}

const WINDOWS: DosingWindow[] = [
  { id: "morning", label: "Morning Fasted", icon: <Sun className="w-5 h-5" />, time: "6:00 - 8:00 AM", instruction: "Take on empty stomach with water. No food for 30 min.", color: "#FFD600" },
  { id: "midday", label: "Midday with Food", icon: <Utensils className="w-5 h-5" />, time: "12:00 - 2:00 PM", instruction: "Take with a meal containing dietary fat for absorption.", color: "#00E676" },
  { id: "evening", label: "Evening Before Sleep", icon: <Moon className="w-5 h-5" />, time: "9:00 - 11:00 PM", instruction: "Take 30-60 min before bed. Magnesium aids sleep quality.", color: "#009BFF" },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ── Storage helpers ──────────────────────────────────────
const getStorageKey = (date: string) => `maxync_${date}`;

const loadDayLog = (date: string): DayLog => {
  try {
    const raw = localStorage.getItem(getStorageKey(date));
    if (raw) return JSON.parse(raw);
  } catch {}
  return { morning: false, midday: false, evening: false };
};

const saveDayLog = (date: string, log: DayLog) => {
  try { localStorage.setItem(getStorageKey(date), JSON.stringify(log)); } catch {}
};

const formatDate = (d: Date) => d.toISOString().split("T")[0];

const getWeekDates = (weekOffset: number): Date[] => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1) + weekOffset * 7);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
};

// ── Calendar export ──────────────────────────────────────
const generateICS = () => {
  const events: string[] = [];
  const now = new Date();
  for (let d = 0; d < 30; d++) {
    const date = new Date(now);
    date.setDate(now.getDate() + d);
    const dateStr = formatDate(date).replace(/-/g, "");

    WINDOWS.forEach((w) => {
      const times: Record<string, [string, string]> = {
        morning: ["060000", "063000"],
        midday: ["120000", "123000"],
        evening: ["210000", "213000"],
      };
      const [start, end] = times[w.id];
      events.push(
        `BEGIN:VEVENT\nDTSTART:${dateStr}T${start}\nDTEND:${dateStr}T${end}\nSUMMARY:GenoMAX\u00B2 ${w.label}\nDESCRIPTION:${w.instruction}\nEND:VEVENT`
      );
    });
  }

  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//GenoMAX2//MAXync2//EN\nCALSCALE:GREGORIAN\n${events.join("\n")}\nEND:VCALENDAR`;
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "genomax2-protocol-schedule.ics";
  a.click();
  URL.revokeObjectURL(url);
};

// ── Component ────────────────────────────────────────────
const MAXyncDashboard = () => {
  const today = formatDate(new Date());
  const [todayLog, setTodayLog] = useState<DayLog>(loadDayLog(today));
  const [weekOffset, setWeekOffset] = useState(0);
  const [streak, setStreak] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Calculate streak
  useEffect(() => {
    let count = 0;
    const d = new Date();
    d.setDate(d.getDate() - 1); // start from yesterday
    while (true) {
      const log = loadDayLog(formatDate(d));
      if (log.morning && log.midday && log.evening) {
        count++;
        d.setDate(d.getDate() - 1);
      } else break;
      if (count > 365) break;
    }
    // Include today if all done
    if (todayLog.morning && todayLog.midday && todayLog.evening) count++;
    setStreak(count);
  }, [todayLog]);

  const toggleWindow = (windowId: "morning" | "midday" | "evening") => {
    const updated = { ...todayLog, [windowId]: !todayLog[windowId] };
    setTodayLog(updated);
    saveDayLog(today, updated);
  };

  const enableNotifications = async () => {
    if ("Notification" in window) {
      const perm = await Notification.requestPermission();
      setNotificationsEnabled(perm === "granted");
    }
  };

  const weekDates = getWeekDates(weekOffset);
  const completedToday = [todayLog.morning, todayLog.midday, todayLog.evening].filter(Boolean).length;
  const adherencePercent = Math.round((completedToday / 3) * 100);

  // Week adherence data
  const weekData = weekDates.map((d) => {
    const log = loadDayLog(formatDate(d));
    const done = [log.morning, log.midday, log.evening].filter(Boolean).length;
    return { date: d, log, score: done, isToday: formatDate(d) === today, isFuture: d > new Date() };
  });

  const weekAvg = weekData.filter((d) => !d.isFuture && formatDate(d.date) <= today)
    .reduce((sum, d) => sum + d.score, 0);
  const weekTotal = weekData.filter((d) => !d.isFuture && formatDate(d.date) <= today).length * 3;
  const weekPercent = weekTotal > 0 ? Math.round((weekAvg / weekTotal) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Header */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono text-[#FF1F23] tracking-wider mb-1">MAXYNC&#178; EXECUTION LAYER</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Daily Protocol
              </h1>
              <p className="text-sm text-[#6B7A90] mt-1">
                {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={generateICS}
                className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-[#1A2030] text-[#6B7A90] hover:border-[#00E676] hover:text-[#00E676] transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Export to Calendar
              </button>
              <button
                onClick={enableNotifications}
                className={`flex items-center gap-2 text-xs px-4 py-2 rounded-lg border transition-colors ${
                  notificationsEnabled
                    ? "border-[#00E676]/40 bg-[#00E676]/10 text-[#00E676]"
                    : "border-[#1A2030] text-[#6B7A90] hover:border-[#009BFF] hover:text-[#009BFF]"
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                {notificationsEnabled ? "Notifications On" : "Enable Notifications"}
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Today", value: `${completedToday}/3`, color: completedToday === 3 ? "#00E676" : "#FFD600", icon: <Target className="w-4 h-4" /> },
              { label: "Today Score", value: `${adherencePercent}%`, color: adherencePercent === 100 ? "#00E676" : adherencePercent >= 66 ? "#FFD600" : "#FF1F23", icon: <Check className="w-4 h-4" /> },
              { label: "Week Average", value: `${weekPercent}%`, color: weekPercent >= 80 ? "#00E676" : weekPercent >= 50 ? "#FFD600" : "#FF1F23", icon: <Calendar className="w-4 h-4" /> },
              { label: "Streak", value: `${streak} day${streak !== 1 ? "s" : ""}`, color: streak >= 7 ? "#00E676" : streak >= 3 ? "#FFD600" : "#6B7A90", icon: <Flame className="w-4 h-4" /> },
            ].map((stat, i) => (
              <div key={i} className="gx-card p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                  <span className="text-[10px] font-mono text-[#6B7A90] uppercase tracking-wider">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dosing Windows */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Dosing Windows</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {WINDOWS.map((w) => {
              const done = todayLog[w.id];
              return (
                <button
                  key={w.id}
                  onClick={() => toggleWindow(w.id)}
                  className={`gx-card p-6 text-left transition-all ${
                    done ? "ring-2" : "hover:border-[#6B7A90]/40"
                  }`}
                  style={done ? { borderColor: w.color, boxShadow: `0 0 20px ${w.color}15` } : {}}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${w.color}15`, color: w.color }}
                      >
                        {w.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{w.label}</p>
                        <p className="text-[10px] font-mono text-[#6B7A90]">{w.time}</p>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        done ? "scale-110" : "border-2 border-[#1A2030]"
                      }`}
                      style={done ? { backgroundColor: w.color } : {}}
                    >
                      {done && <Check className="w-4 h-4 text-[#05070A]" />}
                    </div>
                  </div>
                  <p className="text-xs text-[#6B7A90] leading-relaxed">{w.instruction}</p>
                  <p className="text-[10px] font-mono mt-3" style={{ color: done ? w.color : "#6B7A90" }}>
                    {done ? "COMPLETED" : "TAP TO MARK COMPLETE"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Heatmap */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Weekly Adherence</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWeekOffset((w) => w - 1)}
                className="w-8 h-8 rounded-lg border border-[#1A2030] flex items-center justify-center text-[#6B7A90] hover:text-white hover:border-[#6B7A90] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#6B7A90] min-w-[80px] text-center">
                {weekOffset === 0 ? "This week" : weekOffset === -1 ? "Last week" : `${Math.abs(weekOffset)}w ago`}
              </span>
              <button
                onClick={() => setWeekOffset((w) => Math.min(w + 1, 0))}
                disabled={weekOffset >= 0}
                className="w-8 h-8 rounded-lg border border-[#1A2030] flex items-center justify-center text-[#6B7A90] hover:text-white hover:border-[#6B7A90] transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="gx-card p-6">
            <div className="grid grid-cols-7 gap-2">
              {/* Day labels */}
              {DAYS.map((day) => (
                <div key={day} className="text-center">
                  <p className="text-[10px] font-mono text-[#6B7A90] mb-2">{day}</p>
                </div>
              ))}
              {/* Heatmap cells */}
              {weekData.map((d, i) => {
                const bg =
                  d.isFuture ? "#0D1117" :
                  d.score === 3 ? "#00E676" :
                  d.score === 2 ? "#FFD600" :
                  d.score === 1 ? "#FF6B35" :
                  "#1A2030";
                const opacity = d.isFuture ? 0.3 : d.score === 0 ? 0.4 : 1;
                return (
                  <div key={i} className="text-center">
                    <div
                      className={`w-full aspect-square rounded-lg flex flex-col items-center justify-center transition-all ${
                        d.isToday ? "ring-2 ring-white/30" : ""
                      }`}
                      style={{ backgroundColor: bg, opacity }}
                    >
                      <span className="text-xs font-mono font-bold" style={{ color: d.score >= 2 ? "#05070A" : "#6B7A90" }}>
                        {d.date.getDate()}
                      </span>
                      {!d.isFuture && (
                        <span className="text-[8px] font-mono" style={{ color: d.score >= 2 ? "#05070A" : "#6B7A90" }}>
                          {d.score}/3
                        </span>
                      )}
                    </div>
                    {/* Window dots */}
                    {!d.isFuture && (
                      <div className="flex justify-center gap-1 mt-1">
                        {(["morning", "midday", "evening"] as const).map((wId) => (
                          <div
                            key={wId}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: d.log[wId]
                                ? WINDOWS.find((w) => w.id === wId)!.color
                                : "#1A2030",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-[#1A2030]">
              {[
                { label: "0/3", color: "#1A2030" },
                { label: "1/3", color: "#FF6B35" },
                { label: "2/3", color: "#FFD600" },
                { label: "3/3", color: "#00E676" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] font-mono text-[#6B7A90]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streak milestones */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Milestones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { days: 7, label: "First Week", emoji: "7", unlocked: streak >= 7 },
              { days: 14, label: "Two Weeks", emoji: "14", unlocked: streak >= 14 },
              { days: 30, label: "First Month", emoji: "30", unlocked: streak >= 30 },
              { days: 90, label: "Full Quarter", emoji: "90", unlocked: streak >= 90 },
            ].map((m) => (
              <div
                key={m.days}
                className={`gx-card p-4 text-center transition-all ${
                  m.unlocked ? "border-[#FFD600]/40" : "opacity-40"
                }`}
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  m.unlocked ? "bg-[#FFD600]/20" : "bg-[#1A2030]"
                }`}>
                  {m.unlocked ? (
                    <Trophy className="w-6 h-6 text-[#FFD600]" />
                  ) : (
                    <span className="text-lg font-mono font-bold text-[#6B7A90]">{m.emoji}</span>
                  )}
                </div>
                <p className="text-xs font-bold text-white">{m.label}</p>
                <p className="text-[10px] font-mono text-[#6B7A90]">{m.days}-day streak</p>
                {m.unlocked && <p className="text-[10px] font-mono text-[#FFD600] mt-1">UNLOCKED</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MAXyncDashboard;
