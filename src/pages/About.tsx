import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            The Origin of <span className="text-[#FF1F23]">GenoMAX&#178;</span>
          </h1>
          <p className="text-lg text-[#6B7A90] leading-relaxed">
            GenoMAX&#178; was born from a simple question: if blood work can tell a doctor exactly what is wrong with you, why does the supplement industry still guess?
          </p>
        </div>
      </section>
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-[#6B7A90] leading-relaxed">The founder discovered that the $46 billion personalized supplement market was built on questionnaires and DNA tests, while the most clinically reliable data source, blood biomarkers, was being ignored or used superficially. This was not a market gap. It was a medical negligence the industry had normalized.</p>
            <p className="text-[#6B7A90] leading-relaxed">After analyzing 524,592+ clinical trial participants and finding zero additional benefit from DNA-based nutrition, the path became clear: build a system where blood chemistry is the single source of truth, gender biology is respected as a clinical variable, and no ingredient enters a protocol because it is profitable. Only because the blood data demands it.</p>
            <p className="text-[#6B7A90] leading-relaxed">The result is not a supplement company. It is a Biological Operating System. One that reads human blood chemistry, applies gender-specific clinical intelligence, and outputs a deterministic protocol calibrated to each individual's biology.</p>
            <div className="gx-card p-8 text-center">
              <p className="text-xl font-bold text-white italic" style={{ fontFamily: "'Inter Tight', sans-serif" }}>"Your blood speaks. We listen. Your protocol follows."</p>
              <p className="text-xs text-[#6B7A90] mt-4">This is not a tagline. It is an operational description.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gx-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/science" className="gx-btn-primary inline-block">Read the Science <ArrowRight className="w-4 h-4 inline ml-2" /></Link>
        </div>
      </section>
    </div>
  );
};

export default About;
