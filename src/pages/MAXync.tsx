import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Bell, BarChart3, Clock } from "lucide-react";

const MAXync = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          MAXync&#178;
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          The daily execution layer. Calendar-integrated protocol adherence that ensures you take the right modules at the right time, every day.
        </p>
        <p className="text-xs font-mono text-[#FF1F23] mt-4">Available on Pro and Elite tiers</p>
      </div>
    </section>

    <section className="gx-section-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Clock className="w-6 h-6 text-[#FFD600]" />, title: "3-Window Dosing", desc: "Morning fasted, midday with food, evening before sleep. Each window is clinically optimized for the modules assigned to it." },
            { icon: <Bell className="w-6 h-6 text-[#009BFF]" />, title: "Push Notifications", desc: "Configurable reminders for each dosing window. Never miss a window. Never take modules at the wrong time." },
            { icon: <Calendar className="w-6 h-6 text-[#00E676]" />, title: "Calendar Integration", desc: "Syncs with Google Calendar, Apple Calendar, and Outlook. Your protocol appears alongside your schedule." },
            { icon: <BarChart3 className="w-6 h-6 text-[#FF2D95]" />, title: "Adherence Tracking", desc: "Visual compliance scores. See which windows you hit and which you missed. Adherence data informs protocol adjustments." },
          ].map((item, i) => (
            <div key={i} className="gx-card p-8">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gx-section text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Protocol Without Execution is Just Information.</h2>
        <p className="text-[#6B7A90] max-w-2xl mx-auto mb-8">MAXync&#178; turns your protocol from a document into a daily system. The best protocol in the world is useless if you do not follow it.</p>
        <Link to="/pricing" className="gx-btn-primary inline-flex items-center gap-2">
          Get MAXync&#178; with Pro <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default MAXync;
