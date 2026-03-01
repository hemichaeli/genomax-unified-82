import { Link } from "react-router-dom";
import { Calendar, Bell, Clock, ArrowRight, CheckCircle } from "lucide-react";

const MAXync = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Calendar className="w-3 h-3" />
            <span>Daily Execution Layer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#FF1F23] mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            MAXync<sup className="text-[60%]">2</sup>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            Not a daily reminder. A calendar-integrated protocol adherence and execution layer that ensures your modules are taken in the right window, every day.
          </p>
        </div>
      </section>
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gx-card p-8">
              <Clock className="w-8 h-8 text-[#FFD600] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">3-Window Dosing</h3>
              <p className="text-sm text-[#6B7A90]">Morning (fasted), Midday (with food), Evening (before sleep). Each window is calibrated for optimal absorption based on chronobiology and nutrient interaction science.</p>
            </div>
            <div className="gx-card p-8">
              <Bell className="w-8 h-8 text-[#009BFF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Push Notifications</h3>
              <p className="text-sm text-[#6B7A90]">Timed alerts for each dosing window. Not generic. Your specific modules for that window, with any co-ingestion requirements (take with fat, take on empty stomach).</p>
            </div>
            <div className="gx-card p-8">
              <Calendar className="w-8 h-8 text-[#00E676] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Calendar Integration</h3>
              <p className="text-sm text-[#6B7A90]">Sync your dosing schedule to Google Calendar, Apple Calendar, or Outlook. Your protocol becomes part of your daily routine infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Adherence Drives Results</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: '#111620', border: '1px solid #1A2030' }}>
                <CheckCircle className="w-5 h-5 text-[#00E676] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Daily compliance tracking</h3>
                  <p className="text-xs text-[#6B7A90]">Mark each window as completed. See your streak and adherence percentage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: '#111620', border: '1px solid #1A2030' }}>
                <CheckCircle className="w-5 h-5 text-[#00E676] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Retest correlation</h3>
                  <p className="text-xs text-[#6B7A90]">When your quarterly retest arrives, adherence data contextualizes biomarker movement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg" style={{ background: '#111620', border: '1px solid #1A2030' }}>
                <CheckCircle className="w-5 h-5 text-[#00E676] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Gamification layer</h3>
                  <p className="text-xs text-[#6B7A90]">Streaks, monthly completions, and referral leaderboard create positive feedback loops.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B7A90] mb-6">Available on Pro and Elite tiers.</p>
          <Link to="/pricing" className="gx-btn-primary inline-block">
            View Plans <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MAXync;
