import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Minus } from "lucide-react";

const competitors = [
  { name: "GenoMAX\u00B2", price: "$89-169/mo", blood: true, gender: true, safety: "31 gates", timing: true, dna: "REJECTED", box: true },
  { name: "Bioniq", price: "$150/mo", blood: true, gender: false, safety: "Unknown", timing: false, dna: "Optional", box: false },
  { name: "Rootine", price: "$70/mo", blood: true, gender: false, safety: "Unknown", timing: false, dna: "Yes ($115)", box: false },
  { name: "Persona", price: "$66-92/mo", blood: false, gender: false, safety: "Drug interactions", timing: false, dna: "No", box: false },
  { name: "InsideTracker", price: "$119-489", blood: true, gender: false, safety: "Basic", timing: false, dna: "Optional", box: false },
  { name: "Thorne", price: "$100-350/test", blood: true, gender: false, safety: "Basic", timing: false, dna: "No", box: false },
];

const Compare = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          How GenoMAX&#178; <span className="text-[#FF1F23]">Compares</span>
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          We do not compete on price. We compete on clinical architecture. Here is what that means.
        </p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[#1A2030]">
                <th className="text-left text-xs font-mono text-[#6B7A90] uppercase tracking-wider py-4 px-3">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`text-center text-xs font-mono uppercase tracking-wider py-4 px-3 ${c.name.includes("GenoMAX") ? "text-[#FF1F23]" : "text-[#6B7A90]"}`}>{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-[#1A2030]/50">
                <td className="py-3 px-3 text-[#6B7A90]">Price</td>
                {competitors.map((c) => <td key={c.name} className="py-3 px-3 text-center text-white font-mono text-xs">{c.price}</td>)}
              </tr>
              <tr className="border-b border-[#1A2030]/50">
                <td className="py-3 px-3 text-[#6B7A90]">Blood Testing</td>
                {competitors.map((c) => <td key={c.name} className="py-3 px-3 text-center">{c.blood ? <Check className="w-4 h-4 text-[#00E676] mx-auto" /> : <X className="w-4 h-4 text-[#FF1F23] mx-auto" />}</td>)}
              </tr>
              <tr className="border-b border-[#1A2030]/50">
                <td className="py-3 px-3 text-[#6B7A90]">Gender-Optimized</td>
                {competitors.map((c) => <td key={c.name} className="py-3 px-3 text-center">{c.gender ? <Check className="w-4 h-4 text-[#00E676] mx-auto" /> : <X className="w-4 h-4 text-[#FF1F23] mx-auto" />}</td>)}
              </tr>
              <tr className="border-b border-[#1A2030]/50">
                <td className="py-3 px-3 text-[#6B7A90]">Safety Architecture</td>
                {competitors.map((c) => <td key={c.name} className={`py-3 px-3 text-center text-xs ${c.safety === "31 gates" ? "text-[#00E676] font-bold" : "text-[#6B7A90]"}`}>{c.safety}</td>)}
              </tr>
              <tr className="border-b border-[#1A2030]/50">
                <td className="py-3 px-3 text-[#6B7A90]">Chronobiology Dosing</td>
                {competitors.map((c) => <td key={c.name} className="py-3 px-3 text-center">{c.timing ? <Check className="w-4 h-4 text-[#00E676] mx-auto" /> : <X className="w-4 h-4 text-[#FF1F23] mx-auto" />}</td>)}
              </tr>
              <tr className="border-b border-[#1A2030]/50">
                <td className="py-3 px-3 text-[#6B7A90]">DNA Testing</td>
                {competitors.map((c) => <td key={c.name} className={`py-3 px-3 text-center text-xs ${c.dna === "REJECTED" ? "text-[#FF1F23] font-bold font-mono" : "text-[#6B7A90]"}`}>{c.dna}</td>)}
              </tr>
              <tr>
                <td className="py-3 px-3 text-[#6B7A90]">Protocol Box</td>
                {competitors.map((c) => <td key={c.name} className="py-3 px-3 text-center">{c.box ? <Check className="w-4 h-4 text-[#00E676] mx-auto" /> : <Minus className="w-4 h-4 text-[#6B7A90]/30 mx-auto" />}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="gx-section-surface text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>They Sell Supplements. We Run an Operating System.</h2>
        <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
          Initialize Your Protocol <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Compare;
