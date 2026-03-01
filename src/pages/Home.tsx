import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Beaker, Activity, Zap, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Hero */}
      <section className="gx-hero min-h-[90vh] flex items-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="gx-safety-badge mx-auto w-fit">
              <Shield className="w-3 h-3" />
              <span>Gender-Optimized Biological Operating System</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Your Blood Speaks.
              <br />
              <span className="text-[#FF1F23]">We Listen.</span>
              <br />
              Your Protocol Follows.
            </h1>

            <p className="text-lg md:text-xl text-[#6B7A90] max-w-2xl mx-auto leading-relaxed">
              The first Biological Operating System that reads your blood chemistry, applies gender-specific clinical intelligence, and outputs a deterministic supplement protocol calibrated to your biology.
            </p>

            {/* Evidence Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
              {[
                { counter: "1,850+", label: "Clinical Studies" },
                { counter: "2.5M", label: "Human Participants" },
                { counter: "450", label: "Meta-Analyses" },
                { counter: "90%", label: "DBPC Trials" },
              ].map((item, i) => (
                <div key={i} className="gx-evidence-capsule">
                  <div className="counter">{item.counter}</div>
                  <div className="label">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/assessment" className="gx-btn-primary text-center">
                Initialize Your Protocol
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </Link>
              <Link to="/science" className="gx-btn-outline text-center">
                Explore the Science
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POV: Why the Old Way is Broken */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              The $46B Problem Nobody Talks About
            </h2>
            <p className="text-[#6B7A90] text-lg">
              The personalized supplement industry is built on three broken assumptions. We reject all of them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                icon: Beaker,
                title: "DNA Testing is Clinically Useless",
                desc: "Analysis of 524,592+ clinical trial participants shows DNA-based supplement recommendations provide zero additional benefit beyond standard assessment. Blood biomarkers deliver real-time, actionable data. DNA provides static predispositions.",
                tag: "POV #1"
              },
              {
                icon: Activity,
                title: "Unisex Supplements Ignore Biology",
                desc: "Iron metabolism, hormonal cycling, thyroid sensitivity, and micronutrient absorption differ significantly between male and female physiology. One-protocol-fits-all is the nutritional equivalent of prescribing the same eyeglasses to everyone.",
                tag: "POV #2"
              },
              {
                icon: Clock,
                title: "Wrong Timing Wastes Everything",
                desc: "Iron blocks zinc absorption. Calcium competes with magnesium. Fat-soluble vitamins require dietary fat. Our three-window dosing schedule (morning fasted, midday with food, evening before sleep) is a clinical requirement, not a convenience feature.",
                tag: "POV #3"
              },
            ].map((item, i) => (
              <div key={i} className="gx-card p-8">
                <div className="text-xs font-mono text-[#FF1F23] mb-4 uppercase tracking-wider">{item.tag}</div>
                <item.icon className="w-8 h-8 text-[#FF1F23] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#6B7A90] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gender OS Tiles */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Two Operating Systems. One Principle.
            </h2>
            <p className="text-[#6B7A90]">
              Male and female biology metabolize nutrients differently, respond to different dosing windows, and carry gender-specific risk profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* MAXimo */}
            <Link to="/maximo" className="group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:translate-y-[-4px]" style={{ background: 'linear-gradient(135deg, #0A0E14 0%, #0D1520 100%)', border: '1px solid #1A2030' }}>
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #009BFF, transparent)' }} />
              <div className="space-y-4">
                <span className="text-3xl font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  <span className="text-white">MAX</span>
                  <span className="text-[#009BFF]">imo</span>
                  <span className="sup2 text-[#009BFF]">2</span>
                </span>
                <p className="text-sm text-[#6B7A90] uppercase tracking-wider">Male-Optimized Biological OS</p>
                <p className="text-[#6B7A90] text-sm leading-relaxed">
                  Engineered for male physiology. Testosterone support, prostate health biomarkers, male-specific nutrient timing, and iron metabolism calibrated for non-menstruating biology.
                </p>
                <div className="flex items-center gap-2 text-[#009BFF] text-sm font-medium pt-2">
                  <span>Explore MAXimo&#178;</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#009BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* MAXima */}
            <Link to="/maxima" className="group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:translate-y-[-4px]" style={{ background: 'linear-gradient(135deg, #0A0E14 0%, #140D18 100%)', border: '1px solid #1A2030' }}>
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #FF2D95, transparent)' }} />
              <div className="space-y-4">
                <span className="text-3xl font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  <span className="text-white">MAX</span>
                  <span className="text-[#FF2D95]">ima</span>
                  <span className="sup2 text-[#FF2D95]">2</span>
                </span>
                <p className="text-sm text-[#6B7A90] uppercase tracking-wider">Female-Optimized Biological OS</p>
                <p className="text-[#6B7A90] text-sm leading-relaxed">
                  Engineered for female physiology. Hormonal cycle awareness, iron metabolism for menstruating biology, thyroid sensitivity calibration, and pregnancy/lactation safety gates.
                </p>
                <div className="flex items-center gap-2 text-[#FF2D95] text-sm font-medium pt-2">
                  <span>Explore MAXima&#178;</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF2D95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol Box Section */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                The Protocol Box
              </h2>
              <p className="text-[#6B7A90] leading-relaxed">
                Every subscriber receives a premium daily organizer with compartments labeled by dosing window. This is not packaging. It is a branded medical-grade instrument that sits on your counter every day.
              </p>
              <div className="space-y-4">
                {[
                  "Morning (fasted), Midday (with food), Evening (before sleep) compartments",
                  "31-day stackable dosing system",
                  "Gender-coded trim: Cyan for MAXimo\u00B2, Magenta for MAXima\u00B2",
                  "QR code linking to your MAXync\u00B2 daily protocol view",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#FF1F23] mt-1 flex-shrink-0" />
                    <span className="text-sm text-[#6B7A90]">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/pricing" className="gx-btn-primary inline-block">
                View Subscription Tiers
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#111620] border border-[#1A2030] flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 rounded-2xl mx-auto flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF1F23, #CC191D)' }}>
                    <span className="text-white text-3xl font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>G<span className="sup2">2</span></span>
                  </div>
                  <p className="text-[#6B7A90] text-sm">Protocol Box</p>
                  <p className="text-xs text-[#6B7A90]/50">Precision instrument, not packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              How the OS Initializes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto stagger-children">
            {[
              { step: "01", title: "Blood Work", desc: "Upload results or order a kit. The Bloodwork Engine processes 41 biomarkers through 31 safety gates." },
              { step: "02", title: "Gender Layer", desc: "MAXimo\u00B2 or MAXima\u00B2 applies gender-specific interpretation to every biomarker reading." },
              { step: "03", title: "Protocol", desc: "Deterministic module selection. No human override. No commercial bias. Blood data drives every decision." },
              { step: "04", title: "MAXync\u00B2", desc: "Daily execution layer with calendar integration. Morning fasted, midday with food, evening before sleep." },
            ].map((item, i) => (
              <div key={i} className="gx-card p-6 text-center">
                <div className="font-mono text-2xl font-bold text-[#FF1F23] mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B7A90] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Blood Does Not Negotiate.
            </h2>
            <p className="text-[#6B7A90] text-lg">
              Neither does your biology. Stop guessing. Start measuring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment" className="gx-btn-primary text-center">
                Initialize Your Protocol
              </Link>
              <Link to="/compare" className="gx-btn-outline text-center">
                See How We Compare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
