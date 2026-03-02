import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Activity, Heart, Shield, Droplets } from "lucide-react";

const biomarkerGroups = [
  {
    title: "Iron Status",
    icon: Droplets,
    color: "#FF1F23",
    markers: [
      { name: "Ferritin", what: "Iron storage protein. The single most important marker for iron status.", low: "Depleted stores. Fatigue, poor exercise recovery, impaired cognition. Supplementation indicated.", high: "Iron overload risk. Oxidative stress, organ damage. Iron supplementation must be blocked. GenoMAX\u00B2 Safety Gate triggers at 200 ng/mL.", gender: "Premenopausal women require dramatically different interpretation due to menstrual iron losses. GenoMAX\u00B2 applies gender-specific reference ranges." },
      { name: "Serum Iron + TIBC", what: "Current circulating iron and binding capacity. Combined with ferritin, provides complete iron picture.", low: "Active iron deficiency even if ferritin appears normal (can be elevated by inflammation).", high: "Saturation risk. CRP cross-reference required to rule out inflammatory masking.", gender: "MAXima\u00B2 protocols account for menstrual cycle phase when interpreting iron panel results." },
    ],
  },
  {
    title: "Metabolic Health",
    icon: Heart,
    color: "#FFD600",
    markers: [
      { name: "Fasting Glucose + Insulin (HOMA-IR)", what: "Insulin resistance index. Computed from fasting glucose and insulin. A derived marker the Bloodwork Engine calculates automatically.", low: "Good insulin sensitivity.", high: "Insulin resistance developing. Metabolic syndrome risk. Chromium, berberine, and magnesium protocols may be indicated depending on full panel.", gender: "Male and female HOMA-IR thresholds differ. Polycystic ovary syndrome (PCOS) in women creates distinct metabolic patterns requiring MAXima\u00B2-specific logic." },
      { name: "Homocysteine", what: "Methylation cycle marker and independent cardiovascular risk factor.", low: "Healthy methylation.", high: "Elevated cardiovascular risk. B12, folate, and B6 status must be cross-referenced. MTHFR context (when available) informs whether methylfolate or folic acid is appropriate.", gender: "Men tend to have higher homocysteine due to greater muscle mass and creatine metabolism. Reference ranges are gender-adjusted in the Bloodwork Engine." },
    ],
  },
  {
    title: "Inflammation and Immune Function",
    icon: Shield,
    color: "#009BFF",
    markers: [
      { name: "C-Reactive Protein (CRP)", what: "Acute phase reactant. When CRP is elevated, the entire blood panel must be interpreted differently.", low: "No acute inflammation. Biomarker readings are reliable.", high: "Acute inflammation active. Ferritin may be falsely elevated (iron is sequestered during inflammation). The Bloodwork Engine activates CRP exception logic, holding iron-related decisions until the next draw.", gender: "Estrogen influences baseline CRP. MAXima\u00B2 applies female-specific CRP thresholds to avoid false-positive inflammation flags." },
      { name: "25-Hydroxyvitamin D", what: "The body's usable form of vitamin D. Governs calcium absorption, immune modulation, and gene expression regulation.", low: "Impaired calcium absorption, weakened immune function, increased inflammatory markers. Supplementation with D3 (not D2) indicated, assigned to midday window with dietary fat.", high: "Rare but possible with over-supplementation. Hypercalcemia risk. Dosing reduced or paused.", gender: "Women have higher vitamin D requirements during pregnancy and lactation. MAXima\u00B2 adjusts target ranges for reproductive status." },
    ],
  },
];

const ArticleBloodWork = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="pt-32 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link to="/learn" className="text-xs text-[#6B7A90] hover:text-white flex items-center gap-1 mb-8 transition-colors">
          <ArrowLeft className="w-3 h-3" /> Back to Learn
        </Link>
        <div className="gx-safety-badge w-fit mb-4">
          <Activity className="w-3 h-3" />
          <span>10 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          What Your Blood Work Really Means for Your Biology
        </h1>
        <p className="text-lg text-[#6B7A90] italic">
          Real-time biochemistry vs. static predispositions. A biomarker-by-biomarker guide to what your body is actually telling you.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <article className="space-y-8 text-[#A0AEC0] leading-relaxed">
          <p className="text-lg">
            A comprehensive blood panel is the closest thing to a real-time readout of your biological state. Not what your body might do based on genetic predispositions. Not what you think is happening based on how you feel. What is actually, measurably, biochemically occurring inside you right now.
          </p>
          <p>
            The GenoMAX&#178; Bloodwork Engine processes 41 biomarkers through 31 safety gates. Each biomarker is not interpreted in isolation. It is cross-referenced against other markers, evaluated through gender-specific reference ranges, and checked against safety thresholds before any protocol recommendation is generated.
          </p>
          <p>
            Here is what the most clinically significant biomarkers actually tell you, what happens when they are abnormal, and how GenoMAX&#178; responds differently than conventional supplement recommendations.
          </p>

          {biomarkerGroups.map((group) => (
            <div key={group.title} className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                <group.icon className="w-6 h-6" style={{ color: group.color }} />
                {group.title}
              </h2>
              {group.markers.map((m) => (
                <div key={m.name} className="gx-card p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white">{m.name}</h3>
                  <p className="text-sm">{m.what}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg" style={{ background: "rgba(0,230,118,0.05)", border: "1px solid rgba(0,230,118,0.1)" }}>
                      <div className="text-xs font-mono text-[#00E676] mb-1">LOW / OPTIMAL</div>
                      <p className="text-xs text-[#6B7A90]">{m.low}</p>
                    </div>
                    <div className="p-3 rounded-lg" style={{ background: "rgba(255,31,35,0.05)", border: "1px solid rgba(255,31,35,0.1)" }}>
                      <div className="text-xs font-mono text-[#FF1F23] mb-1">HIGH / CRITICAL</div>
                      <p className="text-xs text-[#6B7A90]">{m.high}</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "rgba(0,155,255,0.05)", border: "1px solid rgba(0,155,255,0.1)" }}>
                    <div className="text-xs font-mono text-[#009BFF] mb-1">GENDER-SPECIFIC LOGIC</div>
                    <p className="text-xs text-[#6B7A90]">{m.gender}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Why Interpretation Matters More Than Numbers
          </h2>
          <p>
            A lab report gives you numbers. Numbers without clinical context are noise. A ferritin of 180 ng/mL in a man with CRP of 0.5 mg/L means genuine iron overload. The same ferritin in a woman with CRP of 12 mg/L may reflect inflammatory iron sequestration, not true excess. The correct action for the first case is to block iron. The correct action for the second is to wait for inflammation to resolve and retest.
          </p>
          <p>
            This is why the Bloodwork Engine does not simply map values to supplements. It cross-references markers, applies gender-specific logic, checks safety gates, and produces a protocol that accounts for the relationships between biomarkers, not just their individual values.
          </p>
          <p>
            A zinc-to-copper ratio below 0.7 suggests copper dominance that may impair immune function and increase oxidative stress, even if both zinc and copper individually fall within "normal" reference ranges. HOMA-IR (computed from fasting glucose and insulin together) reveals insulin resistance that neither marker shows alone. These derived computations are built into the Engine because no individual biomarker tells the complete story.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Your Biology Is Not Static
          </h2>
          <p>
            Blood biomarkers change with seasons, stress, diet, medication, age, and hormonal cycles. A vitamin D level measured in August will differ from one measured in February. Cortisol and inflammatory markers fluctuate with stress. Iron status in premenopausal women shifts with menstrual cycling.
          </p>
          <p>
            This is precisely why GenoMAX&#178; recommends quarterly retesting. Not as an upsell. As a clinical requirement. A protocol generated from a single blood draw is a snapshot of a moving target. Every retest refines the picture, updates the protocol, and creates longitudinal data that makes each subsequent recommendation more precise than the last.
          </p>
          <p className="text-white font-medium">
            Your blood speaks. But only if you are listening more than once.
          </p>
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="gx-card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              41 Biomarkers. 31 Safety Gates. Your Biology.
            </h3>
            <p className="text-sm text-[#6B7A90] mb-6 max-w-lg mx-auto">
              Upload your existing blood work or order a panel. The Bloodwork Engine does the rest, with gender-specific intelligence no questionnaire can replicate.
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

export default ArticleBloodWork;
