import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Search, Filter, Shield, Beaker, Zap, Brain, Heart, Moon, Flame, Dna } from "lucide-react";

const MAXIMO_STORE = "https://hsbj0n-kj.myshopify.com";
const MAXIMA_STORE = "https://fetkqh-60.myshopify.com";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  count: { male: number; female: number };
}

const categories: Category[] = [
  { id: "cardiovascular", name: "Cardiovascular", icon: <Heart className="w-5 h-5" />, description: "Heart health, lipid optimization, blood pressure support", count: { male: 22, female: 18 } },
  { id: "neurological", name: "Neurological", icon: <Brain className="w-5 h-5" />, description: "Cognitive performance, neuroprotection, focus", count: { male: 19, female: 16 } },
  { id: "immune", name: "Immune Support", icon: <Shield className="w-5 h-5" />, description: "Immune modulation, inflammation management, antioxidant defense", count: { male: 24, female: 20 } },
  { id: "hormonal", name: "Hormonal Balance", icon: <Dna className="w-5 h-5" />, description: "Gender-specific hormonal optimization and endocrine support", count: { male: 15, female: 12 } },
  { id: "metabolic", name: "Metabolic", icon: <Flame className="w-5 h-5" />, description: "Glucose metabolism, insulin sensitivity, energy production", count: { male: 20, female: 17 } },
  { id: "musculoskeletal", name: "Muscle & Recovery", icon: <Zap className="w-5 h-5" />, description: "Protein synthesis, bone density, recovery acceleration", count: { male: 18, female: 15 } },
  { id: "sleep", name: "Sleep & Recovery", icon: <Moon className="w-5 h-5" />, description: "Circadian rhythm, sleep quality, stress resilience", count: { male: 12, female: 10 } },
  { id: "digestive", name: "Gut Health", icon: <Beaker className="w-5 h-5" />, description: "Microbiome support, digestive enzymes, gut barrier integrity", count: { male: 14, female: 11 } },
];

const Shop = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [searchQuery, setSearchQuery] = useState("");

  const storeUrl = gender === "male" ? MAXIMO_STORE : MAXIMA_STORE;
  const filteredCategories = categories.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#05070A]">
      {/* Hero */}
      <section className="gx-hero pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Module <span className="text-[#FF1F23]">Catalog</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-8">
            GenoMAX&#178; does not sell generic supplements. Every module is clinically graded, gender-optimized, and only enters your protocol when your blood data demands it.
          </p>

          {/* Gender toggle */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setGender("male")}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                gender === "male" ? "bg-[#00AEEF]/15 border-2 border-[#00AEEF] text-[#00AEEF]" : "border-2 border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"
              }`}
            >
              MAXimo&#178; (Male)
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                gender === "female" ? "bg-[#E6007A]/15 border-2 border-[#E6007A] text-[#E6007A]" : "border-2 border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"
              }`}
            >
              MAXima&#178; (Female)
            </button>
          </div>

          <p className="text-xs text-[#6B7A90]/60">
            {gender === "male" ? "178 modules available" : "87 modules available"} | Powered by Supliful
          </p>
        </div>
      </section>

      {/* Important notice */}
      <section className="py-6 border-y" style={{ background: "#080B10", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#FFD600]">
            <Shield className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            Modules are protocol-driven. Your blood work determines what ships. <Link to="/assessment" className="underline hover:text-white">Start with the assessment</Link> for a personalized protocol.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="gx-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-[#6B7A90] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search categories..."
                className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg pl-11 pr-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none text-sm"
              />
            </div>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gx-btn-outline flex items-center gap-2 text-sm flex-shrink-0"
            >
              <Filter className="w-4 h-4" /> Full Store <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Category grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredCategories.map((cat) => (
              <a
                key={cat.id}
                href={`${storeUrl}/collections`}
                target="_blank"
                rel="noopener noreferrer"
                className="gx-card p-6 group hover:border-[#FF1F23]/30 transition-all flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${gender === "male" ? "bg-[#00AEEF]/10 text-[#00AEEF]" : "bg-[#E6007A]/10 text-[#E6007A]"}`}>
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF1F23] transition-colors">{cat.name}</h3>
                    <span className="text-xs font-mono text-[#6B7A90]">{gender === "male" ? cat.count.male : cat.count.female} modules</span>
                  </div>
                  <p className="text-xs text-[#6B7A90]">{cat.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#6B7A90] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct store links */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Browse the Full Catalog</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={MAXIMO_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="gx-card p-8 text-center group hover:border-[#00AEEF]/40 transition-colors"
              style={{ borderColor: "rgba(0, 155, 255, 0.15)" }}
            >
              <div className="text-2xl font-bold text-[#00AEEF] mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>MAXimo&#178;</div>
              <p className="text-xs font-mono text-[#6B7A90] mb-3">178 MALE-OPTIMIZED MODULES</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#00AEEF] group-hover:underline">
                Open Store <ExternalLink className="w-3 h-3" />
              </span>
            </a>
            <a
              href={MAXIMA_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="gx-card p-8 text-center group hover:border-[#E6007A]/40 transition-colors"
              style={{ borderColor: "rgba(230, 0, 122, 0.15)" }}
            >
              <div className="text-2xl font-bold text-[#E6007A] mb-2" style={{ fontFamily: "'Inter Tight', sans-serif" }}>MAXima&#178;</div>
              <p className="text-xs font-mono text-[#6B7A90] mb-3">87 FEMALE-OPTIMIZED MODULES</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#E6007A] group-hover:underline">
                Open Store <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gx-section text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-[#6B7A90] mb-4">No blood data = no protocol. That is the standard.</p>
          <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
            Begin Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shop;
