import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Why We Built a Biological Operating System
        </h1>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>The Origin</h2>
            <p className="text-[#6B7A90] leading-relaxed">GenoMAX&#178; was born from a simple question: if blood work can tell a doctor exactly what is wrong with you, why does the supplement industry still guess?</p>
            <p className="text-[#6B7A90] leading-relaxed">The founder discovered that the $46 billion personalized supplement market was built on questionnaires and DNA tests, while the most clinically reliable data source, blood biomarkers, was being ignored or used superficially.</p>
            <p className="text-[#6B7A90] leading-relaxed">Analysis of 524,592+ clinical trial participants confirmed it: DNA-based supplement recommendations provide zero additional benefit beyond standard assessment. This was not a market gap. It was a medical negligence the industry had normalized.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>The Promise</h2>
            <div className="gx-card p-8 text-center">
              <p className="text-xl text-white italic" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Your blood speaks. We listen. Your protocol follows.</p>
              <p className="text-sm text-[#6B7A90] mt-4">This is not a tagline. It is an operational description. Blood results enter the system. The Bloodwork Engine interprets them through gender-specific logic. A deterministic protocol emerges. No human override. No commercial bias.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>The Category</h2>
            <p className="text-[#6B7A90] leading-relaxed">GenoMAX&#178; is not a supplement company. It is the first Gender-Optimized Biological Operating System. No other platform combines all three pillars: real-time blood biomarker interpretation, gender-optimized formulation logic, and chronobiology-based dosing schedules.</p>
            <p className="text-[#6B7A90] leading-relaxed">Companies that define new categories capture approximately 76% of total market value in their space. GenoMAX&#178; is positioned to define the rules, vocabulary, and competitive boundaries of this space.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="gx-section-surface text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Blood Does Not Negotiate.</h2>
        <Link to="/science" className="gx-btn-primary inline-flex items-center gap-2">
          Read the Full Science <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
