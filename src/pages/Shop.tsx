import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ShoppingBag, Package, Search } from "lucide-react";

const SUPLIFUL_MAXIMO = "https://genomax-2.myshopify.com";
const SUPLIFUL_MAXIMA = "https://fetkqh-60.myshopify.com";

type Line = "maximo" | "maxima";

const categories = [
  { slug: "all", label: "All Modules" },
  { slug: "cardiovascular", label: "Cardiovascular" },
  { slug: "immune", label: "Immune" },
  { slug: "neuro", label: "Neuro-Cognitive" },
  { slug: "muscle", label: "Muscle & Recovery" },
  { slug: "hormonal", label: "Hormonal" },
  { slug: "metabolic", label: "Metabolic" },
  { slug: "digestive", label: "Digestive" },
  { slug: "cellular", label: "Cellular" },
];

const Shop = () => {
  const [line, setLine] = useState<Line>("maximo");

  const shopUrl = line === "maximo" ? SUPLIFUL_MAXIMO : SUPLIFUL_MAXIMA;
  const accentColor = line === "maximo" ? "#00AEEF" : "#E6007A";
  const productCount = line === "maximo" ? 178 : 87;

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Protocol <span style={{ color: accentColor }}>Modules</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto mb-8">
            GenoMAX&#178; does not sell generic supplements. Every module in your protocol is selected by the Bloodwork Engine based on your biomarker data through 31 safety gates.
          </p>

          {/* Line selector */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setLine("maximo")}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                line === "maximo"
                  ? "bg-[#00AEEF]/15 border-2 border-[#00AEEF] text-[#00AEEF]"
                  : "border-2 border-[#1A2030] text-[#6B7A90] hover:border-[#00AEEF]/30"
              }`}
            >
              MAXimo&#178; (Male)
            </button>
            <button
              onClick={() => setLine("maxima")}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                line === "maxima"
                  ? "bg-[#E6007A]/15 border-2 border-[#E6007A] text-[#E6007A]"
                  : "border-2 border-[#1A2030] text-[#6B7A90] hover:border-[#E6007A]/30"
              }`}
            >
              MAXima&#178; (Female)
            </button>
          </div>

          <p className="text-xs text-[#6B7A90]/60 font-mono">{productCount} precision modules available</p>
        </div>
      </section>

      {/* Important notice */}
      <section className="gx-section pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="gx-card p-6 border-l-4" style={{ borderLeftColor: accentColor }}>
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">How Module Selection Works</h3>
                <p className="text-xs text-[#6B7A90]">
                  Your protocol is not self-selected. The Bloodwork Engine analyzes your biomarkers and determines which modules your biology requires. Direct module purchases are available for users who have completed their blood work assessment and received their protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="gx-section pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Browse by System</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={cat.slug === "all" ? `${shopUrl}/collections/all` : `${shopUrl}/collections/${cat.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gx-card p-4 text-center hover:border-[#6B7A90]/30 transition-colors group"
              >
                <span className="text-sm text-[#6B7A90] group-hover:text-white transition-colors">{cat.label}</span>
                <ExternalLink className="w-3 h-3 text-[#6B7A90]/30 group-hover:text-[#6B7A90] mx-auto mt-1 transition-colors" />
              </a>
            ))}
          </div>

          {/* Direct store link */}
          <div className="text-center space-y-4">
            <a
              href={`${shopUrl}/collections/all`}
              target="_blank"
              rel="noopener noreferrer"
              className="gx-btn-primary inline-flex items-center gap-2"
              style={{ backgroundColor: accentColor }}
            >
              <ShoppingBag className="w-4 h-4" />
              Open {line === "maximo" ? "MAXimo\u00B2" : "MAXima\u00B2"} Store
              <ExternalLink className="w-3 h-3" />
            </a>
            <p className="text-xs text-[#6B7A90]/60">Powered by Supliful. Secure checkout. Modules ship within 3-5 business days.</p>
          </div>
        </div>
      </section>

      {/* Recommended path */}
      <section className="gx-section-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            The Recommended Path
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="gx-card p-6 text-center">
              <div className="font-mono text-3xl font-bold text-white mb-2">01</div>
              <h3 className="text-sm font-bold text-white mb-2">Upload Blood Work</h3>
              <p className="text-xs text-[#6B7A90]">OCR processes your existing lab results or order a kit through our partner network.</p>
            </div>
            <div className="gx-card p-6 text-center">
              <div className="font-mono text-3xl font-bold text-white mb-2">02</div>
              <h3 className="text-sm font-bold text-white mb-2">Protocol Generated</h3>
              <p className="text-xs text-[#6B7A90]">41 biomarkers, 31 safety gates, gender-specific logic. Your protocol is deterministic.</p>
            </div>
            <div className="gx-card p-6 text-center">
              <div className="font-mono text-3xl font-bold text-white mb-2">03</div>
              <h3 className="text-sm font-bold text-white mb-2">Modules Ship</h3>
              <p className="text-xs text-[#6B7A90]">Your Protocol Box arrives with morning, midday, and evening compartments matching your dosing schedule.</p>
            </div>
          </div>
          <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
            Begin Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shop;
