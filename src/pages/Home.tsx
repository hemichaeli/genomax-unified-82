import { Link } from "react-router-dom";
import { ArrowRight, Shield, Beaker, Clock, Activity } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Hero */}
      <section className="gx-hero pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gx-safety-badge mx-auto w-fit mb-6">
            <Activity className="w-3 h-3" />
            <span>Gender-Optimized Biological Operating System</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Your Blood Speaks.
            <br />
            <span className="text-[#FF1F23]">We Listen.</span>
            <br />
            Your Protocol Follows.
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-10">
            GenoMAX&#178; is the first Biological Operating System that reads your blood chemistry, applies gender-specific clinical intelligence, and outputs a deterministic supplement protocol calibrated to your biology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment" className="gx-btn-primary flex items-center gap-2 justify-center">
              Initialize Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/science" className="gx-btn-outline flex items-center gap-2 justify-center">
              Read the Science
            </Link>
          </div>
        </div>
      </section>

      {/* Evidence Bar */}
      <section className="py-8 border-y" style={{ background: "#080B10", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="font-mono text-2xl font-bold text-white">41</div><div className="text-xs text-[#6B7A90] mt-1">Biomarkers Processed</div></div>
            <div><div className="font-mono text-2xl font-bold text-white">31</div><div className="text-xs text-[#6B7A90] mt-1">Safety Gates</div></div>
            <div><div className="font-mono text-2xl font-bold text-white">524,592+</div><div className="text-xs text-[#6B7A90] mt-1">Participants Analyzed</div></div>
            <div><div className="font-mono text-2xl font-bold text-[#FF1F23]">0</div><div className="text-xs text-[#6B7A90] mt-1">Commercial Overrides</div></div>
          </div>
        </div>
      </section>

      {/* POV Pillars */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Why the Old Way is Broken</h2>
            <p className="text-[#6B7A90] mt-4 max-w-2xl mx-auto">The $46 billion supplement industry is built on guesswork. GenoMAX&#178; replaces it with deterministic biology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="gx-card p-8">
              <Beaker className="w-8 h-8 text-[#FF1F23] mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">DNA Testing is Clinically Useless</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed">524,592+ clinical trial participants prove DNA-based nutrition provides 0% additional benefit. Blood biomarkers provide real-time, actionable data.</p>
            </div>
            <div className="gx-card p-8">
              <Shield className="w-8 h-8 text-[#009BFF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Unisex Ignores Biology</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed">Iron metabolism, hormonal cycling, thyroid sensitivity differ between sexes. One-protocol-fits-all is the nutritional equivalent of universal eyeglasses.</p>
            </div>
            <div className="gx-card p-8">
              <Clock className="w-8 h-8 text-[#FFD600] mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Wrong Timing Wastes Everything</h3>
              <p className="text-sm text-[#6B7A90] leading-relaxed">Iron blocks zinc. Calcium competes with magnesium. Fat-soluble vitamins need fat. The dosing schedule is clinical, not convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gender OS Tiles */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Two Operating Systems. One Standard.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/maximo" className="gx-card p-8 text-center group hover:border-[#009BFF]/40 transition-colors" style={{ borderColor: "rgba(0, 155, 255, 0.15)" }}>
              <div className="text-2xl font-bold text-[#009BFF] mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>MAXimo&#178;</div>
              <div className="text-xs font-mono text-[#6B7A90] uppercase tracking-wider mb-4">Male-Optimized BioOS</div>
              <p className="text-sm text-[#6B7A90]">Testosterone optimization, prostate biomarkers, male iron metabolism, non-menstruating calibration.</p>
              <div className="mt-4 text-xs text-[#009BFF] group-hover:underline">Explore MAXimo&#178; &rarr;</div>
            </Link>
            <Link to="/maxima" className="gx-card p-8 text-center group hover:border-[#FF2D95]/40 transition-colors" style={{ borderColor: "rgba(255, 45, 149, 0.15)" }}>
              <div className="text-2xl font-bold text-[#FF2D95] mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>MAXima&#178;</div>
              <div className="text-xs font-mono text-[#6B7A90] uppercase tracking-wider mb-4">Female-Optimized BioOS</div>
              <p className="text-sm text-[#6B7A90]">Hormonal cycle awareness, thyroid sensitivity, female iron metabolism, pregnancy safety gates.</p>
              <div className="mt-4 text-xs text-[#FF2D95] group-hover:underline">Explore MAXima&#178; &rarr;</div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12" style={{ fontFamily: "'Inter Tight', sans-serif" }}>How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Blood Work", desc: "Upload existing results or order a kit. The Bloodwork Engine needs your data." },
              { step: "02", title: "41 Biomarkers", desc: "Processed through 31 safety gates across 3 tiers. No shortcuts. No overrides." },
              { step: "03", title: "Your Protocol", desc: "Gender-specific modules with chronobiology-based dosing: morning, midday, evening." },
              { step: "04", title: "Track + Retest", desc: "Quarterly retesting shows measurable improvement. Your protocol evolves with your biology." },
            ].map((item) => (
              <div key={item.step} className="gx-card p-6">
                <div className="font-mono text-2xl font-bold text-[#FF1F23] mb-3">{item.step}</div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B7A90] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Initialize Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gx-section-surface text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Blood Does Not Negotiate.</h2>
          <p className="text-[#6B7A90] mb-8">Neither should your supplement protocol.</p>
          <Link to="/pricing" className="gx-btn-outline inline-block">View Pricing</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
