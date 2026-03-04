import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowRight, Package, Calendar, BarChart3 } from "lucide-react";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [gender, setGender] = useState<"male" | "female">("male");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("gx_session");
      if (raw) {
        const s = JSON.parse(raw);
        if (s.gender) setGender(s.gender);
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
          <p className="text-lg text-[#6B7A90] mb-8">
            Your <span style={{ color: accentColor }}>{osEnv}</span> subscription is now active. The Biological Operating System is running.
          </p>

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
                  icon: <Calendar className="w-5 h-5 text-[#00E676]" />,
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Upload Blood Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard/trends" className="gx-btn-outline inline-flex items-center gap-2">
              View Trend Dashboard
            </Link>
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
