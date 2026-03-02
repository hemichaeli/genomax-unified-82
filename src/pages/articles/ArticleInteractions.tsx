import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Zap, Clock, AlertTriangle } from "lucide-react";

const interactions = [
  {
    title: "Iron Blocks Zinc Absorption",
    color: "#FF1F23",
    mechanism:
      "Iron and zinc compete for the same divalent metal transporter (DMT1) in the intestinal lumen. When taken simultaneously, iron doses above 25mg reduce zinc absorption by up to 50%. This is not a theoretical concern. It is a measured pharmacokinetic interaction documented across multiple randomized controlled trials.",
    consequence:
      "If your protocol includes both iron and zinc (common for individuals with depleted ferritin and suboptimal zinc-to-copper ratios), taking them at the same time means you are paying for zinc you are not absorbing.",
    solution:
      "GenoMAX\u00B2 assigns iron to the morning fasted window and zinc to the evening window, ensuring 8+ hours of separation. The Bloodwork Engine also enforces Safety Gate blocking: if ferritin exceeds 200 ng/mL, iron-containing modules are blocked entirely.",
  },
  {
    title: "Calcium Competes with Magnesium",
    color: "#FFD600",
    mechanism:
      "Calcium and magnesium share intestinal absorption pathways and compete for the same transport channels. High calcium intake (above 500mg in a single dose) significantly reduces magnesium absorption. This interaction is bidirectional: high magnesium can also impair calcium uptake, though the effect is smaller.",
    consequence:
      "Many multivitamins combine calcium and magnesium in the same tablet. This is pharmacokinetically counterproductive. You are creating a competition at the absorption site that neither mineral wins completely.",
    solution:
      "GenoMAX\u00B2 separates calcium-dominant and magnesium-dominant modules into different dosing windows. Calcium is typically assigned to the midday window (with food containing dietary fat for co-absorption of vitamin D), while magnesium is assigned to the evening window where it also supports sleep quality through GABA receptor modulation.",
  },
  {
    title: "Fat-Soluble Vitamins Need Fat",
    color: "#009BFF",
    mechanism:
      "Vitamins A, D, E, and K are lipophilic molecules that require dietary fat for micelle formation in the small intestine. Without fat present during absorption, bioavailability drops dramatically. Studies show vitamin D absorption increases by 32-50% when taken with a fat-containing meal versus fasted.",
    consequence:
      "If you take your vitamin D supplement first thing in the morning on an empty stomach, you are absorbing roughly half of what you paid for. The remaining dose passes through unabsorbed.",
    solution:
      "GenoMAX\u00B2 assigns all fat-soluble vitamin modules to the midday window with the instruction to take with a meal containing dietary fat. This is not a suggestion. It is a pharmacokinetic requirement enforced at the protocol generation level.",
  },
];

const ArticleInteractions = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="pt-32 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link to="/learn" className="text-xs text-[#6B7A90] hover:text-white flex items-center gap-1 mb-8 transition-colors">
          <ArrowLeft className="w-3 h-3" /> Back to Learn
        </Link>
        <div className="gx-safety-badge w-fit mb-4">
          <Zap className="w-3 h-3" />
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          The 3 Nutrient Interactions Your Supplement Brand Ignores
        </h1>
        <p className="text-lg text-[#6B7A90] italic">
          Iron blocks zinc. Calcium fights magnesium. Fat-soluble vitamins need fat. Timing is clinical, not optional.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <article className="space-y-8 text-[#A0AEC0] leading-relaxed">
          <p className="text-lg">
            Open any supplement bottle. Read the label. You will find a list of ingredients, dosages, and a single instruction: "Take 2 capsules daily with food."
          </p>
          <p>
            That instruction treats nutrient absorption as a passive process. Pour the ingredients into the body, and the body will sort it out. This is pharmacokinetically false. Nutrient absorption is a competitive process where molecules fight for the same transport channels, require specific conditions for bioavailability, and interact with each other in ways that can enhance or destroy efficacy.
          </p>
          <p>
            Most supplement companies know this. They ignore it because engineering around it is expensive, complicated, and impossible to achieve with a single-capsule-per-day format. The "take with food" instruction is the industry's way of acknowledging the problem while refusing to solve it.
          </p>

          <div className="gx-card p-6 border-l-4" style={{ borderLeftColor: "#FFD600" }}>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#FFD600] flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-white text-sm mb-1">The GenoMAX&#178; Dosing Architecture</div>
                <p className="text-sm text-[#6B7A90]">
                  Every protocol is separated into three dosing windows: <strong className="text-white">Morning (fasted)</strong>, <strong className="text-white">Midday (with food)</strong>, and <strong className="text-white">Evening (before sleep)</strong>. Each module is assigned to its optimal window based on absorption kinetics, nutrient interactions, and chronobiology. This is not a convenience feature. It is a clinical requirement.
                </p>
              </div>
            </div>
          </div>

          {interactions.map((item, i) => (
            <div key={i} className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                <span className="font-mono text-sm px-2.5 py-1 rounded" style={{ color: item.color, background: `${item.color}15` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.title}
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-mono text-[#6B7A90]/60 uppercase tracking-wider mb-1">Mechanism</div>
                  <p>{item.mechanism}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#6B7A90]/60 uppercase tracking-wider mb-1">Consequence</div>
                  <p>{item.consequence}</p>
                </div>
                <div className="gx-card p-4" style={{ borderColor: `${item.color}20` }}>
                  <div className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: item.color }}>GenoMAX&#178; Solution</div>
                  <p className="text-sm">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Beyond These Three
          </h2>
          <p>
            These three interactions are the most clinically significant, but they are not exhaustive. Vitamin C enhances non-heme iron absorption by reducing ferric to ferrous iron. Vitamin K2 directs calcium into bones rather than arteries, making it a critical co-factor for calcium supplementation. Probiotics taken with highly acidic foods show reduced colony-forming unit viability.
          </p>
          <p>
            The GenoMAX&#178; Bloodwork Engine accounts for these interactions at the protocol generation level. Modules are not just selected based on biomarker deficiencies. They are sequenced based on pharmacokinetic compatibility and assigned to dosing windows that maximize absorption while minimizing competitive inhibition.
          </p>
          <p>
            A supplement brand gives you a list of ingredients. A Biological Operating System gives you a protocol engineered for your biology, timed for your pharmacokinetics, and enforced by safety gates that refuse to let you take the right things at the wrong time.
          </p>
          <p className="text-white font-medium">
            Blood does not negotiate. Neither does pharmacokinetics.
          </p>
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="gx-card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Stop Taking the Right Things at the Wrong Time
            </h3>
            <p className="text-sm text-[#6B7A90] mb-6 max-w-lg mx-auto">
              GenoMAX&#178; protocols include chronobiology-based dosing schedules: morning fasted, midday with food, evening before sleep. Engineered for absorption, not convenience.
            </p>
            <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
              Initialize Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ArticleInteractions;
