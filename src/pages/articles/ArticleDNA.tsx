import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Beaker, AlertTriangle, TrendingDown } from "lucide-react";

const ArticleDNA = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="pt-32 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link to="/learn" className="text-xs text-[#6B7A90] hover:text-white flex items-center gap-1 mb-8 transition-colors">
          <ArrowLeft className="w-3 h-3" /> Back to Learn
        </Link>
        <div className="gx-safety-badge w-fit mb-4">
          <Beaker className="w-3 h-3" />
          <span>8 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Why Your DNA Test Cannot Tell You What Supplements to Take
        </h1>
        <p className="text-lg text-[#6B7A90] italic">
          524,592 clinical trial participants. Zero additional benefit. The data is unambiguous.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <article className="space-y-8 text-[#A0AEC0] leading-relaxed">
          <p className="text-lg">
            The personalized supplement industry has a favorite sales pitch: spit into a tube, send us your DNA, and we will tell you exactly what vitamins you need. Companies charge $115 to $200 for this test. The implicit promise is that your genetic code contains a nutrition roadmap that questionnaires and blood work cannot match.
          </p>
          <p>
            We wanted this to be true. A deterministic genetic map to nutrient optimization would be an elegant solution. So we did what any evidence-based system should do before building on an assumption: we examined the clinical data.
          </p>

          <div className="gx-card p-6 border-l-4" style={{ borderLeftColor: "#FF1F23" }}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FF1F23] flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-white text-sm mb-1">The Core Finding</div>
                <p className="text-sm text-[#6B7A90]">
                  Analysis of 524,592+ clinical trial participants across the largest meta-analyses and systematic reviews demonstrates that DNA-based supplement recommendations provide no additional benefit beyond standard dietary assessment. The effect sizes were negligible. The confidence intervals overlapped with placebo.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            What the Studies Actually Show
          </h2>
          <p>
            The appeal of nutrigenomics, the science of how genes interact with nutrients, is real. Specific genetic variants do affect nutrient metabolism. MTHFR polymorphisms influence folate processing. VDR variants affect vitamin D receptor sensitivity. FUT2 mutations can impair B12 absorption.
          </p>
          <p>
            But there is a critical difference between "this gene variant affects this pathway" and "testing this gene variant improves supplement outcomes." The first statement is scientifically valid. The second has been tested repeatedly, and it fails.
          </p>
          <p>
            Large-scale randomized controlled trials comparing DNA-guided nutrition advice to standard dietary assessment consistently show no measurable difference in health outcomes. Participants who received genetically personalized recommendations did not achieve better biomarker improvements, did not report better health outcomes, and did not demonstrate better adherence than those who received standard evidence-based guidance.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Why DNA Cannot Substitute for Blood
          </h2>
          <p>
            The fundamental problem is temporal. DNA is static. It tells you what your body might tend to do under certain conditions. It cannot tell you what your body is actually doing right now.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="gx-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-4 h-4 text-[#FF1F23]" />
                <span className="text-sm font-bold text-white">DNA Testing</span>
              </div>
              <ul className="space-y-2 text-sm text-[#6B7A90]">
                <li>Static predispositions from birth</li>
                <li>Probabilistic, not deterministic</li>
                <li>Cannot measure current nutrient levels</li>
                <li>Ignores diet, stress, medication, lifestyle</li>
                <li>Same result at age 20 and age 60</li>
              </ul>
            </div>
            <div className="gx-card p-5" style={{ borderColor: "rgba(0, 230, 118, 0.2)" }}>
              <div className="flex items-center gap-2 mb-3">
                <Beaker className="w-4 h-4 text-[#00E676]" />
                <span className="text-sm font-bold text-white">Blood Biomarkers</span>
              </div>
              <ul className="space-y-2 text-sm text-[#6B7A90]">
                <li>Real-time biochemical measurements</li>
                <li>Deterministic: your actual levels right now</li>
                <li>Reflects current diet, medication, stress</li>
                <li>Changes with seasons, age, lifestyle</li>
                <li>Directly actionable: low ferritin = supplement iron</li>
              </ul>
            </div>
          </div>

          <p>
            Your ferritin level tells you exactly how much iron your body has stored right now. Your 25-hydroxyvitamin D tells you exactly whether supplementation is needed and at what dose. Your homocysteine tells you whether your methylation cycle is functioning or accumulating cardiovascular risk.
          </p>
          <p>
            A DNA test can tell you that you carry an MTHFR variant that might reduce folate metabolism efficiency. But it cannot tell you whether your folate is actually low. Only blood can do that. And if your folate is normal despite the variant, supplementation is unnecessary and potentially counterproductive.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            The Business Model Problem
          </h2>
          <p>
            DNA testing for supplements has a compelling business model even if the clinical utility is marginal. The test is a one-time purchase that creates a perception of deep personalization. It generates a report filled with genetic markers, pathways, and recommendations that feels authoritative. And because the genome does not change, the company never needs to retest, which eliminates ongoing lab costs.
          </p>
          <p>
            Blood testing is more expensive per interaction. It requires repeat testing every 90 days to track changes. It requires clinical interpretation that accounts for gender, age, medication, and acute conditions like inflammation. It demands safety gates that block dangerous recommendations when biomarkers indicate contraindications.
          </p>
          <p>
            The supplement industry chose the easier path. GenoMAX&#178; chose the clinically valid one.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            What This Means for You
          </h2>
          <p>
            If you have already taken a DNA test for supplement recommendations, the information is not worthless. Some genetic variants provide useful context when combined with blood biomarker data. GenoMAX&#178;'s Bloodwork Engine incorporates genetic context at Tier 3 of its safety gate architecture when the data is available and clinically relevant.
          </p>
          <p>
            But if you are choosing between a DNA test and a blood panel as the basis for your supplement protocol, the clinical evidence is clear: blood biomarkers provide actionable, real-time, deterministic data that DNA testing cannot replicate.
          </p>
          <p>
            Blood does not guess. Blood does not rely on probabilities. Blood does not care about marketing narratives.
          </p>
          <p className="text-white font-medium">
            Blood does not negotiate.
          </p>
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="gx-card p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Your Blood Speaks. We Listen.
            </h3>
            <p className="text-sm text-[#6B7A90] mb-6 max-w-lg mx-auto">
              GenoMAX&#178; processes 41 blood biomarkers through 31 safety gates with gender-specific clinical intelligence. No DNA test required. No guessing.
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

export default ArticleDNA;
